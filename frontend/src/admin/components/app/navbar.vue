<template>
  <b-navbar variant="light" toggleable="sm">
    <b-container>
      <b-navbar-brand :to="{name: 'index'}" class="p-0">
        <b-img src="@/assets/images/logo-vesp.svg" width="150" height="40" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="d-flex w-100">
          <b-nav-item v-for="item in $store.getters.menu" :key="item.name" :to="{name: item.name}">
            {{ $t(item.title) }}
          </b-nav-item>

          <b-nav-dropdown v-if="$auth.loggedIn" :text="$auth.user.fullname" class="ml-md-auto" right>
            <b-dropdown-item v-if="$hasScope('profile')" :to="{name: 'user-profile'}">
              {{ $t('security.profile') }}
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item link-class="d-flex align-items-center justify-content-between" @click.prevent="onLogout">
              {{ $t('security.logout') }}
              <fa icon="sign-out-alt" class="ml-auto" />
            </b-dropdown-item>
          </b-nav-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      siteName: process.env.SITE_NAME,
    }
  },
  methods: {
    async onLogout() {
      await this.$auth.logout('local')
      this.$toast.info(String(this.$t('security.goodbye')))
    },
  },
}
</script>
