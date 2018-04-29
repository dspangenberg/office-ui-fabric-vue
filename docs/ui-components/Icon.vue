<template>
  <docs-content title="Label">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Icon">
        <ou-icon icon="Mail" />
      </docs-code-block>
      <docs-code-block
        :code="svgCode"
        title="SVG Icon">
        <ou-icon
          type="svg"
          icon="add-user" />
        <div v-html="svgInstructionsContent"/>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="labelProps"
        type="props"
        name="Label" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/icon/overview.md'
import svgInstructionsContent from '../markdown/icon/svgInstructions.md'
import defaultCode from '../markdown/icon/defaultCode.md'
import svgCode from '../markdown/icon/svgCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      svgCode,
      svgInstructionsContent,
      labelProps: [
        { name: 'icon', type: 'String', required: 'true', defaultValue: 'false', description: 'if the label is disabled' },
        { name: 'type', type: 'String', required: 'false', defaultValue: 'ms', description: 'use the icon-font or svg-icons' }
      ]
    }
  }
}
</script>
