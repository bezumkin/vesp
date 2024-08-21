<template>
  <div>
    <Transition name="fade" mode="out-in">
      <div v-if="loggedIn" key="user">
        <slot name="default" v-bind="{user, logout: onLogout}">
          <BDropdown v-if="user" :variant="btnVariant">
            <template #button-content>
              <slot name="button" v-bind="{user}">
                <VespFa icon="user" fixed-width />
              </slot>
            </template>
            <slot name="user-menu" v-bind="{user}" />
            <BDropdownDivider />
            <BDropdownItem @click="onLogout">
              <VespFa icon="power-off" fixed-width />
              {{ $t('security.logout') }}
            </BDropdownItem>
          </BDropdown>
        </slot>
      </div>
      <div v-else key="guest">
        <slot name="guest">
          <BButton @click="showModal = true">
            <span class="d-none d-md-inline">
              {{ $t('security.login') }}
            </span>
            <span class="d-md-none">
              <VespFa icon="right-to-bracket" fixed-width />
            </span>
          </BButton>
        </slot>
      </div>
    </Transition>

    <BModal v-model="showModal" class="vesp-modal" :title="$t('security.login')" @shown="onShown">
      <BOverlay :show="loading" :opacity="0.5">
        <BForm @submit.prevent="onLogin">
          <FormsLogin ref="form" v-model="formLogin" />

          <input ref="input" type="submit" class="d-none" />
        </BForm>
      </BOverlay>

      <template #footer="{hide}">
        <BButton @click="() => hide()">{{ $t('actions.cancel') }}</BButton>
        <BButton variant="primary" :disabled="loading" @click="formSubmit">{{ $t('actions.submit') }}</BButton>
      </template>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import type {BaseButtonVariant} from 'bootstrap-vue-next'

defineProps({
  btnVariant: {
    type: String as PropType<keyof BaseButtonVariant>,
    default: 'light',
  },
})

const {t} = useI18n()
const {loggedIn, user, login, logout} = useAuth()
const loading = ref(false)
const showModal = computed({
  get() {
    return loginVisible()
  },
  set(newValue) {
    showLogin(newValue)
  },
})
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
