import { createApp } from 'vue';
import Dashboard from './compoennts/Dashboard.vue';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in marketing development context and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// If not then we are running through container,
// and we should export the mount function
export { mount };
