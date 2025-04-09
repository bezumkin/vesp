<template>
  <div class="min-vh-100 d-flex flex-column">
    <AppNavbar />
    <BContainer class="flex-grow-1">
      <slot>
        <NuxtPage class="pt-5" />
      </slot>
    </BContainer>
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>
