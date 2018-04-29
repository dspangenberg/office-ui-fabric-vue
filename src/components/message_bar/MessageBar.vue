<template>
  <div
    :class="messageBarClass"
    class="ms-MessageBar">
    <div class="ms-MessageBar-content">
      <div
        v-if="icon"
        class="ms-MessageBar-icon">
        <i
          :class="iconClass"
          class="ms-Icon"/>
      </div>
      <div class="ms-MessageBar-text">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import type from '../../mixins/props/type'
import icon from '../../mixins/props/icon'

export default {
  name: 'OuMessageBar',

  mixins: [
    type('success', 'error', 'blocked', 'warning', 'severeWarning'),
    icon
  ],

  computed: {
    messageBarClass () {
      return {
        [`ms-MessageBar--${this.type}`]: !!this.type
      }
    }
  }
}
</script>
