<template>
  <docs-content title="ContextualMenu">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default ContextualMenu">
        <ou-contextual-menu>
          <ou-button type="primary">Open Example</ou-button>
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
        :code="defaultCode"
        title="ContextualMenu with Icons">
        <ou-contextual-menu :has-icons="true">
          <ou-button type="primary">Open Example</ou-button>
          <div slot="list">
            <ou-contextual-menu-item
              icon="cat-footprint"
              icon-type="svg"
              name="Animals" />
            <ou-contextual-menu-item
              icon="library"
              icon-type="svg"
              name="Books" />
            <ou-contextual-menu-item
              icon="puzzle"
              icon-type="svg"
              name="Education" />
            <ou-contextual-menu-item
              icon="music"
              icon-type="svg"
              name="Music" />
            <ou-contextual-menu-item
              icon="trophy"
              icon-type="svg"
              name="Sports"
              disabled />
          </div>
        </ou-contextual-menu>
      </docs-code-block>
      <docs-code-block
        :code="multiselectCode"
        title="Multiselect ContextualMenu">
        <ou-contextual-menu
          v-model="select"
          type="multiselect">
          <ou-button type="primary">Open Example</ou-button>
          <div slot="list">
            <ou-contextual-menu-item
              type="header"
              name="Sort by" />
            <ou-contextual-menu-item
              name="Date"
              value="date" />
            <ou-contextual-menu-item
              name="Sender"
              value="sender" />
            <ou-contextual-menu-item type="divider" />
            <ou-contextual-menu-item
              type="header"
              name="Order" />
            <ou-contextual-menu-item
              name="Newest on top"
              value="new" />
            <ou-contextual-menu-item
              name="Oldest on top"
              value="old" />
            <ou-contextual-menu-item type="divider" />
            <ou-contextual-menu-item
              type="header"
              name="conversations" />
            <ou-contextual-menu-item
              name="On"
              value="on" />
            <ou-contextual-menu-item
              name="Off"
              value="off" />
          </div>
        </ou-contextual-menu>
      </docs-code-block>
      <docs-code-block
        :code="submenuCode"
        title="Submenu ContextualMenu">
        <ou-contextual-menu>
          <ou-button type="primary">Open Example</ou-button>
          <div slot="list">
            <ou-contextual-menu-item name="Animals" />
            <ou-contextual-menu-item
              name="Books"
              type="hasMenu">
              <ou-contextual-menu-item name="Fiction" />
              <ou-contextual-menu-item name="Humor" />
              <ou-contextual-menu-item name="Magazines" />
              <ou-contextual-menu-item name="Non-fiction" />
              <ou-contextual-menu-item name="Textbooks" />
            </ou-contextual-menu-item>
            <ou-contextual-menu-item name="Education" />
            <ou-contextual-menu-item name="Music" />
            <ou-contextual-menu-item
              name="Sports"
              disabled />
          </div>
        </ou-contextual-menu>
      </docs-code-block>
      <docs-code-block
        :code="dividersCode"
        title="Dividers ContextualMenu">
        <ou-contextual-menu>
          <ou-button type="primary">Open Example</ou-button>
          <div slot="list">
            <ou-contextual-menu-item name="Delete" />
            <ou-contextual-menu-item name="Flag" />
            <ou-contextual-menu-item type="divider" />
            <ou-contextual-menu-item name="Important" />
            <ou-contextual-menu-item name="Move" />
            <ou-contextual-menu-item
              name="Move"
              type="hasMenu">
              <ou-contextual-menu-item name="Fiction" />
              <ou-contextual-menu-item name="Humor" />
              <ou-contextual-menu-item name="Magazines" />
              <ou-contextual-menu-item name="Non-fiction" />
              <ou-contextual-menu-item name="Textbooks" />
            </ou-contextual-menu-item>
            <ou-contextual-menu-item name="Create Rule..." />
            <ou-contextual-menu-item name="Verdana" />
          </div>
        </ou-contextual-menu>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="contextualMenuProps"
        type="props"
        name="ContextualMenu" />
      <docs-table
        :data="contextualMenuSlot"
        type="slot"
        name="ContextualMenu" />
      <docs-table
        :data="contextualMenuItemProps"
        type="props"
        name="ContextualMenuItem" />
      <docs-table
        :data="contextualMenuItemEvents"
        type="events"
        name="ContextualMenuItem" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/contextual_menu/overview.md'
import defaultCode from '../markdown/contextual_menu/defaultCode.md'
import multiselectCode from '../markdown/contextual_menu/multiselectCode.md'
import submenuCode from '../markdown/contextual_menu/submenuCode.md'
import dividersCode from '../markdown/contextual_menu/dividersCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      multiselectCode,
      submenuCode,
      dividersCode,
      select: ['date', 'on'],
      contextualMenuProps: [
        { name: 'v-model', type: 'Array', required: 'false', description: 'bind selecting status when set value prop on contextual menu item' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'multiselect', description: 'the type of the contextual menu' }
      ],
      contextualMenuSlot: [
        { name: 'list', description: 'set contextual menu item in the slot' }
      ],
      contextualMenuItemProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'divider, header, hasMenu', description: 'the type of the contextual menu item' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the contextual menu item is disabled' },
        { name: 'name', type: 'String', required: 'false', description: 'the name of the contextual menu item' },
        { name: 'value', type: 'String, Number', required: 'false', description: 'the value of the contextual menu item to bind v-model when the type of contextual menu is multiselect' }
      ],
      contextualMenuItemEvents: [
        { name: 'click', description: 'the callback function when clicked' }
      ]
    }
  }
}
</script>
