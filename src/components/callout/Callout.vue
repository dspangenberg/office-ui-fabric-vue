<template>
  <div>
    <div
      ref="callout"
      :class="calloutClass"
      class="ms-Callout is-hidden">
      <div class="ms-Callout-main">
        <button
          v-if="showClose"
          class="ms-Callout-close">
          <i class="ms-Icon ms-Icon--Clear"/>
        </button>
        <div class="ms-Callout-header">
          <p class="ms-Callout-title">{{ title }}</p>
        </div>
        <div class="ms-Callout-inner">
          <div class="ms-Callout-content">
            <p
              v-if="content"
              class="ms-Callout-subText">{{ content }}</p>
            <slot
              v-else
              name="content" />
          </div>
          <div class="ms-Callout-actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
    <span ref="calloutTrigger">
      <slot />
    </span>
  </div>
</template>
<script>
import type from '../../mixins/props/type'

export default {
  name: 'OuCallout',

  mixins: [type('actionText', 'OOBE', 'peek')],

  props: {
    position: {
      type: String,
      default: 'right',
      validator (value) {
        return ['right', 'left', 'top', 'bottom'].includes(value)
      }
    },
    showClose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    calloutClass () {
      return {
        [`ms-Callout--${this.type}`]: !!this.type,
        'ms-Callout--close': this.showClose
      }
    }
  },

  mounted () {
    new this.$fabric.Callout(
      this.$refs.callout,
      this.$refs.calloutTrigger,
      this.position
    )
  }
}
</script>
