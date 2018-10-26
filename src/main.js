import Vue from 'vue';
// import ElementUI from 'element-ui';
import { Row, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


import App from './App.vue';

Vue.config.productionTip = false;
// Vue.use(ElementUI);


Vue.use(Button)
Vue.use(Select)

new Vue({
  render: h => h(App),
}).$mount('#app');
