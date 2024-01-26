<template>
  <div class="min-vh-100 d-flex flex-column">
    <app-navbar />
    <b-container class="flex-grow-1">
      <slot>
        <nuxt-page class="pt-5" />
      </slot>
    </b-container>
    <app-footer />
  </div>
</template>

<script setup lang="ts"></script>
