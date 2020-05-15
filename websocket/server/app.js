const express = require('express')
const app = express()
const port = 7788

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)

const server = require('http').createServer(app);
const io = require('socket.io')(server);
// socket服务器监听连接 表示已经建立连接
io.on('connection', (socket) => {
	// 向客户端发事件消息
	// socket.emit('request', /* … */); 
	// 向所有客户端发送消息
	// io.emit('broadcast', /* … */); 
	// setInterval(function(){
	// 	io.emit('msg', 'hello world'+(new Date()));
	// },1000)
	socket.on('send', (_obj) => {
		io.emit('msg', _obj);
		// console.log(_obj)
	});
	socket.on('reply', (_obj) => {
		console.log(_obj)
	});
});


// server.listen(port);

app.get('/', (req, res) => res.send('你在想peach！！！'))

// // 静态文件中间件
// app.use(express.static(__dirname+'/static'))

// // 发送文件 发送一个页面回去
// app.get('/chat',function(req,res){
// 	res.sendFile(__dirname+'/view/1.html')
// })


server.listen(port, () => console.log(`Example app listening on port ${port}!`))
