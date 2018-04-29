<template>
  <option :value="value"><slot /></option>
</template>
<script>
export default {
  name: 'OuDropdownItem',
  inject: ['eventHub'],
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  created () {
    this.eventHub.$on('setSelectedItem', this.setSelectedItem)
  },
  beforeDestroy () {
    this.eventHub.$off('setSelectedItem', this.setSelectedItem)
  },
  methods: {
    setSelectedItem (value) {
      if (value === this.value) {
        this.eventHub.$emit('setSelectedStatus', this.$slots.default[0].text)
      }
    }
  }
}
</script>
