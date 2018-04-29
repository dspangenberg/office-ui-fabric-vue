<template>
  <div class="container">
    <h3 class="ms-font-l">{{ title }}</h3>
    <ou-table
      :data="data"
      default-value="--">
      <ou-table-column prop="name">Name</ou-table-column>
      <template v-if="type == 'props'">
        <ou-table-column prop="type">Type</ou-table-column>
        <ou-table-column prop="required">Required</ou-table-column>
        <ou-table-column prop="acceptedValue">Accepted Value</ou-table-column>
        <ou-table-column prop="defaultValue">Default Value</ou-table-column>
      </template>
      <ou-table-column
        v-if="type == 'events'"
        prop="params">Params</ou-table-column>
      <ou-table-column prop="description">Description</ou-table-column>
    </ou-table>
  </div>
</template>
<style scoped>
  .container {
    margin-bottom: 25px;
    overflow: auto;
  }

  .container table {
    min-width: 600px;
  }

  @media (max-width: 479px) {
    .container h3 {
      font-size: 14px;
    }
  }
</style>
<script>
import { strings, objects } from '../../src/mixins/props/defaults'
export default {
  mixins: [
    objects('data'),
    strings('name', 'type')
  ],
  computed: {
    title () {
      return `${this.name} ${this.type.charAt(0).toUpperCase() + this.type.slice(1)}`
    }
  }
}
</script>
