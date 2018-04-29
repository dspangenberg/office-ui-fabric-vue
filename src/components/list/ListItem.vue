<template>
  <li class="ms-ListItem" >
    <div
      v-if="$parent.type == 'document'"
      class="ms-ListItem-itemIcon">
      <ou-icon
        :icon="icon"
        :type="iconType"
        class="ms-ListItem-itemIcon"
        size="70" />
    </div>
    <div
      v-if="$parent.type == 'image'"
      class="ms-ListItem-image">
      <slot name="image" />
    </div>
    <span class="ms-ListItem-primaryText">
      <slot name="primary"/>
    </span>
    <span class="ms-ListItem-secondaryText">
      <slot name="secondary"/>
    </span>
    <span class="ms-ListItem-tertiaryText">
      <slot name="tertiary"/>
    </span>
    <span class="ms-ListItem-metaText">
      <slot name="meta"/>
    </span>

    <div class="ms-ListItem-selectionTarget"/>
    <div class="ms-ListItem-actions">
      <slot name="actions" />
    </div>
  </li>
</template>
<script>
import icon from '../../mixins/props/icon'
import { booleans, strings } from '../../mixins/props/defaults'

export default {
  name: 'OuListItem',
  mixins: [
    strings('imageSrc'),
    booleans('isSelected'),
    icon
  ],
  computed: {
    listItemClass () {
      return {
        [`ms-ListItem--${this.$parent.type}`]: !!this.$parent.type,
        'is-selectable': !!this.$parent.isSelectable
      }
    }
  },
  mounted () {
  }
}
</script>
