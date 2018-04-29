<template>

<div  class="ms-SplitButton">
  <ou-command-button
          :is-split="true"

        >
          Command
          <div slot="list">
            <ou-contextual-menu-item name="Animals" />
            <ou-contextual-menu-item name="Books" />
            <ou-contextual-menu-item name="Education" />
            <ou-contextual-menu-item name="Music" />
            <ou-contextual-menu-item name="Sports" />
          </div>
        </ou-command-button>
</div>
</template>
<script>
import type from '../../mixins/props/type'
import disabled from '../../mixins/props/disabled'
import icon from '../../mixins/props/icon'

export default {
  name: 'OuSplitButton',
  mixins: [
    type('primary', 'hero', 'compound', 'small'),
    disabled,
    icon
  ],
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      return {
        'is-disabled': this.disabled
      }
    }
  },
  methods: {
    clickEvent () {
      if (!this.disabled) { this.$emit('click') }
    }
  }
}
</script>

<style lang="scss" scoped>

  .ms-SplitButton .ms-CommandButton-button {
    line-height: 32px;
    display: inline-block;
    outline: 1px solid transparent;
    border: 1px solid #F7F4F4;
    background-color: #F7F4F4;
    line-height: 1;
            padding-left: 16px;
        padding-right: 16px;
  }



//ea

</style>
