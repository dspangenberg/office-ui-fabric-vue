<template>
  <label
    :class="labelClass"
    class="ms-Label"><slot /></label>
</template>
<script>
import disabled from '../../mixins/props/disabled'

export default {
  name: 'OuLabel',

  mixins: [disabled],

  props: {
    required: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    labelClass () {
      return {
        'is-disabled': this.disabled,
        'is-required': this.required
      }
    }
  }
}
</script>
