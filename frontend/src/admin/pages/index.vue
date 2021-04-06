<template>
  <div>
    <h3>{{ $t('greetings.title') }}</h3>
    <div>{{ $t('greetings.message') }}</div>
    <b-list-group>
      <template v-for="item in $store.getters.menu">
        <b-list-group-item :key="item.name" :to="{name: item.name}">
          {{ $t(item.title) }}
        </b-list-group-item>
        <template v-if="item.children && item.children.length">
          <b-list-group :key="`${item.name}-subitems`" class="ml-4 mt-1 mb-1">
            <b-list-group-item v-for="subitem in item.children" :key="subitem.name" :to="{name: subitem.name}">
              {{ $t(subitem.title) }}
            </b-list-group-item>
          </b-list-group>
        </template>
      </template>
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
