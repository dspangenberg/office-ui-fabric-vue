<template>
  <docs-content title='Label'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Icon' :code='defaultCode'>
        <ou-icon icon="Mail" />
      </docs-code-block>
      <docs-code-block title='SVG Icon' :code='svgCode'>
        <ou-icon type="svg" icon="add-user" svg-class="svg-red" dir="right" />
        <div v-html="svgInstructionsContent"></div>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='labelProps' name='Label' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/icon/overview.md';
  import svgInstructionsContent from '../markdown/icon/svgInstructions.md';
  import defaultCode from '../markdown/icon/defaultCode.md';
  import svgCode from '../markdown/icon/svgCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        svgCode,
        svgInstructionsContent,
        labelProps: [
          { name: 'icon', type: 'String', required: 'true', defaultValue: 'false', description: 'if the label is disabled' },
          { name: 'type', type: 'String', required: 'false', defaultValue: 'ms', description: 'use the icon-font or svg-icons' }
        ]
      };
    }
  };
</script>
