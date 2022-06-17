<template>
  <div>
    <b-form-group :label="$t('models.user.username')">
      <b-form-input v-model="record.username" required autofocus />
    </b-form-group>

    <b-form-group :label="$t('models.user.fullname')">
      <b-form-input v-model="record.fullname" />
    </b-form-group>

    <b-form-group :label="$t('models.user.password')">
      <vesp-input-password v-model.trim="record.password" type="password" />
    </b-form-group>

    <b-form-group :label="$t('models.user.email')">
      <b-form-input v-model.trim="record.email" type="email" />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'FormProfile',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    record: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>
