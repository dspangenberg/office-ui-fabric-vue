<template>
  <docs-content title="Persona">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="tinyCode"
        title="Tiny Persona">
        <ou-persona
          type="available"
          size="tiny"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode" />
      </docs-code-block>
      <docs-code-block
        :code="extraSmallCode"
        title="Extra Small Persona">
        <ou-persona
          size="xs"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode" />
      </docs-code-block>
      <docs-code-block
        :code="smallCode"
        title="Small Persona">
        <ou-persona
          size="sm"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
      <docs-code-block
        :code="defaultCode"
        title="Default Persona">
        <ou-persona
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
      <docs-code-block
        :code="largeCode"
        title="Large Persona">
        <ou-persona
          size="lg"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant"
          tertiary-text="In a meeting" />
      </docs-code-block>
      <docs-code-block
        :code="extraLargeCode"
        title="Extra Large Persona">
        <ou-persona
          size="xl"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant"
          tertiary-text="In a meeting"
          optional-text="Available at 4:00pm" />
      </docs-code-block>
      <docs-code-block
        :code="initialsCode"
        title="initials Persona">
        <ou-persona
          initials="AD"
          primary-text="Aide Woode" />
      </docs-code-block>
      <docs-code-block
        :code="availableCode"
        title="Available Persona">
        <ou-persona
          type="available"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
      <docs-code-block
        :code="awayCode"
        title="Away Persona">
        <ou-persona
          type="away"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
      <docs-code-block
        :code="blockedCode"
        title="Blocked Persona">
        <ou-persona
          type="blocked"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
      <docs-code-block
        :code="busyCode"
        title="Busy Persona">
        <ou-persona
          type="busy"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
      <docs-code-block
        :code="dndCode"
        title="DND Persona">
        <ou-persona
          type="dnd"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
      <docs-code-block
        :code="offlineCode"
        title="Offline Persona">
        <ou-persona
          type="offline"
          src="docs/assets/img/avatar.png"
          primary-text="Aide Woode"
          secondary-text="Accountant" />
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="personaProps"
        type="props"
        name="Persona" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/persona/overview.md'
import tinyCode from '../markdown/persona/tinyCode.md'
import extraSmallCode from '../markdown/persona/extraSmallCode.md'
import smallCode from '../markdown/persona/smallCode.md'
import defaultCode from '../markdown/persona/defaultCode.md'
import largeCode from '../markdown/persona/largeCode.md'
import extraLargeCode from '../markdown/persona/extraLargeCode.md'
import initialsCode from '../markdown/persona/initialsCode.md'
import availableCode from '../markdown/persona/availableCode.md'
import awayCode from '../markdown/persona/awayCode.md'
import blockedCode from '../markdown/persona/blockedCode.md'
import busyCode from '../markdown/persona/busyCode.md'
import dndCode from '../markdown/persona/dndCode.md'
import offlineCode from '../markdown/persona/offlineCode.md'

export default {
  data () {
    return {
      overviewContent,
      tinyCode,
      extraSmallCode,
      smallCode,
      defaultCode,
      largeCode,
      extraLargeCode,
      initialsCode,
      availableCode,
      awayCode,
      blockedCode,
      busyCode,
      dndCode,
      offlineCode,
      personaProps: [
        { name: 'size', type: 'String', required: 'false', acceptedValue: 'tiny, xs, sm, lg, xl', description: 'the size of the persona' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'available, away, blocked, busy, dnd, offline', description: 'the type of the persona' },
        { name: 'src', type: 'String', required: 'false', description: 'the image resource address of the persona' },
        { name: 'initials', type: 'String', required: 'false', description: 'the initials letters of the persona' },
        { name: 'primaryText', type: 'String', required: 'false', description: 'the primary text of the persona' },
        { name: 'secondaryText', type: 'String', required: 'false', description: 'the secondary text of the persona' },
        { name: 'tertiaryText', type: 'String', required: 'false', description: 'the tertiary text of the persona' },
        { name: 'optionalText', type: 'String', required: 'false', description: 'the optional text of the persona' }
      ]
    }
  }
}
</script>
