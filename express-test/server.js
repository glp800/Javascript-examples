const express = require('express')

const app = express()
app.use(require('cors')())

// 静态文件托管 '/static'可以不定义
// app.use('/static',express.static('public'))
app.use(express.static('public'))

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send([{
        user: 'Johnny'
    }])
})
app.get('/products', function (req, res) {
    res.send([{
        title: 'product A',
        id: 1
    }, {
        title: 'product B',
        id: 2
    }, {
        title: 'product C',
        id: 3
    }, {
        title: 'product D',
        id: 4
    }])
})
app.listen(3000, () => {
    console.log("App listening on port 3000!")
})