export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: 'ms'
    }
  },
  computed: {
    iconClass () {
      return {
        [`ms-Icon--${this.icon}`]: !!this.icon
      }
    }
  }
}
