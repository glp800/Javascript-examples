import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { Button,Form ,Field  } from 'vant';

Vue.use(Button).use(Form ).use(Field )


new Vue({
  render: h => h(App)
}).$mount("#app");
