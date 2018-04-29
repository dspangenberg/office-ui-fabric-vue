<template>
  <docs-content
    :has-nav="false"
    title="Changelog">
    <div
      class="overview_content"
      v-html="changeLog"/>
  </docs-content>
</template>
<script>
import DocsContent from './DocsContent.vue'
import changeLog from '../../CHANGELOG.md'

export default {
  components: {
    DocsContent, changeLog
  }
}
</script>
