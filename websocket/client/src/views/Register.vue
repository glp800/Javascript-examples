<template>
	<div class="login">
		<van-form @submit="onSubmit">
			<van-field maxlength="6" :required="true" :clearable="true" :border="true" :show-word-limit="true" v-model="model.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
			<van-field maxlength="12" :required="true" :clearable="true" :border="true" :show-word-limit="true" v-model="model.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
			<van-field maxlength="12" :required="true" :clearable="true" :border="true" :show-word-limit="true" v-model="rPassword" type="password" name="确认密码" label="确认密码" placeholder="确认密码" :rules="[{ required: true, message: '请再次填写密码' }]" />
			<div class="choose-avatar">
				<div class="title">头像选择</div>
				<div class="avatar-list" v-for="(a, i) in avatar" :key="i" :class="model.curAvatar == a.name ? 'active' : ''" @click="chooseAvatar(a.name)">
					<img :src="a.avatar" />
					<!-- <img src="@/static/img/8.jpg"/> -->
				</div>
			</div>
			<div style="margin: 30px 0 0;"><van-button block type="info" native-type="submit">注册</van-button></div>
		</van-form>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			avatar: [
				// {
				// 	avatar: require('../../static/img/8.jpg'),
				// 	name: '8'
				// },
				{
					avatar: '../../static/img/8.jpg',
					name: '8'
				},
				{
					avatar: '../../static/img/7.jpg',
					name: '7'
				},
				{
					avatar: '../../static/img/6.jpg',
					name: '6'
				},
				{
					avatar: '../../static/img/5.jpg',
					name: '5'
				},
				{
					avatar: '../../static/img/4.jpg',
					name: '4'
				},
				{
					avatar: '../../static/img/3.jpg',
					name: '3'
				},
				{
					avatar: '../../static/img/2.jpg',
					name: '2'
				},
				{
					avatar: '../../static/img/1.jpg',
					name: '1'
				}
			],
			model: {
				username: '',
				password: '',
				curAvatar: 3
			},
			rPassword:'',
			showModel: false
		};
	},
	methods: {
		onSubmit() {
			var _this = this;
			var storage = window.localStorage;
			if (_this.model.username != '') {
				storage.setItem('userInfo', JSON.stringify(_this.model));
				_this.toggleModel(false);
			} else {
				alert('用户名不能为空！');
			}
		},
		toggleModel(_status) {
			this.showModel = _status;
		},
		chooseAvatar(i) {
			this.model.curAvatar = i;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
	min-height: 100vh;
	padding: 30px 15px;
	box-sizing: border-box;
	background-color: #f2f2f2;
}
.choose-avatar {
	width: 100%;
	background-color: #ffffff;
}
.title {
	text-align: left;
	display: block;
	width: 100%;
	margin-bottom: 10px;
}
.choose-avatar {
	padding: 10px 0 10px 10px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
	margin-right: -50px;
}
.avatar-list {
	width: 50px;
	height: 50px;
	overflow: hidden;
	border-radius: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
	border: 2px solid transparent;
	box-sizing: border-box;
}
.avatar-list.active {
	border-color: #ff5148;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
}
.avatar-list img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
