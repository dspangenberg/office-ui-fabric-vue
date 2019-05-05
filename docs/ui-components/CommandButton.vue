<template>
  <docs-content title="CommandButton">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default CommandButton">
        <ou-command-button
          icon-type="svg"
          svg-class="svg-red"
          icon="add-user">Command</ou-command-button>
      </docs-code-block>
      <docs-code-block
        :code="noLabelCode"
        title="No Label CommandButton">
        <ou-command-button
          icon="CircleRing"
          type="noLabel"/>
        <ou-command-button
          icon="add-user"
          icon-type="svg"
          type="noLabel"/>
      </docs-code-block>
      <docs-code-block
        :code="disabledCode"
        title="Disabled CommandButton">
        <ou-command-button
          icon="CircleRing"
          :is-disabled="true">Command</ou-command-button>
      </docs-code-block>
      <docs-code-block
        :code="disabledCode"
        title="Split CommandButton">
        <ou-command-button
          :is-split="true"
          :is-split-has-icons="true"
        >
          Command
          <div slot="list">
            <ou-contextual-menu-item icon-type="svg" icon="add-user" name="Animals" />
            <ou-contextual-menu-item name="Books" />
            <ou-contextual-menu-item name="Education" />
            <ou-contextual-menu-item name="Music" />
            <ou-contextual-menu-item name="Sports" />
          </div>
        </ou-command-button>
      </docs-code-block>
       <docs-code-block
        :code="disabledCode"
        title="Custom-Split CommandButton">
        <ou-command-button
          :is-split="true"
          :is-split-has-icons="true"
        >
          Command
          <div slot="split">
            <button
        class="ms-CommandButton-splitIcon"
      >
        <i class="ms-Icon ms-Icon--ChevronDown" />
      </button>
          </div>
        </ou-command-button>
      </docs-code-block>
      <docs-code-block
        :code="dropdownCode"
        title="Dropdown CommandButton">
        <ou-contextual-menu>
          <ou-command-button
            icon="CircleRing"
            type="dropdown">New</ou-command-button>
          <div slot="list">
            <ou-contextual-menu-item name="Animals" />
            <ou-contextual-menu-item name="Books" />
            <ou-contextual-menu-item name="Education" />
            <ou-contextual-menu-item name="Music" />
            <ou-contextual-menu-item
              name="Sports"
              disabled />
          </div>
        </ou-contextual-menu>
      </docs-code-block>
      <docs-code-block
        :code="dropdownCode"
        title="Dropdown dropdownWithNoLabel">
        <ou-contextual-menu>
          <ou-command-button
            icon="add-user"
            icon-type="svg"
            type="dropdownNoLabel">New</ou-command-button>
          <div slot="list">
            <ou-contextual-menu-item name="Animals" />
            <ou-contextual-menu-item name="Books" />
            <ou-contextual-menu-item name="Education" />
            <ou-contextual-menu-item name="Music" />
            <ou-contextual-menu-item
              name="Sports"
              disabled />
          </div>
        </ou-contextual-menu>
      </docs-code-block>
      <docs-code-block
        :code="inlineCode"
        title="Inline CommandButton">
        <ou-command-button
          icon="CircleRing"
          type="inline">Command</ou-command-button>
      </docs-code-block>
      <docs-code-block
        :code="textOnlyCode"
        title="Text Only CommandButton"
      >
        <ou-command-button label-style="color: red;" >Command</ou-command-button>
      </docs-code-block>

      <docs-code-block
        :code="textOnlyCode"
        title="Pivot CommandButton">
        <ou-command-button
          :pivot="true"
          icon-type="svg"
          icon="add-user">Command</ou-command-button>
      </docs-code-block>
      <docs-code-block
        :code="textOnlyCode"
        title="Selected Pivot CommandButton">
        <ou-command-button
          :active="true"
          :pivot="true"
          icon-type="svg"
          icon="add-user">Command</ou-command-button>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="commandButtonProps"
        type="props"
        name="CommandButton" />
      <docs-table
        :data="commandButtonEvents"
        type="events"
        name="CommandButton" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/command_button/overview.md'
import defaultCode from '../markdown/command_button/defaultCode.md'
import noLabelCode from '../markdown/command_button/noLabelCode.md'
import disabledCode from '../markdown/command_button/disabledCode.md'
import dropdownCode from '../markdown/command_button/dropdownCode.md'
import inlineCode from '../markdown/command_button/inlineCode.md'
import textOnlyCode from '../markdown/command_button/textOnlyCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      noLabelCode,
      disabledCode,
      dropdownCode,
      inlineCode,
      textOnlyCode,
      commandButtonProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'noLabel, inline, dropdown', description: 'the type of the command button' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the command button is disabled' },
        { name: 'icon', type: 'String', required: 'false', description: 'the icon for the command button' }
      ],
      commandButtonEvents: [
        { name: 'click', description: 'the callback function when clicked' }
      ]
    }
  }
}
</script>
