<template>
  <docs-content title='Listitem'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Listitem' :code='defaultCode'>
        <ou-list>
          <ou-list-item>
            Alton Lafferty
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
              <ou-list-item-action icon="pencil" icon-type="svg" />
              <ou-list-item-action icon="phone" icon-type="svg" />
              <ou-list-item-action icon="trash" icon-type="svg" />
              <ou-list-item-action icon="box" icon-type="svg" />
            </div>
          </ou-list-item>

        </ou-list>
      </docs-code-block>
       <docs-code-block title='Image Listitem' :code='defaultCode'>
        <ou-list type="image">
          <ou-list-item>
            Alton Lafferty
            <div slot="image">
              <img src="/docs/assets/img/avatar.png" style="width:50px;">
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
              <ou-list-item-action icon="pencil" icon-type="svg" />
              <ou-list-item-action icon="phone" icon-type="svg" />
              <ou-list-item-action icon="trash" icon-type="svg" />
              <ou-list-item-action icon="box" icon-type="svg" />
            </div>
          </ou-list-item>

        </ou-list>
      </docs-code-block>
       <docs-code-block title='Unseen Listitem' :code='defaultCode'>
        <ou-list>
          <ou-list-item :is-unseen="true" >
            Alton Lafferty
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
              <ou-list-item-action icon="pencil" icon-type="svg" />
              <ou-list-item-action icon="phone" icon-type="svg" />
              <ou-list-item-action icon="trash" icon-type="svg" />
              <ou-list-item-action icon="box" icon-type="svg" />
            </div>
          </ou-list-item>
        </ou-list>
      </docs-code-block>
      <docs-code-block title='Unread Listitem' :code='defaultCode'>
        <ou-list>
          <ou-list-item :is-unread="true" >
            Alton Lafferty
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
              <ou-list-item-action icon="pencil" icon-type="svg" />
              <ou-list-item-action icon="phone" icon-type="svg" />
              <ou-list-item-action icon="trash" icon-type="svg" />
              <ou-list-item-action icon="box" icon-type="svg" />
            </div>
          </ou-list-item>
        </ou-list>
      </docs-code-block>
      <docs-code-block title='Selectable Listitem' :code='defaultCode'>
        <ou-list :is-selectable="true">
          <ou-list-item >
            Alton Lafferty
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
              <ou-list-item-action icon="pencil" icon-type="svg" />
              <ou-list-item-action icon="phone" icon-type="svg" />
              <ou-list-item-action icon="trash" icon-type="svg" />
              <ou-list-item-action icon="box" icon-type="svg" />
            </div>
          </ou-list-item>
        </ou-list>
      </docs-code-block>
      <docs-code-block title='Selected Listitem' :code='defaultCode'>
        <ou-list :is-selectable="true">
          <ou-list-item :is-selected="true">
            Alton Lafferty
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
              <ou-list-item-action icon="pencil" icon-type="svg" />
              <ou-list-item-action icon="phone" icon-type="svg" />
              <ou-list-item-action icon="trash" icon-type="svg" />
              <ou-list-item-action icon="box" icon-type="svg" />
            </div>
          </ou-list-item>
        </ou-list>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='labelProps' name='Label' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/list/overview.md';
  import defaultCode from '../markdown/list/defaultCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        labelProps: [
          { name: 'type', type: 'String', required: 'false', defaultValue: 'defaul', description: 'One of default, document, image' }        ]
      };
    }
  };
</script>
