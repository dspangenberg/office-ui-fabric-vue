<template>
  <li class="ms-ListItem" :class="listItemClass" tabindex="0">
    <div v-if="$parent.type == 'document'" class="ms-ListItem-itemIcon">
      <ou-icon class="ms-ListItem-itemIcon" size="70" :icon="icon" :type="iconType" />
    </div>
    <div class="ms-ListItem-image" v-if="$parent.type == 'image'">
      <div>
        <slot name="image" />
      </div>
    </div>
    <span class="ms-ListItem-primaryText">
      <slot />
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
        'is-selectable': this.$parent.isSelectable,
        'is-unread': this.isUnread,
        'is-unseen': this.isUnseen,
        'is-selected': this.isSelected
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
    isUnseen: Boolean,
    isUnread: Boolean,
    isSelected: Boolean,
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .ms-ListItem-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
  .ms-ListItem-image div {
    align-self: center;
  }
</style>
