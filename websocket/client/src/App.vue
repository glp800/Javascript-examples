<template>
	<div id="app">
		<!-- 路由匹配到的组件将渲染在这里 -->
		<router-view></router-view>
	</div>
</template>

<script>
	
export default {
	name: 'App',
	data() {
		return {
			username: '',
			userInfo: {}
		};
	},
	methods: {
		toggle(status) {
			this.$refs.login.toggleModel(status);
		}
	},
	mounted() {
		var _this = this;
		var storage = window.localStorage;
		var userInfo = {};
		if (storage.userInfo) {
			userInfo = JSON.parse(storage.userInfo);
			_this.username = userInfo.username;
		}
		if (_this.username == '') {
			_this.toggle(true);
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
