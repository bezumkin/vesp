<template>
  <div class="d-flex flex-column align-items-center justify-content-around text-center min-vh-100">
    <div>
      <b-img src="~/assets/images/logo-vesp.svg" alt="Vesp" width="800" style="max-width: 90vw" />
      <div class="mt-5">
        A simple framework based on <strong>Vue</strong>, <strong>Eloquent</strong>, <strong>Slim</strong> and
        <strong>Phinx</strong>
      </div>
    </div>
    <div>
      <div class="d-flex align-items-center">
        <div>Sponsored by</div>
        <b-link href="https://pixmill.ch" target="_blank" class="ml-2">
          <b-img src="~/assets/images/logo-pixmill.svg" alt="Pixmill" height="30" />
        </b-link>
      </div>
      <div class="mt-5 small">bezumkin &copy; 2020 &mdash; {{ year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: $black;
  color: $gray-500;
}
</style>
