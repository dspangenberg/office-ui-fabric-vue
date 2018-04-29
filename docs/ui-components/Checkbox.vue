<template>
  <docs-content title="Checkbox">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Checkbox">
        <ou-checkbox v-model="checked">Checkbox</ou-checkbox>
      </docs-code-block>
      <docs-code-block
        :code="disabledCode"
        title="Disabled Checkbox">
        <ou-checkbox
          v-model="checked"
          :is-disabled="true"
        >
          Checkbox Disabled
        </ou-checkbox>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="checkboxProps"
        type="props"
        name="Checkbox" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/checkbox/overview.md'
import defaultCode from '../markdown/checkbox/defaultCode.md'
import disabledCode from '../markdown/checkbox/disabledCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      disabledCode,
      checked: false,
      checkboxProps: [
        { name: 'v-model', type: 'Boolean', required: 'false', description: 'bind boolean value to the checkbox' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the checkbox is disabled' }
      ]
    }
  }
}
</script>
