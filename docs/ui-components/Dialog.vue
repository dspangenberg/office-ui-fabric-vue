<template>
  <docs-content title="Dialog">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default Dialog">
        <ou-button @click="defaultDialogVisible=true">Open Dialog</ou-button>
        <ou-dialog
          v-model="defaultDialogVisible"
          title="All emails together"
          sub-text="Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.">
          <ou-checkbox>Option 1</ou-checkbox>
          <ou-checkbox>Option 2</ou-checkbox>
          <div slot="actions">
            <ou-button
              type="primary"
              @click="defaultDialogVisible=false">Save</ou-button>
            <ou-button @click="defaultDialogVisible=false">Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block
        :code="multilineCode"
        title="Multiline Dialog">
        <ou-button @click="multilineDialogVisible=true">Open Dialog</ou-button>
        <ou-dialog
          v-model="multilineDialogVisible"
          type="multiline"
          title="All emails together">
          <ou-button
            type="compound"
            description="Description of this action this button takes"
            @click="multilineDialogVisible=false">Create Account</ou-button>
          <ou-button
            type="compound"
            description="Description of this action this button takes"
            @click="multilineDialogVisible=false">Sign in</ou-button>
          <ou-button
            type="compound"
            description="Description of this action this button takes"
            @click="multilineDialogVisible=false">Settings</ou-button>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block
        :code="lgHeaderCode"
        title="Large Header Dialog">
        <ou-button @click="lgHeaderDialogVisible=true">Open Dialog</ou-button>
        <ou-dialog
          v-model="lgHeaderDialogVisible"
          type="lgHeader"
          title="All emails together"
          sub-text="Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.">
          <div slot="actions">
            <ou-button
              type="primary"
              @click="lgHeaderDialogVisible=false">Save</ou-button>
            <ou-button @click="lgHeaderDialogVisible=false">Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block
        :code="blockingCode"
        title="Blocking Dialog">
        <ou-button @click="blockingDialogVisible=true">Open Dialog</ou-button>
        <ou-dialog
          v-model="blockingDialogVisible"
          type="blocking"
          title="Unsaved changes"
          sub-text="Are you sure you want to discard these changes?">
          <ou-checkbox>Option 1</ou-checkbox>
          <ou-checkbox>Option 2</ou-checkbox>
          <div slot="actions">
            <ou-button
              type="primary"
              @click="blockingDialogVisible=false">Save</ou-button>
            <ou-button @click="blockingDialogVisible=false">Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
      <docs-code-block
        :code="closeCode"
        title="Close Dialog">
        <ou-button @click="closeDialogVisible=true">Open Dialog</ou-button>
        <ou-dialog
          v-model="closeDialogVisible"
          type="close"
          title="All emails together">
          <ou-checkbox>Option 1</ou-checkbox>
          <ou-checkbox>Option 2</ou-checkbox>
          <div slot="actions">
            <ou-button
              type="primary"
              @click="closeDialogVisible=false">Save</ou-button>
            <ou-button @click="closeDialogVisible=false">Cancel</ou-button>
          </div>
        </ou-dialog>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="dialogProps"
        type="props"
        name="Dialog" />
      <docs-table
        :data="dialogSlot"
        type="slot"
        name="Dialog" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/dialog/overview.md'
import defaultCode from '../markdown/dialog/defaultCode.md'
import multilineCode from '../markdown/dialog/multilineCode.md'
import lgHeaderCode from '../markdown/dialog/lgHeaderCode.md'
import blockingCode from '../markdown/dialog/blockingCode.md'
import closeCode from '../markdown/dialog/closeCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultDialogVisible: false,
      multilineDialogVisible: false,
      lgHeaderDialogVisible: false,
      blockingDialogVisible: false,
      closeDialogVisible: false,
      defaultCode,
      multilineCode,
      lgHeaderCode,
      blockingCode,
      closeCode,
      dialogProps: [
        { name: 'v-model', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'bind the visibility to the dialog' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'multiline, lgHeader, blocking, close', description: 'the type for the dialog' },
        { name: 'title', type: 'String', required: 'false', description: 'the title for the dialog' },
        { name: 'subText', type: 'String', required: 'false', description: 'the description for the dialog' }
      ],

      dialogSlot: [
        { name: 'actions', description: 'the content for the area of actions' }
      ]
    }
  }
}
</script>
