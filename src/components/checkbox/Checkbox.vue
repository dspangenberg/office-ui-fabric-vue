<template>
  <div
    ref="checkbox"
    class="ms-CheckBox">
    <input
      tabindex="-1"
      type="checkbox"
      class="ms-CheckBox-input"
      @click="toggle">
    <label
      :class="{ 'is-disabled': isDisabled }"
      role="checkbox"
      class="ms-CheckBox-field"
      tabindex="0"
      aria-checked="false"
      name="checkbox">
      <span class="ms-Label"><slot /></span>
    </label>
  </div>
</template>
<script>
import disabled from '../../mixins/props/disabled'

export default {
  name: 'OuCheckbox',
  mixins: [disabled],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkboxInstance: null
    }
  },
  watch: {
    value () {
      this.setCheck()
    }
  },
  mounted () {
    this.checkboxInstance = new this.$fabric.CheckBox(this.$refs.checkbox)
    this.setCheck()
  },
  methods: {
    toggle () {
      this.$emit('input', this.checkboxInstance.getValue())
    },
    setCheck () {
      this.value && !this.isDisabled
        ? this.checkboxInstance.check()
        : this.checkboxInstance.unCheck()
    }
  }
}
</script>
