<template>
  <div class="ms-ListItem-action" @click="onClick">
    <ou-icon :icon="icon" :type="iconType" />
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
