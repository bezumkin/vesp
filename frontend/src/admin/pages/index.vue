<template>
  <div class="p-5">
    <h3 class="mt-4">{{ $t('greetings.title') }}</h3>
    <div>{{ $t('greetings.message') }}</div>
    <b-list-group class="mt-4">
      <b-list-group-item v-for="item in $store.getters.menu" :key="item.name" :to="{name: item.name}">
        {{ $t(item.title) }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: this.$t('greetings.title') + ' / ' + this.$t('project'),
    }
  },
}
</script>
