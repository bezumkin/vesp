<template>
  <div>
    <b-form-group :label="$t('models.user_role.title')">
      <b-form-input v-model="record.title" required autofocus />
    </b-form-group>

    <b-form-group :label="$t('models.user_role.scope')">
      <b-form-tags v-model="record.scope" required remove-on-delete :placeholder="$t('models.user_role.add_scope')" />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'FormUserRole',
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
