export default {
  props: {
    icon: String,
    type: String
  },

  computed: {
    iconClass() {
      return {
        [`ms-Icon--${this.icon}`]: !!this.icon
      };
    }
  }
};
