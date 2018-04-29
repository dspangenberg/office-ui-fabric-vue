<template>
  <div
    ref="toggle"
    :class="toggleClass"
    class="ms-Toggle">
    <span
      v-if="description"
      class="ms-Toggle-description">
      {{ description }}
    </span>
    <input
      type="checkbox"
      class="ms-Toggle-input">
    <span
      class="ms-Toggle-trigger"
      @click="toggle">
      <label
        ref="toggleLabel"
        :class="{ 'is-selected': value }"
        class="ms-Toggle-field"
        tabindex="0">
        <span class="ms-Label ms-Label--off">{{ offLabel }}</span>
        <span class="ms-Label ms-Label--on">{{ onLabel }}</span>
      </label>
    </span>
  </div>
</template>
<script>
import type from '../../mixins/props/type'
import disabled from '../../mixins/props/disabled'

export default {
  name: 'OuToggle',
  mixins: [type('textLeft'), disabled],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    onLabel: {
      type: String,
      default: ''
    },
    offLabel: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    toggleClass () {
      return {
        [`ms-Toggle--${this.type}`]: !!this.type,
        'is-disabled': this.disabled
      }
    }
  },
  mounted () {
    new this.$fabric.Toggle(this.$refs.toggle)
  },
  methods: {
    toggle () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
      }
    }
  }
}
</script>
