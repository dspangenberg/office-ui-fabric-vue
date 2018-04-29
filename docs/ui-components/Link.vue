<template>
  <docs-content title="Link">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Link">
        <ou-link
          href="#"
          title="More info about Example Link">Example Link</ou-link>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="linkProps"
        type="props"
        name="Link" />
      <docs-table
        :data="linkEvents"
        type="events"
        name="Link" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/link/overview.md'
import defaultCode from '../markdown/link/defaultCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      linkProps: [
        { name: 'href', type: 'String', required: 'false', description: 'the url of the link' },
        { name: 'title', type: 'String', required: 'false', description: 'the title of the link' }
      ],
      linkEvents: [
        { name: 'click', description: 'the callback function when clicked' }
      ]
    }
  }
}
</script>
