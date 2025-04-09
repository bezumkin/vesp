<template>
  <VespModal v-model="record" v-bind="params">
    <template #form-fields>
      <FormsUser v-model="record" />
    </template>
  </VespModal>
</template>

<script setup lang="ts">
const id = Number(useRoute().params.id)
const {t} = useI18n()

const params = computed(() => {
  return {
    url: 'admin/users' + (id ? `/${id}` : ''),
    method: id ? 'patch' : 'put',
    title: t('models.user.title_one'),
    updateKey: 'admin-users',
  }
})

const record = ref({
  id: 0,
  username: '',
  active: true,
})

if (id) {
  try {
    record.value = await useGet(params.value.url)
  } catch (e: any) {
    showError({statusCode: e.statusCode, statusMessage: e.message})
  }
}
</script>
