export default {
  data () {
    return {
      AMVHUB_URL: ''
    }
  },
  mounted () {
    this.AMVHUB_URL = this.$firebase.getConfigValue(process.env.NODE_ENV.toUpperCase() + '_MAIN_URL')
  }
}
