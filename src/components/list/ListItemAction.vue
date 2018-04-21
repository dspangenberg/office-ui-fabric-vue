<template>
  <div class="ms-ListItem-action" @click="onClick">
    <VabricIcon :icon="icon" :type="type" />
  </div>
</template>

<script>
import icon from '../../mixins/props/icon'

export default {
  name: 'ou-list-item-action',
  mixins: [icon],
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
