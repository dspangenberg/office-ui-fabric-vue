<template>
  <div
    ref="textField"
    :class="textFieldClass"
    class="ms-TextField">
    <label class="ms-Label">{{ label }}</label>
    <textarea
      v-if="type == 'multiline'"
      :placeholder="placeholder"
      :value="value"
      :disabled="isDisabled"
      class="ms-TextField-field"
      type="text"
      @input="updateValue"/>
    <input
      v-else
      :placeholder="placeholder"
      :type="inputType"
      :value="value"
      :disabled="isDisabled"
      class="ms-TextField-field"
      @input="updateValue" >
  </div>
</template>
<script>
import type from '../../mixins/props/type'
import disabled from '../../mixins/props/disabled'
import { strings } from '../../mixins/props/defaults'

export default {
  name: 'OuTextField',
  mixins: [
    type('multiline', 'underlined'),
    disabled,
    strings('value', 'label', 'placeholder')
  ],
  props: {
    inputType: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'password', 'file'].includes(value)
      }
    }
  },
  computed: {
    textFieldClass () {
      return {
        [`ms-TextField--${this.type}`]: !!this.type,
        'is-disabled': this.isDisabled
      }
    }
  },

  mounted () {
    new this.$fabric.TextField(this.$refs.textField)
  },

  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
