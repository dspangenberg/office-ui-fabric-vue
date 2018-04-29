<template>
  <th>
    <slot/>
  </th>
</template>
<script>
export default {
  name: 'OuTableColumn',

  inject: ['eventHub'],

  props: {
    prop: {
      type: String,
      required: true
    }
  },

  beforeMount () {
    this.eventHub.$emit('addTableColumnItems', this.prop)
  }
}
</script>
