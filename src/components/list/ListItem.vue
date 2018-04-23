<template>
  <li class="ms-ListItem" >
    <div v-if="$parent.type == 'document'" class="ms-ListItem-itemIcon">
      <ou-icon class="ms-ListItem-itemIcon" size="70" :icon="icon" :type="iconType" />
    </div>
    <div class="ms-ListItem-image" v-if="$parent.type == 'image'">
      <img :src="imageSrc" />
    </div>
    <span class="ms-ListItem-primaryText">
      <slot name="primary"/>
    </span>
    <span class="ms-ListItem-secondaryText">
      <slot name="secondary"></slot>
    </span>
    <span class="ms-ListItem-tertiaryText">
      <slot name="tertiary"></slot>
    </span>
    <span class="ms-ListItem-metaText">
      <slot name="meta"></slot>
    </span>

    <div class="ms-ListItem-selectionTarget">
    </div>
    <div class="ms-ListItem-actions">
      <slot name="actions" />
    </div>
  </li>
</template>
<script>
export default {
  computed: {
    listItemClass () {
      return {
        [`ms-ListItem--${this.$parent.type}`]: !!this.$parent.type,
        'is-selectable': !!this.$parent.selectable
      }
    }
  },
  mounted () {
  },
  name: 'ou-list-item',
  props: {
    imageSrc: String,
    icon: String,
    iconType: String,
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>
