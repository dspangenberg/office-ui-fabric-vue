<template>
  <docs-content title="Breadcrumb">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Breadcrumb">
        <ou-breadcrumb>
          <ou-breadcrumb-item>Folder1</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder2</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder3</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder4</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder5</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder6</ou-breadcrumb-item>
        </ou-breadcrumb>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="breadcrumbItemProps"
        type="props"
        name="Breadcrumb Item" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/breadcrumb/overview.md'
import defaultCode from '../markdown/breadcrumb/defaultCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      breadcrumbItemProps: [
        { name: 'href', type: 'String', required: 'false', description: 'the url for the breadcrumb item' }
      ]
    }
  }
}
</script>
