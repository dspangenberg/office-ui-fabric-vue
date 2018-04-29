<template>
  <div
    ref="dropdown"
    :class="{ 'is-disabled': isDisabled }"
    class="ms-Dropdown">
    <label
      v-if="label"
      class="ms-Label">{{ label }}</label>
    <i class="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"/>
    <select
      ref="dropdownSelect"
      class="ms-Dropdown-select"
      @change="getCurrentSelected">
      <slot />
    </select>
  </div>
</template>
<script>
import disabled from '../../mixins/props/disabled'
import eventHub from '../../mixins/eventHub'

export default {
  name: 'OuDropdown',
  mixins: [
    disabled,
    eventHub
  ],
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Please select'
    }
  },
  watch: {
    value () {
      this.setSelectedItem()
    }
  },
  created () {
    this.eventHub.$on('setSelectedStatus', this.setSelectedStatus)
  },
  beforeDestroy () {
    this.eventHub.$off('setSelectedStatus', this.setSelectedStatus)
  },
  mounted () {
    new this.$fabric.Dropdown(this.$refs.dropdown)
    this.setDropdownTitle(this.placeholder)
    this.setSelectedItem()
  },
  methods: {
    setDropdownTitle (title) {
      this.$refs.dropdown.querySelector('.ms-Dropdown-title').textContent = title
    },

    // Because the office ui js dropdown component don't have selected class to set
    // selected dropdown item, So write some hack code to set dropdown item selected.
    // Maybe next version of office ui js will fix this problem, So this code sould be
    // rewrite.
    setSelectedItem () {
      this.eventHub.$emit('setSelectedItem', this.value)
    },
    setSelectedStatus (content) {
      this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item').forEach((item) => {
        if (item.textContent === content) {
          item.classList.add('is-selected')
          this.setDropdownTitle(content)
        } else {
          item.classList.remove('is-selected')
        }
      })
    },
    getCurrentSelected () {
      const dropdownSelect = this.$refs.dropdownSelect
      this.$emit('input', dropdownSelect.options[dropdownSelect.selectedIndex].value)
    }
  }
}
</script>
