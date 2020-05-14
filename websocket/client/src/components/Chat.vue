<template>
	<div class="chat-container">
		<ul id="msg">
			<li v-for="(msg, i) in msglist" class="msg-list" :class="msg.type == 1 ? 'self-msg' : 'other-msg-list'" :key="i">
				<div class="user-head" v-if="msg.type != 1"><img src="../../static/img/8.jpg" /></div>
				<div class="user-info">
					<div class="username">{{ msg.name }}</div>
					<div class="msg-desc">
						<div class="triangle"></div>
						<div class="msg-inside">{{ msg.text }}</div>
					</div>
				</div>
				<div class="user-head" v-if="msg.type == 1"><img src="../../static/img/8.jpg" /></div>
			</li>
		</ul>
		<div class="footer-bar">
			<textarea value="" placeholder=""  v-model="msg.text"/>
			<!-- <input type="text" v-model="msg.text" /> -->
			<!-- <div class="send-btn" @click="sendMsg">发送</div> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'Chat',
	data() {
		return {
			msglist: [],
			avatar:'',
			msg: {
				name: '',
				type: '1',
				text: ''
			}
		};
	},
	created() {
		// this.msg.name=window.localStorage.model.username||'';
		var _this = this;
		var storage=window.localStorage;
		var userInfo={}
		if (storage.userInfo) {
			userInfo=JSON.parse(storage.userInfo)
			_this.msg.name =userInfo.username;
		}
		document.onkeydown = function(e) {
			var key = window.event.keyCode||window.event.which;
			if (key == 13) {
				_this.sendMsg();
				e.preventDefault();
			}
		};
	},
	methods: {
		sendMsg() {
			let currentMsg = { ...this.msg };
			if(currentMsg.text==''){
				return false;
			}
			this.msglist.push(currentMsg);
			this.$nextTick(function() {
				this.scrollBottom();
			});
			this.msg.text="";
		},
		scrollBottom() {
			var el = document.getElementById('msg');
			var chat = document.querySelector('.chat-container');
			chat.scrollTop = el.scrollHeight;
		},
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.chat-container
	height 100vh
	box-sizing border-box
	position relative
	overflow auto
	padding-bottom 44px
	background-color #f3f2f2
	padding-top 20px
	overflow-y scroll
	overflow-x hidden
	ul
		display block
.user-head
	width 36px
	height 36px
	border-radius 5px
	overflow hidden
	margin 5px 10px 0
	flex-shrink 0
	img
		width 100%
		height 100%
		object-fit cover
.username
	display block
	font-size 12px
	color #aaa
.user-info
	display flex
	flex-direction column
	align-items flex-start
	width 100%
	position relative
.msg-list
	width 100%
	position relative
	display flex
	padding-bottom 20px
	.triangle
		width 10px
		height 10px
		left 0
		top 10px
		z-index 1
		background-color #FFFFFF
		transform rotate(45deg) translateX(-50%)
		position absolute
		box-shadow 0 0 3px 0 rgba(111, 111, 111, 0.3)
.other-msg-list
	justify-content flex-start
.self-msg
	justify-content flex-end
	.user-info
		align-items flex-end
	.triangle
		width 10px
		height 10px
		left auto
		right 0
		top 3px
		z-index 1
		background-color #FFFFFF
		transform rotate(45deg) translateX(50%)
		position absolute
		box-shadow 0 0 3px 0 rgba(111, 111, 111, 0.3)
.msg-desc
	border-radius 5px
	padding 0
	max-width 80%
	background-color #ffffff
	width auto
	height auto
	font-size 0
	line-height 0
	position relative
	margin-top 3px
	box-shadow 0 0 3px 0 rgba(111, 111, 111, 0.3)
.msg-inside
	background-color #ffffff
	padding 5px 10px
	border-radius 5px
	width auto
	height auto
	text-align left
	word-break break-all
	word-wrap break-word
	position relative
	position relative
	overflow hidden
	line-height 1.6
	font-size 15px
	z-index 2
.footer-bar
	width 100%
	height auto
	padding 10px
	background-color #FFFFFF
	display flex
	position fixed
	z-index 9999
	left 0
	bottom 0
	align-items center
	box-sizing border-box
	input
		margin 0
		padding 3px
		flex-grow 1
		height 36px
		border none
		border-radius 5px
		background-color transparent
	textarea
		margin 0
		padding 3px
		flex-grow 1
		height 36px
		border none
		border-radius 5px
		background-color transparent
		background-color #F2F2F2
	.send-btn
		width 60px
		background-color #F2F2F2
		height 32px
		margin 0 10px
		display inline-flex
		align-items center
		justify-content center
		border-radius 5px
		font-size 14px
#msg
	padding-bottom 20px
	
</style>
