<template>
  <div>
    <vesp-table
      v-if="isActive"
      :url="url"
      :header-actions="headerActions"
      :table-actions="tableActions"
      :fields="fields"
      :filters="filters"
      :sort="sort"
      :dir="dir"
      :row-class="rowClass"
    />
    <nuxt-child />
  </div>
</template>

<script>
export const url = 'admin/users'
export default {
  name: 'UsersPage',
  validate({app}) {
    return app.$hasScope('users')
  },
  data() {
    return {
      url,
      filters: {
        query: '',
      },
      sort: 'id',
      dir: 'asc',
    }
  },
  head() {
    return {
      title: [this.$t('models.user.title_many'), this.$t('project')].join(' / '),
    }
  },
  computed: {
    isActive() {
      return !this.$route.name.includes('roles')
    },
    headerActions() {
      return [
        {route: 'users-create', icon: 'plus', title: this.$t('actions.create')},
        {route: 'users-roles', icon: 'users', title: this.$t('models.user_role.title_many'), variant: 'info'},
      ]
    },
    tableActions() {
      return [
        {route: 'users-edit-id', icon: 'edit', title: this.$t('actions.edit')},
        {function: 'onDelete', icon: 'times', title: this.$t('actions.delete'), variant: 'danger'},
      ]
    },
    fields() {
      return [
        {key: 'id', label: this.$t('components.table.columns.id'), sortable: true},
        {key: 'username', label: this.$t('models.user.username'), sortable: true},
        {key: 'fullname', label: this.$t('models.user.fullname'), sortable: true},
        {key: 'role.title', label: this.$t('models.user.role')},
        {
          key: 'created_at',
          label: this.$t('components.table.columns.created_at'),
          formatter: this.$options.filters.datetime,
          sortable: true,
        },
      ]
    },
  },
  methods: {
    rowClass(item) {
      return item && !item.active ? 'text-muted' : ''
    },
  },
}
</script>
