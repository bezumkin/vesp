<template>
  <vesp-modal v-model="record" :url="url" :title="$t('models.user_role.title_one')">
    <template #form-fields>
      <form-user-role v-model="record" />
    </template>
  </vesp-modal>
</template>
<script>
import {url} from '../roles'
import FormUserRole from '@/components/forms/user-role'

export {url}
export default {
  components: {FormUserRole},
  data() {
    return {
      url,
      record: {
        title: '',
      },
    }
  },
}
</script>
