<template>
  <div
    ref="searchBox"
    :class="searchBoxClass"
    class="ms-SearchBox">
    <input
      ref="searchBoxInput"
      :value="value"
      class="ms-SearchBox-field"
      type="text"
      @input="updateValue"
      @blur="clearValue" >
    <label class="ms-SearchBox-label">
      <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"/>
      <span
        v-if="!hasValue"
        class="ms-SearchBox-text">{{ placeholder }}</span>
    </label>
    <div
      class="ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel"
      @mousedown="clearValue">
      <button class="ms-CommandButton-button">
        <span class="ms-CommandButton-icon"><i class="ms-Icon ms-Icon--Clear"/></span>
        <span class="ms-CommandButton-label"/>
      </button>
    </div>
  </div>
</template>
<script>
import type from '../../mixins/props/type'
import { strings } from '../../mixins/props/defaults'

export default {
  name: 'OuSearchBox',

  mixins: [
    type('commandBar'),
    strings('value', 'placeholder')
  ],
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hasValue: !!this.value
    }
  },
  computed: {
    searchBoxClass () {
      return {
        [`ms-SearchBox--${this.type}`]: !!this.type,
        'is-collapsed': this.isCollapsed
      }
    }
  },
  mounted () {
    new this.$fabric.SearchBox(this.$refs.searchBox)
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    },
    clearValue () {
      this.$emit('input', '')
    }
  }
}
</script>
