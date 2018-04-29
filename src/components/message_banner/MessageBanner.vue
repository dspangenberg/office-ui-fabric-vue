<template>
  <div
    ref="messageBanner"
    class="ms-MessageBanner">
    <div class="ms-MessageBanner-content">
      <div class="ms-MessageBanner-text">
        <div class="ms-MessageBanner-clipper"><slot /></div>
      </div>
      <button class="ms-MessageBanner-expand">
        <i class="ms-Icon ms-Icon--ChevronDown"/>
      </button>
      <div class="ms-MessageBanner-action">
        <slot name="actions" />
      </div>
    </div>
    <button class="ms-MessageBanner-close">
      <i class="ms-Icon ms-Icon--Clear"/>
    </button>
  </div>
</template>
<script>
export default {
  name: 'OuMessageBanner',

  mounted () {
    new this.$fabric.MessageBanner(this.$refs.messageBanner)
  }
}
</script>
