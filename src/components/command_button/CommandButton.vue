<template>
  <div
    v-tooltip="tooltip"
    :class="commandButtonClass"
    class="ms-CommandButton"
   >
    <button class="ms-CommandButton-button" @click="clickEvent">
      <span
        v-if="icon"
        class="ms-CommandButton-icon ms-fontColor-themePrimary">
        <ou-icon
          :size="getSize"
          :icon="icon"
          :type="iconType"
          :dir="iconDir"
          :svg-class="svgClass"
        />
      </span>
      <span :style="labelStyle" class="ms-CommandButton-label"><slot /></span>
      <span
        v-if="hasDropdown"
        class="ms-CommandButton-dropdownIcon">
        <i class="ms-Icon ms-Icon--ChevronDown"/>
      </span>
    </button>
    <slot name="split">
    <ou-contextual-menu v-if="isSplit" :has-icons="isSplitHasIcons">
      <button
        class="ms-CommandButton-splitIcon"
      >
        <i class="ms-Icon ms-Icon--ChevronDown" />
      </button>
      <div slot="list">
        <slot name="list" />
      </div>
    </ou-contextual-menu>
    </slot>
  </div>
</template>
<script>
import type from '../../mixins/props/type'
import disabled from '../../mixins/props/disabled'
import icon from '../../mixins/props/icon'
import VTooltip from 'v-tooltip';
import Vue from 'vue'
export default {
  name: 'ou-command-button',
  directives: {
    'tooltip': VTooltip
  },
  mixins: [
    type('noLabel', 'inline', 'dropdown', 'dropdownNoLabel'),
    disabled,
    icon
  ],
  props: {
    svgClass: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 20
    },
    iconDir: {
      type: String,
      default: ''
    },
    isSplit: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isSplitHasIcons: {
      type: Boolean,
      default: true
    },
    isPivot: {
      type: Boolean,
      default: false
    },
    labelStyle: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      default: ''
    }
  },
  computed: {
    getSize () {
      return (this.size) ? this.size : this.$parent.size
    },
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
  },
}
</script>

<style>
  .ms-CommandButton-splitIcon {
    height: 40px;
  }
</style>
