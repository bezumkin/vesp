<template>
  <div>
    <b-row>
      <b-col md="6">
        <b-form-group :label="$t('models.user.username')">
          <b-form-input v-model.trim="record.username" required autofocus />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group :label="$t('models.user.password')">
          <b-input-group>
            <b-form-input v-model.trim="record.password" :required="!record.id" />
            <template #append>
              <b-button @click="generatePassword">
                <fa icon="redo" />
              </b-button>
            </template>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-form-group :label="$t('models.user.fullname')">
      <b-form-input v-model.trim="record.fullname" required />
    </b-form-group>

    <b-form-group :label="$t('models.user.email')">
      <b-form-input v-model.trim="record.email" type="email" />
    </b-form-group>

    <b-form-group :label="$t('models.user.role')">
      <vesp-input-combo-box v-model="record.role_id" url="admin/user-roles" required />
    </b-form-group>

    <b-form-group>
      <b-form-checkbox v-model.trim="record.active">
        {{ $t('models.user.active') }}
      </b-form-checkbox>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'FormUser',
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
  mounted() {
    if (!this.record.id) {
      this.generatePassword()
    }
  },
  methods: {
    generatePassword(e, length = 12) {
      const charset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      let password = ''

      for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n))
      }
      this.record.password = password
    },
  },
}
</script>
