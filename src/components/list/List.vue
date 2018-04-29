<template>
  <ul
    ref="listItems"
    class="ms-List">
    <slot/>
  </ul>
</template>

<script>
import type from '../../mixins/props/type'
import { booleans } from '../../mixins/props/defaults'

export default {
  name: 'OuList',
  mixins: [
    type('default', 'image', 'document'),
    booleans('isSelectable')
  ]
}
</script>
