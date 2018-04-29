<template>
  <div
    ref="progressIndicator"
    class="ms-ProgressIndicator">
    <div
      v-if="name"
      class="ms-ProgressIndicator-itemName">{{ name }}</div>
    <div class="ms-ProgressIndicator-itemProgress">
      <div class="ms-ProgressIndicator-progressTrack"/>
      <div class="ms-ProgressIndicator-progressBar"/>
    </div>
    <div
      v-if="description"
      class="ms-ProgressIndicator-itemDescription">{{ description }}</div>
  </div>
</template>
<script>
import { strings } from '../../mixins/props/defaults'
export default {
  name: 'OuProgressIndicator',
  mixins: [
    strings('name', 'description')
  ],
  props: {
    percent: {
      default: 0,
      type: Number,
      validator (value) {
        return value >= 0 && value <= 1
      }
    }
  },

  data () {
    return {
      progressIndicatorInstance: null
    }
  },

  watch: {
    percent () {
      this.setProgressIndicator()
    }
  },

  mounted () {
    const progressIndicatorElement = this.$refs.progressIndicator

    this.progressIndicatorInstance = new this.$fabric.ProgressIndicator(progressIndicatorElement)
    this.setProgressIndicator()
  },

  methods: {
    setProgressIndicator () {
      this.progressIndicatorInstance.setProgressPercent(this.percent)
    }
  }
}
</script>
