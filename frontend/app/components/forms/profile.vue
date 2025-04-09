<template>
  <div>
    <BFormGroup :label="$t('models.user.username')">
      <BFormInput v-model="record.username" required autofocus />
    </BFormGroup>

    <BFormGroup :label="$t('models.user.fullname')">
      <BFormInput v-model="record.fullname" />
    </BFormGroup>

    <BFormGroup :label="$t('models.user.password')">
      <VespInputPassword v-model.trim="record.password" type="password" />
    </BFormGroup>

    <BFormGroup :label="$t('models.user.email')">
      <BFormInput v-model.trim="record.email" type="email" />
    </BFormGroup>
  </div>
</template>

<script setup lang="ts">
import type {VespUser} from '@vesp/frontend'

const props = defineProps({
  modelValue: {
    type: Object as PropType<VespUser>,
    default() {
      return {}
    },
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
</script>
