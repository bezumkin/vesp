<template>
  <div>
    <div v-if="user">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const {user} = useAuth()
const {t} = useI18n()

function checkAccess() {
  if (!user.value) {
    showError({statusCode: 401, statusMessage: 'Unauthorized'})
    nextTick(() => {
      showLogin(true)
    })
  } else if (route.name === 'user') {
    navigateTo({name: 'user-profile', replace: true})
  }
}

function setTitle() {
  const routeName = route.name as string
  if (route.matched.length === 2) {
    const name = routeName.replace(/^user-/, '').replace('-', '_')
    useHead({
      title: () => [t('pages.user.' + name), t('pages.user.title'), t('project')].join(' / '),
    })
  }
}

checkAccess()
setTitle()

watch(
  () => route.name,
  () => {
    checkAccess()
    setTitle()
  },
)
</script>
