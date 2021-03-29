<script>
import Create, {url} from '../create'

export default {
  extends: Create,
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({app, params, error}) {
    try {
      const {data: record} = await app.$axios.get(url, {params: {id: params.id}})
      record.password = null
      return {record}
    } catch (e) {
      error({statusCode: e.statusCode, message: e.data})
    }
  },
  data() {
    return {
      url,
      record: {},
    }
  },
}
</script>
