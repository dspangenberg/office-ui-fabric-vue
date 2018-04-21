<template>
  <ul class="ms-List" ref='listItems'>
    <slot></slot>
  </ul>
</template>

<script>
import type from '../../mixins/props/type'
export default {
  name: 'ou-list',
  mixins: [type('default', 'image', 'document')],
  props: {
    selectable: Boolean
  }
}
</script>
