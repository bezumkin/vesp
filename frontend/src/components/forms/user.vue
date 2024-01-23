<template>
  <div>
    <b-form-group :label="$t('models.user.username')">
      <b-form-input v-model.trim="record.username" required autofocus />
    </b-form-group>

    <b-form-group :label="$t('models.user.password')">
      <vesp-input-password v-model.trim="record.password" :required="!record.id" />
    </b-form-group>

    <b-form-group :label="$t('models.user.fullname')">
      <b-form-input v-model="record.fullname" required />
    </b-form-group>

    <b-form-group :label="$t('models.user.email')">
      <b-form-input v-model="record.email" type="email" />
    </b-form-group>

    <b-form-group v-if="showGroup" :label="$t('models.user.role')">
      <vesp-input-combo-box v-model="record.role_id" url="admin/user-roles" required />
    </b-form-group>

    <b-row v-if="showStatus" class="flex-md-nowrap justify-content-md-between">
      <b-form-group v-if="showStatus" class="col-md-auto">
        <b-form-checkbox v-model="record.active">
          {{ $t('models.user.active') }}
        </b-form-checkbox>
      </b-form-group>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import type {VespUser} from '@vesp/frontend'

const props = defineProps({
  modelValue: {
    type: Object as PropType<VespUser>,
    required: true,
  },
  showGroup: {
    type: Boolean,
    default: true,
  },
  showStatus: {
    type: Boolean,
    default: true,
  },
  showNotify: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['update:modelValue'])
const record = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})

function generatePassword(length = 12) {
  const charset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let password = ''
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  record.value.password = password
}

onMounted(() => {
  if (!record.value.id) {
    generatePassword()
  }
})
</script>
