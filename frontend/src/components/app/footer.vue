<template>
  <footer class="pt-5">
    <div class="border-top bg-light pt-3">
      <b-container class="d-flex pb-3 text-muted small flex-column flex-md-row align-items-md-center">
        <b-col md="4" class="font-weight-bold text-center text-md-start fw-bold">{{ $t('project') }}</b-col>
        <b-col md="4" class="m-0 mt-2 mb-2 m-md-auto"><vesp-change-locale class="px-5" /></b-col>
        <b-col md="4" class="text-center text-md-end">
          <b-link :href="link" target="_blank">bezumkin &copy; 2020 &mdash; {{ year }}</b-link>
        </b-col>
      </b-container>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const link = 'https://github.com/bezumkin/vesp'
</script>
