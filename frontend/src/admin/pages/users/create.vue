<template>
  <vesp-modal v-model="record" :url="url" :title="$t('models.user.title_one')">
    <template #form-fields>
      <form-user v-model="record" />
    </template>
  </vesp-modal>
</template>
<script>
import FormUser from '@/components/forms/user'
import {url} from '../users'

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
