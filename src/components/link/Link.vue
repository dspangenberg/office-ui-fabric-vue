<template>
  <a
    :href="href"
    :title="title"
    class="ms-Link"
    @click="clickEvent">
    <slot />
  </a>
</template>
<script>
import { strings } from '../../mixins/props/defaults'

export default {
  name: 'OuLink',
  mixins: [
    strings('href', 'title')
  ],
  methods: {
    clickEvent () {
      this.$emit('click')
    }
  }
}
</script>
