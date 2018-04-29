<template>
  <div
    ref="overlay"
    :class="overlayClass"
    class="ms-Overlay"/>
</template>
<script>
import type from '../../mixins/props/type'

export default {
  name: 'OuOverlay',
  mixins: [type('dark')],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      overlayInstance: null
    }
  },
  computed: {
    overlayClass () {
      return {
        [`ms-Overlay--${this.type}`]: !!this.type
      }
    }
  },
  watch: {
    value () {
      this.setOverlayVisibility()
    }
  },
  mounted () {
    this.overlayInstance = new this.$fabric.Overlay(this.$refs.overlay)
    this.setOverlayVisibility()
    this.bindOverlayCloseEvent()
  },

  methods: {
    setOverlayVisibility () {
      this.value ? this.overlayInstance.show() : this.overlayInstance.hide()
    },
    bindOverlayCloseEvent () {
      // Because the overlay component don't have callback when overlay closed,
      // So add a click event when click the overlay to set the value to false
      const overlayElement = this.$refs.overlay
      const closeOverlay = () => {
        this.$emit('input', false)
      }
      overlayElement.addEventListener('click', closeOverlay)
    }
  }
}
</script>
