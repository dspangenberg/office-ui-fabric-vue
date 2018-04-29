<template>
  <li
    :class="contextualMenuItemClass"
    class="ms-ContextualMenu-item">
    <span v-if="type == 'header'">{{ name }}</span>
    <a
      v-if="hasLink"
      :class="contextualMenuLinkClass"
      class="ms-ContextualMenu-link"
      @click="clickEvent">
      {{ name }}
    </a>
    <ou-icon
      v-if="icon"
      :disabled="isDisabled"
      :icon="icon"
      :type="iconType" />
    <i
      v-if="hasMenu"
      class="ms-ContextualMenu-subMenuIcon ms-Icon ms-Icon--ChevronRight"/>
    <ul
      v-if="hasMenu"
      :class="{'ms-ContextualMenu--hasIcons': $parent.hasIcons}"
      class="ms-ContextualMenu is-hidden">
      <slot />
    </ul>
  </li>
</template>
<script>
import type from '../../mixins/props/type'
import disabled from '../../mixins/props/disabled'
import { strings } from '../../mixins/props/defaults'

export default {
  name: 'OuContextualMenuItem',
  mixins: [
    strings('name'),
    type('divider', 'header', 'hasMenu'),
    disabled
  ],
  inject: ['eventHub'],
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      isSelected: false
    }
  },
  computed: {
    hasLink () {
      return this.type === 'hasMenu' || this.type === ''
    },
    hasMenu () {
      return this.type === 'hasMenu'
    },
    contextualMenuItemClass () {
      return {
        [`ms-ContextualMenu-item--${this.type}`]: !!this.type
      }
    },
    contextualMenuLinkClass () {
      return {
        'is-disabled': this.isDisabled,
        'is-selected': this.isSelected
      }
    }
  },
  created () {
    this.eventHub.$on('setSelected', this.setSelected)
  },
  beforeDestroy () {
    this.eventHub.$off('setSelected', this.setSelected)
  },
  methods: {
    clickEvent () {
      if (this.value) {
        this.eventHub.$emit('updateValue', this.value)
      } else if (!this.type && !this.disabled) {
        this.$emit('click')
      }
    },
    setSelected (values) {
      if (values.includes(this.value)) {
        this.isSelected = true
      } else {
        this.isSelected = false
      }
    }
  }
}
</script>

<style>

</style>
