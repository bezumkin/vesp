<template>
  <div>
    <vesp-table
      :url="url"
      :header-actions="headerActions"
      :table-actions="tableActions"
      :fields="fields"
      :filters="filters"
      :sort="sort"
      :dir="dir"
    />
    <nuxt-child />
  </div>
</template>

<script>
export const url = 'admin/user-roles'
export default {
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
      title: [this.$t('models.user_role.title_many'), this.$t('project')].join(' / '),
    }
  },
  computed: {
    headerActions() {
      return [
        {route: 'users-roles-create', icon: 'plus', title: this.$t('actions.create')},
        {
          route: 'users',
          icon: 'arrow-left',
          title: this.$t('models.user.title_many'),
          variant: 'info',
          'active-class': '',
        },
      ]
    },
    tableActions() {
      return [
        {route: 'users-roles-edit-id', icon: 'edit', title: this.$t('actions.edit'), map: {id: 'id'}},
        {function: 'onDelete', icon: 'times', title: this.$t('actions.delete'), variant: 'danger'},
      ]
    },
    fields() {
      return [
        {key: 'id', label: this.$t('components.table.columns.id'), sortable: true},
        {key: 'title', label: this.$t('models.user_role.title'), sortable: true},
        {key: 'scope', label: this.$t('models.user_role.scope'), formatter: this.formatTags},
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
    formatTags(value) {
      if (value) {
        return value.join(', ')
      }
    },
  },
}
</script>
