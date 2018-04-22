import Home from './components/Home.vue';
import GetStarted from './components/GetStarted.vue';
import ChangeLog from './components/ChangeLog.vue';
import AllUIComponents from './ui-components';

export default function (VueRouter) {
  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/GetStarted', name: 'GetStarted', component: GetStarted },
    { path: '/ChangeLog', name: 'ChangeLog', component: ChangeLog }
  ];

  Object.keys(AllUIComponents).forEach((componentName) => {
    routes.push({
      path: `/components/${componentName}`,
      name: `components-${componentName}`,
      component: AllUIComponents[componentName]
    });
  });

  return new VueRouter({
    routes
  });
}
