<template>
  <docs-content title='Changelog' :hasNav='false'>
    <div class='overview_content' v-html='changeLog'></div>
  </docs-content>
</template>
<script>
  import DocsContent from './DocsContent.vue';
  import changeLog from '../../CHANGELOG.md';

  export default {
    data() {
      return {
        changeLog
      };
    },

    components: {
      DocsContent
    }
  };
</script>
