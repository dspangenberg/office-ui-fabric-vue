## How to use svg-icons

Add vue-svgicon to your project:

```
  yarn add https://github.com/dspangenberg/vue-svgicon.git
```

Add new script to package.json. Don't forget to adjust source and destination path

```
  "icons": "vsvg -s node_modules/windows-10-icons/svg/production -t docs/icons"
```

Run script

```
  yarn run icons
```

Then in your main.js:

```
import OfficeUIFabricVue from '../src';
import svgicon from 'vue-svgicon';

const svgFiles = require.context('./icons/', false, /.*\.js$/);

Vue.use(OfficeUIFabricVue, {
  svgs: svgFiles
});

```
