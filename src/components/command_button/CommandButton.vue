<template>
  <div class='ms-CommandButton' :class='commandButtonClass' @click='clickEvent'>
    <button class='ms-CommandButton-button'>
      <span class='ms-CommandButton-icon ms-fontColor-themePrimary' v-if='icon'>
        <ou-icon :size="$parent.svgSize" :icon="icon" :type="iconType" />
      </span>
      <span class='ms-CommandButton-label'><slot /></span>
      <span class='ms-CommandButton-dropdownIcon' v-if="hasDropdown">
        <i class='ms-Icon ms-Icon--ChevronDown'></i>
      </span>
    </button>
  </div>
</template>
<script>
  import type from '../../mixins/props/type';
  import disabled from '../../mixins/props/disabled';
  import icon from '../../mixins/props/icon';

  export default {
    name: 'ou-command-button',

    mixins: [
      type('noLabel', 'inline', 'dropdown', 'dropdownNoLabel'),
      disabled,
      icon
    ],

    props: {
      iconType: String,
      active: Boolean,
      pivot: Boolean
    },

    computed: {
      hasDropdown () {
        return (this.type === 'dropdown' || this.type==='dropdownNoLabel')
      },
      hasLabel () {
        return (this.type !== 'noLabel' && this.type !== 'dropdownNoLabel')
      },
      commandButtonClass() {
        return {
          'ms-CommandButton--noLabel': !this.hasLabel,
          'ms-CommandButton--inline': this.type === 'inline',
          'ms-CommandButton--dropdown': this.hasDropdown,
          'ms-CommandButton--pivot': this.pivot,
          'is-disabled': this.disabled,
          'is-active': this.active && this.pivot
        };
      }
    },

    methods: {
      clickEvent() {
        if (!this.disabled) { this.$emit('click'); }
      }
    }
  };
</script>
