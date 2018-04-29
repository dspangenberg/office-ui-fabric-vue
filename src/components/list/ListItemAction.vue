<template>
  <div
    class="ms-ListItem-action"
    @click="onClick">
    <ou-icon
      :icon="icon"
      :type="type" />
  </div>
</template>

<script>
import icon from '../../mixins/props/icon'

export default {
  name: 'OuListItemAction',
  mixins: [icon],
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
