// 实例化 vue对象
new Vue({
    el: "#vue-app",
    data() {
        return {
            name: "米斯特吴",
            wechat: "2913626209",
            website: 'https://www.baidu.com',
            websiteTag: ' <a href="https://www.taobao.com">淘宝</a>'
        }
    },
    methods: {
        // 第一种方法
        // greet: function () {
        //     return "Good night" + this.name;
        // }
        // 第二种方法
        greet(time) {
            return `Good ${time} ${this.name}`;
        },
        haveLunch() {
            return `吃过午饭了嘛？`
        }

    }
});