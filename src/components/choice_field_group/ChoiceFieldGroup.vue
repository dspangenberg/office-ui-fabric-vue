<template>
  <div
    id="choicefieldgroup"
    ref="choiceFieldGroup"
    class="ms-ChoiceFieldGroup"
    role="radiogroup">
    <div class="ms-ChoiceFieldGroup-title">
      <slot name="title" />
    </div>
    <ul class="ms-ChoiceFieldGroup-list">
      <slot />
    </ul>
  </div>
</template>
<script>
import eventHub from '../../mixins/eventHub'

export default {
  name: 'OuChoiceFieldGroup',
  mixins: [eventHub],
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  watch: {
    value () {
      this.setChoiceFields()
    }
  },
  created () {
    this.eventHub.$on('updateValue', this.updateValue)
  },
  beforeDestroy () {
    this.eventHub.$off('updateValue', this.updateValue)
  },
  mounted () {
    this.setChoiceFields()
    new this.$fabric.ChoiceFieldGroup(this.$refs.choiceFieldGroup)
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    },
    setChoiceFields () {
      if (typeof this.value !== 'undefined') {
        this.eventHub.$emit('setChoiceField', this.value)
      }
    }
  }
}
</script>
