<template>
  <div
    ref="breadcrumb"
    class="ms-Breadcrumb">
    <div class="ms-Breadcrumb-overflow">
      <div class="ms-Breadcrumb-overflowButton ms-Icon ms-Icon--More"/>
      <div class="ms-Breadcrumb-overflowMenu">
        <ul class="ms-ContextualMenu"/>
      </div>
    </div>
    <ul class="ms-Breadcrumb-list">
      <slot />
    </ul>
  </div>
</template>
<script>
export default {
  name: 'OuBreadcrumb',
  mounted () {
    new this.$fabric.Breadcrumb(this.$refs.breadcrumb)
  }
}
</script>
