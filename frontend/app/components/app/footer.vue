<template>
  <footer class="pt-5">
    <div class="border-top bg-light pt-3">
      <BContainer class="d-flex pb-3 text-muted small flex-column flex-md-row align-items-md-center">
        <BCol md="4" class="font-weight-bold text-center text-md-start fw-bold">
          {{ $t('project') }}
        </BCol>
        <BCol md="4" class="m-0 mt-2 mb-2 m-md-auto">
          <VespChangeLocale v-if="locales.length > 1" class="px-5" />
        </BCol>
        <BCol md="4" class="text-center text-md-end">
          <BLink :href="link" target="_blank">
            bezumkin &copy; 2020 &mdash; {{ year }}
          </BLink>
        </BCol>
      </BContainer>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const link = 'https://github.com/bezumkin/vesp'

const {locales} = useI18n()
</script>
