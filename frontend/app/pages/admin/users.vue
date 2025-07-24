<template>
  <VespTable ref="table" v-bind="{url, fields, filters, headerActions, tableActions, rowClass, sort, dir}">
    <template #cell(fullname)="{item}">
      <div class="d-flex align-items-center">
        <VespFa icon="user" fixed-width />
        <div class="ms-2">
          <div class="text-nowrap">
            {{ item.fullname }}
          </div>
          <div class="small text-muted">
            {{ item.username }}
          </div>
        </div>
      </div>
    </template>
    <NuxtPage />
  </VespTable>
</template>

<script setup lang="ts">
import type {VespTableAction} from '@vesp/frontend'

const {t, d} = useI18n()
const table = ref()
const url = 'admin/users'
const filters = ref({query: ''})
const sort = 'id'
const dir = 'desc'
const fields = computed(() => [
  {key: 'id', label: t('models.user.id'), sortable: true},
  {key: 'fullname', label: t('models.user.fullname')},
  {key: 'email', label: t('models.user.email'), sortable: true},
  {key: 'created_at', label: t('models.user.created_at'), sortable: true, formatter: formatDate},
])
const headerActions = computed<VespTableAction[]>(() => [
  {route: {name: 'admin-users-id', params: {id: 0}}, icon: 'plus', title: t('actions.create')},
])
const tableActions = computed<VespTableAction[]>(() => [
  {route: {name: 'admin-users-id'}, icon: 'edit', title: t('actions.edit')},
  {function: (i) => table.value.delete(i), icon: 'times', title: t('actions.delete'), variant: 'danger'},
])

function formatDate(value) {
  return value ? d(value, 'long') : ''
}

function rowClass(item) {
  if (item) {
    const cls = []
    if (!item.active) {
      cls.push('inactive')
    }
    if (item.blocked) {
      cls.push('blocked')
    }
    return cls
  }
}
</script>
