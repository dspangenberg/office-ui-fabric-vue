<template>
  <li class="ms-OrgChart-listItem">
    <button
      class="ms-OrgChart-listItemBtn"
      @click="clickEvent"><slot /></button>
  </li>
</template>
<script>
export default {
  name: 'OuOrgChartGroupItem',

  methods: {
    clickEvent () {
      this.$emit('click')
    }
  }
}
</script>
