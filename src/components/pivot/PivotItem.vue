<template>
  <div
    :data-content="label"
    class="ms-Pivot-content"><slot /></div>
</template>
<script>
export default {
  name: 'OuPivotItem',

  inject: ['eventHub'],

  props: {
    label: {
      type: String,
      required: true
    }
  },

  beforeMount () {
    this.eventHub.$emit('addPivotItem', this.label)
  }
}
</script>
