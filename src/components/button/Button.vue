<template>
  <button
    :class="buttonClass"
    class="ms-Button"
    @click="clickEvent">
    <span
      v-if="icon && type == 'hero'"
      class="ms-Button-icon">
      <i
        :class="iconClass"
        class="ms-Icon"/>
    </span>
    <span class="ms-Button-label"><slot /></span>
    <span
      v-if="description && type == 'compound'"
      class="ms-Button-description">
      {{ description }}
    </span>
  </button>
</template>
<script>
import type from '../../mixins/props/type'
import disabled from '../../mixins/props/disabled'
import icon from '../../mixins/props/icon'

export default {
  name: 'OuButton',
  mixins: [
    type('primary', 'hero', 'compound', 'small'),
    disabled,
    icon
  ],
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      return {
        [`ms-Button--${this.type}`]: !!this.type,
        'is-disabled': this.disabled
      }
    }
  },
  methods: {
    clickEvent () {
      if (!this.disabled) { this.$emit('click') }
    }
  }
}
</script>
