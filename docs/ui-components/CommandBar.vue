<template>
  <docs-content title='CommandBar'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default CommandBar' :code='defaultCode'>
        <ou-command-bar>
          <template slot='main'>
            <ou-search-box type='commandBar' placeholder='Search' />
            <ou-command-button icon='CircleRing'>Command</ou-command-button>
            <ou-contextual-menu>
              <ou-command-button icon='CircleRing' type='dropdown'>New</ou-command-button>
              <div slot='list'>
                <ou-contextual-menu-item name='Animals' />
                <ou-contextual-menu-item name='Books' />
                <ou-contextual-menu-item name='Education' />
                <ou-contextual-menu-item name='Music' />
                <ou-contextual-menu-item name='Sports' disabled />
              </div>
            </ou-contextual-menu>
            <ou-command-button icon='CircleRing'>Command</ou-command-button>
            <ou-command-button icon='CircleRing'>Command</ou-command-button>
            <ou-command-button icon='CircleRing'>Command</ou-command-button>
          </template>
          <template slot='side'>
            <ou-command-button icon='CircleRing' type='noLabel'></ou-command-button>
          </template>
        </ou-command-bar>
      </docs-code-block>
      <docs-code-block title='Navbar CommandBar' :code='defaultCode'>
        <ou-command-bar>
          <template slot='main'>
            <ou-search-box type='commandBar' placeholder='Search' />
            <ou-contextual-menu :hasIcons="true" >
              <ou-command-button  :pivot="true" :active="true" type='dropdown'>All Photos</ou-command-button>
              <div slot='list'>
                 <ou-contextual-menu-item icon="cat-footprint" icon-type="svg" name='Animals' />
                  <ou-contextual-menu-item icon="library" icon-type="svg"  name='Books' />
                  <ou-contextual-menu-item icon="puzzle" icon-type="svg" name='Education' />
                  <ou-contextual-menu-item icon="music" icon-type="svg" name='Music' />
                  <ou-contextual-menu-item icon="trophy" icon-type="svg" name='Sports' disabled />
              </div>
            </ou-contextual-menu>
            <ou-command-button pivot="true">Albums</ou-command-button>
            <ou-command-button pivot="true">Tags</ou-command-button>
            <ou-command-button pivot="true">Places</ou-command-button>
            <ou-command-button pivot="true">People</ou-command-button>
          </template>
          <template slot='side'>
            <ou-command-button icon='CircleRing' type='noLabel'></ou-command-button>
          </template>
        </ou-command-bar>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='slot' :data='commandBarSlot' name='CommandBar' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/command_bar/overview.md';
  import defaultCode from '../markdown/command_bar/defaultCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        commandBarSlot: [
          { name: 'main', description: 'the main area of the command bar' },
          { name: 'side', description: 'the side area of the command bar' }
        ]
      };
    }
  };
</script>
