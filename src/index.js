import componentsInstaller from './install';
import fabric from '../lib/office-ui-fabric';
import svgicon from 'vue-svgicon';

const OfficeUIFabricVue = {
  install(Vue, options = {}) {
    Vue.prototype.$fabric = fabric;
    const svgs = options.svgs || null;

    /* eslint-disable */
    if (svgs !== null) {
      svgs.keys().forEach((key) => {
        if (key === './index.js') return;
        svgicon.register(svgs(key).default);
      });
    }
    componentsInstaller(Vue);
  }
};

export default OfficeUIFabricVue;
