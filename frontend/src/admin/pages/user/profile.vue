<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group :label="$t('models.user.username')">
        <b-form-input v-model="record.username" />
      </b-form-group>
      <b-form-group :label="$t('models.user.fullname')">
        <b-form-input v-model="record.fullname" />
      </b-form-group>
      <b-form-group :label="$t('models.user.password')">
        <b-form-input v-model.trim="record.password" type="password" />
      </b-form-group>
      <b-form-group :label="$t('models.user.email')">
        <b-form-input v-model.trim="record.email" type="email" />
      </b-form-group>

      <b-button variant="primary" type="submit">{{ $t('actions.submit') }}</b-button>
    </b-form>
  </div>
</template>

<script>
export const url = 'user/profile'
export default {
  data() {
    return {
      loading: false,
    }
  },
  head() {
    return {
      title: this.$t('security.profile') + ' / ' + this.$t('project'),
    }
  },
  computed: {
    record: {
      get() {
        return {...this.$auth.user, ...{password: ''}}
      },
      set(newValue) {
        newValue.password = ''
        this.$auth.setUser(newValue)
      },
    },
  },
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        const {data} = await this.$axios.patch(url, this.record)
        this.record = data.user
        await this.$toast.success(this.$t('security.success_update_message'))
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
