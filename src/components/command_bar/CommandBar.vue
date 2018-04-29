<template>
  <div
    ref="commandBar"
    class="ms-CommandBar">
    <div class="ms-CommandBar-sideCommands">
      <slot name="side" />
    </div>
    <div class="ms-CommandBar-mainArea">
      <slot name="main" />
      <div class="ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel">
        <button class="ms-CommandButton-button">
          <span class="ms-CommandButton-icon"><i class="ms-Icon ms-Icon--More"/></span>
          <span class="ms-CommandButton-label"/>
        </button>
        <ul class="ms-ContextualMenu is-opened ms-ContextualMenu--hasIcons">
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link"/>
            <i class="ms-Icon ms-Icon--folder"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OuCommandBar',
  props: {
    svgSize: {
      type: Number,
      default: 24
    }
  },
  mounted () {
    new this.$fabric.CommandBar(this.$refs.commandBar)
  }
}
</script>
