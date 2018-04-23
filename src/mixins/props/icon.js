export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
  },
  computed: {
    iconClass() {
      return {
        [`ms-Icon--${this.icon}`]: !!this.icon
      };
    }
  }
};
