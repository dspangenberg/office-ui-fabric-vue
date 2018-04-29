<template>
  <div
    ref="pivot"
    :class="pivotClass"
    class="ms-Pivot">
    <ul class="ms-Pivot-links">
      <li
        v-for="(item, index) of pivotItems"
        :key="index"
        :class="{ 'is-selected': index == 0 }"
        :data-content="item"
        :title="item"
        class="ms-Pivot-link"
        tabindex="1">
        {{ item }}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
import size from '../../mixins/props/size'
import type from '../../mixins/props/type'
import eventHub from '../../mixins/eventHub'

export default {
  name: 'OuPivot',

  mixins: [
    size('large'),
    type('tabs'),
    eventHub
  ],

  data () {
    return {
      pivotItems: []
    }
  },

  computed: {
    pivotClass () {
      return {
        [`ms-Pivot--${this.size}`]: !!this.size,
        [`ms-Pivot--${this.type}`]: !!this.type
      }
    }
  },

  created () {
    this.eventHub.$on('addPivotItem', this.addPivotItem)
  },

  beforeDestroy () {
    this.eventHub.$off('addPivotItem', this.addPivotItem)
  },

  mounted () {
    new this.$fabric.Pivot(this.$refs.pivot)
  },

  methods: {
    addPivotItem (label) {
      this.pivotItems.push(label)
    }
  }
}
</script>
