<template>
  <footer class="pt-5">
    <div class="border-top pt-3">
      <b-container class="d-flex pb-3 text-muted small flex-column flex-md-row align-items-md-center">
        <div class="font-weight-bold text-center text-md-left">{{ $t('project') }}</div>
        <div class="m-0 mt-2 mb-2 m-md-auto">
          <vesp-change-locale class="w-100" />
        </div>
        <div class="text-center text-md-right">bezumkin &copy; 2020 &mdash; {{ year }}</div>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
