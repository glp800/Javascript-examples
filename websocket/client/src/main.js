import Vue from "vue";
import App from "./App";
import router from './router/router'

import {
	Button,
	Form,
	Field
} from 'vant';

Vue.config.productionTip = false;
Vue.use(Button).use(Form).use(Field)


new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
