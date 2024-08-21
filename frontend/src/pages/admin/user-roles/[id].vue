<template>
  <VespModal v-model="record" v-bind="params">
    <template #form-fields>
      <FormsUserRole v-model="record" />
    </template>
  </VespModal>
</template>

<script setup lang="ts">
const id = Number(useRoute().params.id)
const {t} = useI18n()

const params = computed(() => {
  return {
    url: 'admin/user-roles' + (id ? `/${id}` : ''),
    method: id ? 'patch' : 'put',
    title: t('models.user_role.title_one'),
    updateKey: 'admin-user-roles',
  }
})

const record = ref({
  id: 0,
  title: '',
  scope: [],
})

if (id) {
  try {
    record.value = await useGet(params.value.url)
  } catch (e: any) {
    showError({statusCode: e.statusCode, statusMessage: e.message})
  }
}
</script>
