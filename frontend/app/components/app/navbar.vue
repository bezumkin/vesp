<template>
  <BNavbar sticky="top" :container="false" class="border-bottom bg-light">
    <BContainer>
      <BNavbarBrand :to="{name: 'index'}" class="p-0">
        <BImg :src="logo" width="150" height="40" />
      </BNavbarBrand>

      <BNavbarNav class="ms-auto">
        <AppLogin :btn-variant="btnVariant">
          <template #user-menu>
            <BDropdownItem v-if="isAdmin" :to="{name: 'admin'}" link-class="border-bottom">
              {{ $t('pages.admin.title') }}
            </BDropdownItem>
            <BDropdownItem :to="{name: 'user-profile'}">
              {{ $t('pages.user.profile') }}
            </BDropdownItem>
          </template>
        </AppLogin>
      </BNavbarNav>
    </BContainer>
  </BNavbar>
</template>

<script setup lang="ts">
import type {BaseButtonVariant} from 'bootstrap-vue-next'
import logo from '@/assets/images/logo-vesp.svg'

defineProps({
  btnVariant: {
    type: String as PropType<keyof BaseButtonVariant>,
    default: 'light',
  },
})

const isAdmin = computed(() => hasScope('users'))
</script>
