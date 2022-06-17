<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <form-profile v-model="record" />

      <b-button variant="primary" type="submit">{{ $t('actions.submit') }}</b-button>
    </b-form>
  </div>
</template>

<script>
import FormProfile from '../../components/forms/profile'

export const url = 'user/profile'
export default {
  name: 'ProfilePage',
  components: {FormProfile},
  data() {
    return {
      loading: false,
      record: {},
    }
  },
  head() {
    return {
      title: this.$t('security.profile') + ' / ' + this.$t('project'),
    }
  },
  mounted() {
    this.setForm()
  },
  methods: {
    setForm() {
      this.record = {...this.$auth.user, password: ''}
    },
    async onSubmit() {
      this.loading = true
      try {
        const {data} = await this.$axios.patch(url, this.record)
        this.$auth.setUser(data.user)
        this.setForm()
        await this.$toast.success(this.$t('security.success_update_message'))
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
