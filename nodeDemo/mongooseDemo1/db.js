// 引用mongoose
const mongoose = require('mongoose')
// 数据库连接
mongoose.connect('mongodb://localhost:27017/mongo-relation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 定义分类schema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String
    }
})

// 添加一个虚拟字段
CategorySchema.virtual('posts', {
    localField: '_id', //本地键
    ref: 'Post', //来源 参考的模型
    foreignField: 'categories', //外地键 Post里面的categories
    justOne: false //false 返回数组
}, {
    // 调用toJSON加虚拟字段
    toJSON: {
        virtual: true
    }
})

// 分类
const Category = mongoose.model('Category', CategorySchema)

// 建模 博客系统为例
//帖子
const Post = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    // 关联分类
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },
    // 关联多个分类
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
}))

async function main() {
    // const cats = await Category.find().populate('posts')
    const cats = await Category.find().populate('posts').lean()//.lean()输出纯粹的json对象
    // console.log(cats[1].posts)
    console.log(cats[1])

    // 插入多条
    // await Post.insertMany([{
    //     title: "第一篇帖子",
    //     body: "第一篇帖子的body部分，有很多内容and so on"        
    // },{
    //     title: "第二篇帖子",
    //     body: "第二篇帖子的body部分，有很多内容and so on"        
    // },{
    //     title: "第三篇帖子",
    //     body: "第三篇帖子的body部分，有很多内容and so on"        
    // },{
    //     title: "第四篇帖子",
    //     body: "第四篇帖子的body部分，有很多内容and so on"        
    // },{
    //     title: "第五篇帖子",
    //     body: "第五篇帖子的body部分，有很多内容and so on"        
    // }])

    // await Category.insertMany([
    //     { name: 'nodejs' },
    //     {name:'vuejs'}
    // ])
    // const cat = await Category.find()
    // console.log(cat)
    // 找分类
    // const cat1 = await Category.findOne({
    //     name: 'nodejs'
    // })
    // const cat2 = await Category.findOne({
    //     name: 'vuejs'
    // })
    // 找帖子
    // const post1 = await Post.findOne({title: '第一篇帖子'})
    // const post2 = await Post.findOne({title: '第二篇帖子'})
    // 设置分类
    // post1.categories = [cat1,cat2]
    // post2.categories = [cat2]
    // 保存分类
    // await post1.save()
    // await post2.save()
    // const posts = await Post.find().populate('categories') //populate查关联
    // console.log(posts[3])
}
main()