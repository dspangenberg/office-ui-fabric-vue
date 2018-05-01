<template>
  <div
    :class="commandButtonClass"
    class="ms-CommandButton"
    @click="clickEvent">
    <button class="ms-CommandButton-button">
      <span
        v-if="icon"
        class="ms-CommandButton-icon ms-fontColor-themePrimary">
        <ou-icon
          :size="$parent.svgSize"
          :icon="icon"
          :type="iconType" />
      </span>
      <span class="ms-CommandButton-label"><slot /></span>
      <span
        v-if="hasDropdown"
        class="ms-CommandButton-dropdownIcon">
        <i class="ms-Icon ms-Icon--ChevronDown"/>
      </span>
    </button>
    <ou-contextual-menu v-if="isSplit">
      <button
        class="ms-CommandButton-splitIcon"
      >
        <i class="ms-Icon ms-Icon--ChevronDown" />
      </button>
      <div slot="list">
        <slot name="list" />
      </div>
    </ou-contextual-menu>
  </div>
</template>
<script>
import type from '../../mixins/props/type'
import disabled from '../../mixins/props/disabled'
import icon from '../../mixins/props/icon'

export default {
  name: 'ou-command-button',
  mixins: [
    type('noLabel', 'inline', 'dropdown', 'dropdownNoLabel'),
    disabled,
    icon
  ],
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    isSplit: {
      type: Boolean,
      default: false
    },
    isPivot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasDropdown () {
      return (this.type === 'dropdown' || this.type === 'dropdownNoLabel')
    },
    hasLabel () {
      return (this.type !== 'noLabel' && this.type !== 'dropdownNoLabel')
    },
    commandButtonClass () {
      return {
        'ms-CommandButton--noLabel': !this.hasLabel,
        'ms-CommandButton--inline': this.type === 'inline',
        'ms-CommandButton--dropdown': this.hasDropdown,
        'ms-CommandButton--pivot': this.isPivot,
        'is-disabled': this.isDisabled,
        'is-active': this.isActive && this.isPivot
      }
    }
  },
  methods: {
    clickEvent () {
      if (!this.isDisabled) { this.$emit('click') }
    }
  }
}
</script>

<style>
  .ms-CommandButton-splitIcon {
    height: 40px;
  }
</style>