<template>
  <li class="ms-RadioButton">
    <input
      tabindex="-1"
      type="radio"
      class="ms-RadioButton-input" >
    <label
      ref="radioLabel"
      :class="{ 'is-disabled': disabled }"
      role="radio"
      class="ms-RadioButton-field"
      tabindex="0"
      aria-checked="false"
      name="choicefieldgroup"
      @click="updateParentValue">
      <span class="ms-Label"><slot /></span>
    </label>
  </li>
</template>
<script>
import disabled from '../../mixins/props/disabled'

export default {
  name: 'OuChoiceField',
  mixins: [disabled],
  inject: ['eventHub'],
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  created () {
    this.eventHub.$on('setChoiceField', this.setChoiceField)
  },
  beforeDestroy () {
    this.eventHub.$off('setChoiceField', this.setChoiceField)
  },
  methods: {
    updateParentValue () {
      if (!this.disabled) {
        this.eventHub.$emit('updateValue', this.value)
      }
    },
    setChoiceField (value) {
      if (this.disabled) { return }

      if (this.value === value) {
        this.$refs.radioLabel.classList.add('is-checked')
      } else {
        this.$refs.radioLabel.classList.remove('is-checked')
      }
    }
  }
}
</script>
