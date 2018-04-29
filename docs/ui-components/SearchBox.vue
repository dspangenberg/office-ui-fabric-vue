<template>
  <docs-content title="SearchBox">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default SearchBox">
        <ou-search-box
          v-model="defaultSearch"
          placeholder="Search"/>
      </docs-code-block>
      <docs-code-block
        :code="collapsedCode"
        title="Collapsed SearchBox">
        <ou-search-box
          v-model="collapsedSearch"
          type="commandBar"
          collapsed/>
      </docs-code-block>
      <docs-code-block
        :code="commandBarCode"
        title="CommandBar SearchBox">
        <ou-search-box
          v-model="commandBarSearch"
          type="commandBar"
          placeholder="Search"/>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="searchBoxProps"
        type="props"
        name="SearchBox" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/search_box/overview.md'
import defaultCode from '../markdown/search_box/defaultCode.md'
import collapsedCode from '../markdown/search_box/collapsedCode.md'
import commandBarCode from '../markdown/search_box/commandBarCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      collapsedCode,
      commandBarCode,
      defaultSearch: '',
      collapsedSearch: '',
      commandBarSearch: '',
      searchBoxProps: [
        { name: 'v-model', type: 'String', required: 'false', description: 'bind value to the search box' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'commandBar', description: 'the type of the search box' },
        { name: 'placeholder', type: 'String', required: 'false', description: 'the placeholder of the search box, if the search box was collapsed, the placeholder will hide' },
        { name: 'collapsed', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the button is collapsed, only the commandBar search box can be collapsed' }
      ]
    }
  }
}
</script>
