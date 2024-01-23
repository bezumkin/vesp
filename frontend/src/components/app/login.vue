<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="loggedIn" key="user">
        <slot name="default" v-bind="{user, logout: onLogout}">
          <b-dropdown v-if="user" :variant="btnVariant">
            <template #button-content>
              <slot name="button" v-bind="{user}">
                <vesp-fa icon="user" fixed-width />
              </slot>
            </template>
            <slot name="user-menu" v-bind="{user}" />
            <b-dropdown-divider />
            <b-dropdown-item @click="onLogout">
              <vesp-fa icon="power-off" fixed-width />
              {{ $t('security.logout') }}
            </b-dropdown-item>
          </b-dropdown>
        </slot>
      </div>
      <div v-else key="guest">
        <slot name="guest">
          <b-button @click="showModal = true">
            <span class="d-none d-md-inline">
              {{ $t('security.login') }}
            </span>
            <span class="d-md-none">
              <vesp-fa icon="right-to-bracket" fixed-width />
            </span>
          </b-button>
        </slot>
      </div>
    </transition>

    <b-modal v-model="showModal" class="vesp-modal" :title="$t('security.login')" @shown="onShown">
      <b-overlay :show="loading" :opacity="0.5">
        <b-form @submit.prevent="onLogin">
          <forms-login ref="form" v-model="formLogin" />

          <input ref="input" type="submit" class="d-none" />
        </b-form>
      </b-overlay>

      <template #footer="{hide}">
        <b-button @click="() => hide()">{{ $t('actions.cancel') }}</b-button>
        <b-button variant="primary" :disabled="loading" @click="formSubmit">{{ $t('actions.submit') }}</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import type {BaseButtonVariant} from 'bootstrap-vue-next/src/types'

defineProps({
  btnVariant: {
    type: String as PropType<keyof BaseButtonVariant>,
    default: 'light',
  },
})

const {t} = useI18n()
const {loggedIn, user, login, logout} = useAuth()
const loading = ref(false)
const showModal = ref(false)
const formLogin = ref({
  username: '',
  password: '',
})
const form = ref()
const input = ref()

async function onLogin() {
  loading.value = true
  try {
    await login(formLogin.value.username, formLogin.value.password)
    showModal.value = false
    formLogin.value = {username: '', password: ''}
    useToastInfo(t('success.login'))
    clearNuxtData()
    await clearError()
    await refreshNuxtData()
  } catch (e) {
  } finally {
    loading.value = false
  }
}

function formSubmit() {
  input.value.click()
}

async function onLogout() {
  try {
    await logout()
    useToastInfo(t('success.logout'))
    clearNuxtData()

    const name = String(useRoute().name)
    if (name.startsWith('user') || name.startsWith('admin')) {
      navigateTo('/')
    } else {
      await refreshNuxtData()
    }
  } catch (e) {
    console.error(e)
  }
}

function onShown() {
  if (form.value && form.value.$el) {
    nextTick(() => {
      const input = form.value.$el.querySelector('input:not(:disabled)')
      if (input) {
        input.focus()
      }
    })
  }
}
</script>
