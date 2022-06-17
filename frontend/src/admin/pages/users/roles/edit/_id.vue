<script>
import Create, {url} from '../create'

export default {
  name: 'UserRolesEditPage',
  extends: Create,
  async asyncData({app, params, error}) {
    try {
      const {data: record} = await app.$axios.get(url + '/' + params.id)
      return {record}
    } catch (e) {
      error({statusCode: e.statusCode, message: e.data})
    }
  },
}
</script>
