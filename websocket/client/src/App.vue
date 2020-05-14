<template>
	<div id="app">
		<Chat v-if="username != ''" />
		<login ref="login" />
	</div>
</template>

<script>
import Chat from './components/Chat.vue';
import Login from './components/Login.vue';

export default {
	name: 'App',
	components: {
		Chat,
		Login
	},
	data() {
		return {
			username: '',
			userInfo:{}
		};
	},
	mounted() {
		var _this = this;
		var storage = window.localStorage;
		var userInfo={}
		if (storage.userInfo) {
			userInfo=JSON.parse(storage.userInfo)
			_this.username =userInfo.username;
		}
		if (_this.username=='') {
			_this.toggle(true);
		}
	},
	methods: {
		toggle(status) {
			this.$refs.login.toggleModel(status);
		}
	}
};
</script>

<style>
body {
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
