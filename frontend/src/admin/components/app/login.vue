<template>
  <b-modal
    :visible="!$auth.loggedIn"
    :title="$t('security.login')"
    no-close-on-backdrop
    no-close-on-esc
    hide-header-close
  >
    <b-overlay :show="loading" :opacity="0.5">
      <b-form ref="form" @submit.prevent="submit">
        <b-form-group class="pt-3">
          <b-form-input v-model.trim="login.username" :placeholder="$t('security.username')" required autofocus />
        </b-form-group>

        <b-form-group class="pt-3">
          <vesp-input-password v-model.trim="login.password" :placeholder="$t('security.password')" required />
        </b-form-group>

        <input type="submit" class="d-none" />
      </b-form>
    </b-overlay>

    <template #modal-footer>
      <div class="text-right">
        <b-btn variant="primary" :disabled="loading" @click="formSubmit">{{ $t('actions.submit') }}</b-btn>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      loading: false,
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    formSubmit() {
      this.$refs.form.querySelector('[type="submit"]').click()
    },
    async submit() {
      this.loading = true
      try {
        await this.$auth.login({data: this.login})
        await this.$toast.info(this.$t('security.greetings'))
        this.onReset()
      } catch (err) {
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    onReset() {
      this.login = {
        username: '',
        password: '',
      }
    },
  },
}
</script>
