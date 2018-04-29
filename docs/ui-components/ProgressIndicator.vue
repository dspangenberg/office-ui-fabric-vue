<template>
  <docs-content title="ProgressIndicator">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default ProgressIndicator">
        <ou-progress-indicator
          :percent="0.9"
          name="Example.jpg"
          description="Example.jpg" />
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="progressIndicatorProps"
        type="props"
        name="ProgressIndicator" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/progress_indicator/overview.md'
import defaultCode from '../markdown/progress_indicator/defaultCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      progressIndicatorProps: [
        { name: 'name', type: 'String', required: 'false', description: 'the name for the progress indicator' },
        { name: 'description', type: 'String', required: 'false', description: 'the description for the progress indicator' },
        { name: 'percent', type: 'Number', required: 'false', acceptedValue: '0 ~ 1', description: 'the percent for the progress indicator' }
      ]
    }
  }
}
</script>
