<template>
  <docs-content title="Dropdown">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Dropdown">
        <ou-dropdown
          v-model="select1"
          label="Dropdown label">
          <ou-dropdown-item value="dog">Dog barking</ou-dropdown-item>
          <ou-dropdown-item value="wind">Wind blowing</ou-dropdown-item>
          <ou-dropdown-item value="duck">Duck quacking</ou-dropdown-item>
          <ou-dropdown-item value="cow">Cow mooing</ou-dropdown-item>
        </ou-dropdown>
      </docs-code-block>
      <docs-code-block
        :code="disabledCode"
        title="Disabled Dropdown">
        <ou-dropdown
          v-model="select2"
          label="Dropdown label"
          disabled>
          <ou-dropdown-item value="dog">Dog barking</ou-dropdown-item>
          <ou-dropdown-item value="wind">Wind blowing</ou-dropdown-item>
          <ou-dropdown-item value="duck">Duck quacking</ou-dropdown-item>
          <ou-dropdown-item value="cow">Cow mooing</ou-dropdown-item>
        </ou-dropdown>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="dropdownProps"
        type="props"
        name="Dropdown" />
      <docs-table
        :data="dropdownItemProps"
        type="props"
        name="DropdownItem" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/dropdown/overview.md'
import defaultCode from '../markdown/dropdown/defaultCode.md'
import disabledCode from '../markdown/dropdown/disabledCode.md'

export default {
  data () {
    return {
      select1: 'dog',
      select2: 'dog',
      overviewContent,
      defaultCode,
      disabledCode,
      dropdownProps: [
        { name: 'v-model', type: 'String, Number', required: 'false', description: 'bind selected item when set value prop on dropdown item' },
        { name: 'label', type: 'String', required: 'false', description: 'the label of the dropdown' },
        { name: 'placeholder', type: 'String', required: 'false', defaultValue: 'Please select', description: 'the placeholder of the dropdown' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the dropdown is disabled' }
      ],

      dropdownItemProps: [
        { name: 'value', type: 'String, Number', required: 'false', description: 'the value of the dropdown item' }
      ]
    }
  }
}
</script>
