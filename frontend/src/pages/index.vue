<template>
  <div class="d-flex flex-column align-items-center justify-content-around text-center">
    <div class="p-5">
      <b-img :src="logoVesp" alt="Vesp" width="600" fluid />
      <div class="mt-5">
        A simple framework based on <strong>Vue</strong>, <strong>Eloquent</strong>, <strong>Slim</strong> and
        <strong>Phinx</strong>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <div>Sponsored by</div>
      <b-link href="https://pixmill.ch" target="_blank" class="ms-2">
        <b-img :src="logoPixmill" alt="Pixmill" height="30" />
      </b-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoVesp from '@/assets/images/logo-vesp-big.svg'
import logoPixmill from '@/assets/images/logo-pixmill.svg'
</script>
