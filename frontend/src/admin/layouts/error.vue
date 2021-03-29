<template>
  <div>
    <div style="margin-bottom: 50vh">
      <b-alert :show="true" class="p-5">Error {{ statusCode }}: {{ message }}</b-alert>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    },
  },
}
</script>
