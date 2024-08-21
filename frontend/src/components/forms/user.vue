<template>
  <div>
    <BFormGroup :label="$t('models.user.username')">
      <BFormInput v-model.trim="record.username" required autofocus />
    </BFormGroup>

    <BFormGroup :label="$t('models.user.password')">
      <VespInputPassword v-model.trim="record.password" :required="!record.id" />
    </BFormGroup>

    <BFormGroup :label="$t('models.user.fullname')">
      <BFormInput v-model="record.fullname" required />
    </BFormGroup>

    <BFormGroup :label="$t('models.user.email')">
      <BFormInput v-model="record.email" type="email" />
    </BFormGroup>

    <BFormGroup v-if="showGroup" :label="$t('models.user.role')">
      <VespInputComboBox v-model="record.role_id" url="admin/user-roles" required />
    </BFormGroup>

    <BFormGroup v-if="showStatus" class="col-md-auto">
      <BFormCheckbox v-model="record.active">
        {{ $t('models.user.active') }}
      </BFormCheckbox>
    </BFormGroup>
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
