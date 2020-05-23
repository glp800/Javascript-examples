import Vue from "vue";
import Router from 'vue-router'
import Chat from "../views/Chat";
import Login from "../views/Login";
import Register  from "../views/Register";

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/',
		name: 'Chat',
		component: Chat
	}, {
		path: '/Login',
		name: 'Login',
		component: Login
	},{
		path: '/Register',
		name: 'Register',
		component: Register
	}]
})

export default router
