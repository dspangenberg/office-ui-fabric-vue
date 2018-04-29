<template>
  <docs-content title="Spinner">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Spinner">
        <ou-spinner />
      </docs-code-block>
      <docs-code-block
        :code="largeCode"
        title="Large Spinner">
        <ou-spinner type="large" />
      </docs-code-block>
      <docs-code-block
        :code="labelCode"
        title="Spinner with Label">
        <ou-spinner label="Loading..." />
      </docs-code-block>
      <docs-code-block
        :code="largeLabelCode"
        title="Large Spinner with Label">
        <ou-spinner
          label="Loading..."
          type="large" />
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="spinnerProps"
        type="props"
        name="Spinner" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/spinner/overview.md'
import defaultCode from '../markdown/spinner/defaultCode.md'
import largeCode from '../markdown/spinner/largeCode.md'
import labelCode from '../markdown/spinner/labelCode.md'
import largeLabelCode from '../markdown/spinner/largeLabelCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      largeCode,
      labelCode,
      largeLabelCode,
      spinnerProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'large', description: 'the type for the spinner' },
        { name: 'label', type: 'String', required: 'false', description: 'the label content for the spinner' }
      ]
    }
  }
}
</script>
