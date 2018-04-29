<template>
  <docs-content title="List">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default List">
        <ou-list>
          <ou-list-item>
            <div slot="primary">
              Alton Lafferty
            </div>
            <div slot="secondary">
              Meeting notes
            </div>
            <div slot="tertiary">
              Today we discussed the importance of a, b, and c in regards to d.
            </div>
            <div slot="meta">
              14:42
            </div>
            <div slot="actions">
              <ou-list-item-action
                icon="pencil"
                icon-type="svg" />
              <ou-list-item-action
                icon="phone"
                icon-type="svg" />
              <ou-list-item-action
                icon="trash"
                icon-type="svg" />
              <ou-list-item-action
                icon="box"
                icon-type="svg" />
            </div>
          </ou-list-item>
          <ou-list-item>
            <div slot="primary">
              Alton Lafferty
            </div>
            <div slot="secondary">
              Meeting notes
            </div>
            <div slot="tertiary">
              Today we discussed the importance of a, b, and c in regards to d.
            </div>
            <div slot="meta">
              14:42
            </div>
            <div slot="actions">
              <ou-list-item-action
                icon="pencil"
                icon-type="svg" />
              <ou-list-item-action
                icon="phone"
                icon-type="svg" />
              <ou-list-item-action
                icon="trash"
                icon-type="svg" />
              <ou-list-item-action
                icon="box"
                icon-type="svg" />
            </div>
          </ou-list-item>
          <ou-list-item>
            <div slot="primary">
              Alton Lafferty
            </div>
            <div slot="secondary">
              Meeting notes
            </div>
            <div slot="tertiary">
              Today we discussed the importance of a, b, and c in regards to d.
            </div>
            <div slot="meta">
              14:42
            </div>
            <div slot="actions">
              <ou-list-item-action
                icon="pencil"
                icon-type="svg" />
              <ou-list-item-action
                icon="phone"
                icon-type="svg" />
              <ou-list-item-action
                icon="trash"
                icon-type="svg" />
              <ou-list-item-action
                icon="box"
                icon-type="svg" />
            </div>
          </ou-list-item>
          <ou-list-item>
            <div slot="primary">
              Alton Lafferty
            </div>
            <div slot="secondary">
              Meeting notes
            </div>
            <div slot="tertiary">
              Today we discussed the importance of a, b, and c in regards to d.
            </div>
            <div slot="meta">
              14:42
            </div>
            <div slot="actions">
              <ou-list-item-action
                icon="pencil"
                icon-type="svg" />
              <ou-list-item-action
                icon="phone"
                icon-type="svg" />
              <ou-list-item-action
                icon="trash"
                icon-type="svg" />
              <ou-list-item-action
                icon="box"
                icon-type="svg" />
            </div>
          </ou-list-item>
        </ou-list>
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
import overviewContent from '../markdown/list/overview.md'
import defaultCode from '../markdown/list/defaultCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      labelProps: [
        { name: 'type', type: 'String', required: 'false', defaultValue: 'defaul', description: 'One of default, document, image' } ]
    }
  }
}
</script>
