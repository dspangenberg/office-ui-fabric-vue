<template>
  <docs-content title="Label">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Label">
        <ou-label>Name</ou-label>
      </docs-code-block>
      <docs-code-block
        :code="disabledCode"
        title="Disabled Label">
        <ou-label disabled>Name</ou-label>
      </docs-code-block>
      <docs-code-block
        :code="requiredCode"
        title="Required Label">
        <ou-label required>Name</ou-label>
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
import overviewContent from '../markdown/label/overview.md'
import defaultCode from '../markdown/label/defaultCode.md'
import disabledCode from '../markdown/label/disabledCode.md'
import requiredCode from '../markdown/label/requiredCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      disabledCode,
      requiredCode,
      labelProps: [
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the label is disabled' },
        { name: 'required', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the label is required' }
      ]
    }
  }
}
</script>
