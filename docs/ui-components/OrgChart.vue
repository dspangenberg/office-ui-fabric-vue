<template>
  <docs-content title="OrgChart">
    <div
      slot="Overview"
      v-html="overviewContent"/>
    <div slot="Variants">
      <docs-code-block
        :code="defaultCode"
        title="Default OrgChart">
        <ou-org-chart>
          <ou-org-chart-group>
            <ou-org-chart-group-item>
              <ou-persona
                src="docs/assets/img/avatar.png"
                primary-text="Russel Miller"
                secondary-text="Sales" />
            </ou-org-chart-group-item>
            <ou-org-chart-group-item>
              <ou-persona
                src="docs/assets/img/avatar.png"
                primary-text="Douglas Fielder"
                secondary-text="Public Relations" />
            </ou-org-chart-group-item>
          </ou-org-chart-group>
          <ou-org-chart-group title="Manager">
            <ou-org-chart-group-item>
              <ou-persona
                src="docs/assets/img/avatar.png"
                primary-text="Grant Steel"
                secondary-text="Sales" />
            </ou-org-chart-group-item>
          </ou-org-chart-group>
          <ou-org-chart-group title="Staff">
            <ou-org-chart-group-item>
              <ou-persona
                src="docs/assets/img/avatar.png"
                primary-text="Harvey Wallin"
                secondary-text="Public Relations" />
            </ou-org-chart-group-item>
          </ou-org-chart-group>
        </ou-org-chart>
      </docs-code-block>
    </div>
    <div slot="Implementation">
      <docs-table
        :data="orgChartGroupProps"
        type="props"
        name="OrgChartGroup" />
      <docs-table
        :data="orgChartGroupItemEvents"
        type="events"
        name="OrgChartGroupItem" />
    </div>
  </docs-content>
</template>
<script>
import overviewContent from '../markdown/org_chart/overview.md'
import defaultCode from '../markdown/org_chart/defaultCode.md'

export default {
  data () {
    return {
      overviewContent,
      defaultCode,
      orgChartGroupProps: [
        { name: 'title', type: 'String', required: 'false', description: 'the title of the org chart group' }
      ],
      orgChartGroupItemEvents: [
        { name: 'click', description: 'the callback function when clicked the org chart group item' }
      ]
    }
  }
}
</script>
