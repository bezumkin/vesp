<template>
  <vesp-modal v-model="record" :url="url" :title="$t('models.user.title_one')">
    <template #form-fields>
      <form-user v-model="record" />
    </template>
  </vesp-modal>
</template>
<script>
import {url} from '../users'
import FormUser from '@/components/forms/user'

export {url}
export default {
  components: {FormUser},
  data() {
    return {
      url,
      record: {
        fullname: '',
        password: '',
        active: true,
      },
    }
  },
}
</script>
