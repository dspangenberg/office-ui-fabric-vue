<template>
  <docs-content title="Panel">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Panel">
        <ou-button @click="openDefaultPanel">Open Panel</ou-button>
        <ou-panel
          v-model="defaultPanelVisiblity"
          title="Panel">
          <span class="ms-font-m">Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block
        :code="mediumCode"
        title="Medium Panel">
        <ou-button @click="openMediumPanel">Open Panel</ou-button>
        <ou-panel
          v-model="mediumPanelVisiblity"
          title="Panel"
          size="md">
          <span class="ms-font-m">Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block
        :code="largeCode"
        title="Large Panel">
        <ou-button @click="openLargePanel">Open Panel</ou-button>
        <ou-panel
          v-model="largePanelVisiblity"
          title="Panel"
          size="lg">
          <span class="ms-font-m">Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block
        :code="largeFixedCode"
        title="Large Fixed Panel">
        <ou-button @click="openLargeFixedPanel">Open Panel</ou-button>
        <ou-panel
          v-model="largeFixedPanelVisiblity"
          title="Panel"
          size="lg"
          fixed>
          <span class="ms-font-m">Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block
        :code="extraLargeCode"
        title="Extra Large Panel">
        <ou-button @click="openExtraLargePanel">Open Panel</ou-button>
        <ou-panel
          v-model="extraLargePanelVisiblity"
          title="Panel"
          size="xl">
          <span class="ms-font-m">Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block
        :code="extraExtraLargeCode"
        title="Extra Extra Large Panel">
        <ou-button @click="openExtraExtraLargePanel">Open Panel</ou-button>
        <ou-panel
          v-model="extraExtraLargePanelVisiblity"
          title="Panel"
          size="xxl">
          <span class="ms-font-m">Content goes here</span>
        </ou-panel>
      </docs-code-block>
      <docs-code-block
        :code="leftCode"
        title="Left Panel">
        <ou-button @click="openLeftPanel">Open Panel</ou-button>
        <ou-panel
          v-model="leftPanelVisiblity"
          title="Panel"
          left>
          <span class="ms-font-m">Content goes here</span>
        </ou-panel>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="panelProps"
        type="props"
        name="Panel" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/panel/overview.md'
import defaultCode from '../markdown/panel/defaultCode.md'
import mediumCode from '../markdown/panel/mediumCode.md'
import largeCode from '../markdown/panel/largeCode.md'
import largeFixedCode from '../markdown/panel/largeFixedCode.md'
import extraLargeCode from '../markdown/panel/extraLargeCode.md'
import extraExtraLargeCode from '../markdown/panel/extraExtraLargeCode.md'
import leftCode from '../markdown/panel/leftCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      mediumCode,
      largeCode,
      largeFixedCode,
      extraLargeCode,
      extraExtraLargeCode,
      leftCode,
      defaultPanelVisiblity: false,
      mediumPanelVisiblity: false,
      largePanelVisiblity: false,
      largeFixedPanelVisiblity: false,
      extraLargePanelVisiblity: false,
      extraExtraLargePanelVisiblity: false,
      leftPanelVisiblity: false,
      panelProps: [
        { name: 'v-model', type: 'Boolean', required: 'false', description: "bind boolean value to the panel to control it's visibility" },
        { name: 'size', type: 'String', required: 'false', acceptedValue: 'md, lg, xl, xxl', description: 'the size of the panel' },
        { name: 'title', type: 'String', required: 'false', description: 'the title of the panel' },
        { name: 'fixed', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the panel is fixed' },
        { name: 'left', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the panel position is left' }
      ]
    }
  },

  methods: {
    openDefaultPanel () {
      this.defaultPanelVisiblity = true
    },

    openMediumPanel () {
      this.mediumPanelVisiblity = true
    },

    openLargePanel () {
      this.largePanelVisiblity = true
    },

    openLargeFixedPanel () {
      this.largeFixedPanelVisiblity = true
    },

    openExtraLargePanel () {
      this.extraLargePanelVisiblity = true
    },

    openExtraExtraLargePanel () {
      this.extraExtraLargePanelVisiblity = true
    },

    openLeftPanel () {
      this.leftPanelVisiblity = true
    }
  }
}
</script>
