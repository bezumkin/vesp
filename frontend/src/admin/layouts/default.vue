<template>
  <div class="min-vh-100 d-flex flex-column">
    <app-navbar />
    <b-container class="flex-grow-1">
      <app-login />
      <nuxt v-if="$auth.loggedIn" class="pt-5" />
    </b-container>
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from '@/components/app/navbar'
import AppLogin from '@/components/app/login'
import AppFooter from '@/components/app/footer'

export default {
  components: {AppNavbar, AppLogin, AppFooter},
  watch: {
    '$auth.loggedIn'(loggedIn) {
      // Refresh current page to revalidate user permissions after login
      if (loggedIn) {
        const route = this.$router.currentRoute
        this.$router.replace('/not-existing-page', () => {
          this.$router.replace(route)
        })
      }
    },
  },
}
</script>
