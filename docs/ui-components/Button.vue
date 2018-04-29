<template>
  <docs-content title="Button">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="normalCode"
        title="Normal Button">
        <ou-button>Create Account</ou-button>
      </docs-code-block>
      <docs-code-block
        :code="primaryCode"
        title="Primary Button">
        <ou-button type="primary">Create Account</ou-button>
      </docs-code-block>
      <docs-code-block
        :code="heroCode"
        title="Hero Button">
        <ou-button
          type="hero"
          icon="Add">Create Account</ou-button>
      </docs-code-block>
      <docs-code-block
        :code="compoundCode"
        title="Compound Button">
        <ou-button
          type="compound"
          description="Description of this action this button takes">Create Account</ou-button>
      </docs-code-block>
      <docs-code-block
        :code="smallCode"
        title="SplitButton">
        <ou-split-button>Create Account
          <div slot="list">
            <ou-contextual-menu-item name="Animals" />
            <ou-contextual-menu-item name="Books" />
            <ou-contextual-menu-item name="Education" />
            <ou-contextual-menu-item name="Music" />
            <ou-contextual-menu-item name="Sports" />
          </div>
        </ou-split-button>
      </docs-code-block>
      <docs-code-block
        :code="smallCode"
        title="Small Button">
        <ou-button type="small">Create</ou-button>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="buttonProps"
        type="props"
        name="Button" />
      <docs-table
        :data="buttonEvents"
        type="events"
        name="Button" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/button/overview.md'
import normalCode from '../markdown/button/normalCode.md'
import primaryCode from '../markdown/button/primaryCode.md'
import heroCode from '../markdown/button/heroCode.md'
import compoundCode from '../markdown/button/compoundCode.md'
import smallCode from '../markdown/button/smallCode.md'

export default {
  data () {
    return {
      overviewContent,
      normalCode,
      primaryCode,
      heroCode,
      compoundCode,
      smallCode,
      buttonProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'primary, hero, compound, small', description: 'the type of the button' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the button is disabled' },
        { name: 'icon', type: 'String', required: 'false', description: 'the icon for the hero button' },
        { name: 'description', type: 'String', required: 'false', description: 'the description for the compound button' }
      ],
      buttonEvents: [
        { name: 'click', description: 'the callback function when clicked' }
      ]
    }
  }
}
</script>
