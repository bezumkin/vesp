<template>
  <BCol xl="10" class="m-auto">
    <BOverlay :show="loading" opacity="0.5">
      <BForm @submit.prevent="onSubmit">
        <FormsUser v-model="form" :show-group="false" :show-status="false" />
        <div class="text-center mt-3">
          <BButton variant="primary" type="submit">
            {{ t('actions.save') }}
          </BButton>
        </div>
      </BForm>
    </BOverlay>
  </BCol>
</template>

<script setup lang="ts">
import type {VespUser} from '@vesp/frontend'

const {t} = useI18n()
const {loadUser, user} = useAuth()
const loading = ref(false)
const form = ref<VespUser>({id: 0, username: '', ...user.value})

async function onSubmit() {
  try {
    loading.value = true
    const {user} = await usePatch('user/profile', form.value)
    if (user) {
      form.value = user
      useToastSuccess(t('success.profile'))
      await loadUser()
    }
  } catch (e) {
  } finally {
    loading.value = false
  }
}

useHead({
  title: () => [t('pages.user.profile'), t('pages.user.title'), t('project')].join(' / '),
})
</script>
