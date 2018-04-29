<template>
  <docs-content
    :has-nav="false"
    title="Get started">
    <div
      class="overview_content"
      v-html="getStartedDoc"/>
  </docs-content>
</template>
<script>
import DocsContent from './DocsContent.vue'
import getStartedDoc from '../../README.md'

export default {

  components: {
    DocsContent
  },
  data () {
    return {
      getStartedDoc
    }
  }
}
</script>
