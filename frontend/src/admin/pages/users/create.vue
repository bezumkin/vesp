<template>
  <vesp-modal v-model="record" :url="url" :title="$t('models.user.title_one')">
    <template #form-fields>
      <form-user v-model="record" />
    </template>
  </vesp-modal>
</template>

<script>
import {url} from '../users'
import FormUser from '../../components/forms/user'

export {url}
export default {
  name: 'UserCreatePage',
  components: {FormUser},
  data() {
    return {
      url,
      record: {
        username: '',
        fullname: '',
        password: '',
        role_id: null,
        active: true,
      },
    }
  },
}
</script>
