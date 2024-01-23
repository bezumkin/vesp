<template>
  <b-navbar sticky="top" :container="false" class="border-bottom bg-light">
    <b-container>
      <b-navbar-brand :to="{name: 'index'}" class="p-0">
        <b-img :src="logo" width="150" height="40" />
      </b-navbar-brand>

      <b-navbar-nav class="ms-auto">
        <app-login :btn-variant="btnVariant">
          <template #user-menu>
            <b-dropdown-item v-if="isAdmin" :to="{name: 'admin'}" link-class="border-bottom">
              {{ $t('pages.admin.title') }}
            </b-dropdown-item>
            <b-dropdown-item :to="{name: 'user-profile'}">{{ $t('pages.user.profile') }}</b-dropdown-item>
          </template>
        </app-login>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script setup lang="ts">
import type {BaseButtonVariant} from 'bootstrap-vue-next/src/types'
import logo from '@/assets/images/logo-vesp.svg'

defineProps({
  btnVariant: {
    type: String as PropType<keyof BaseButtonVariant>,
    default: 'light',
  },
})

const isAdmin = computed(() => hasScope('users'))
</script>
