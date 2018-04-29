<template>
  <div class="container">
    <i
      class="ms-Icon ms-Icon--GlobalNavButton ms-fontColor-white"
      aria-hidden="true"
      @click="openPanel"/>
    <ou-panel
      v-model="panelVisiblity"
      left>
      <docs-nav />
    </ou-panel>
  </div>
</template>
<style scoped>
  .container {
    display: none;
    margin-right: 20px;
  }

  @media (max-width: 479px) {
    .container {
      display: block;
    }
  }
</style>
<script>
import DocsNav from './DocsNav.vue'

export default {

  components: {
    DocsNav
  },
  data () {
    return {
      panelVisiblity: false
    }
  },

  watch: {
    $route: 'closePanel'
  },

  methods: {
    openPanel () {
      this.panelVisiblity = true
    },

    closePanel () {
      this.panelVisiblity = false
    }
  }
}
</script>
