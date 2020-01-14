// 实例化 vue对象
new Vue({
    el: "#vue-app",
    data() {
        return {
            todo: {
                title: '',
                completed: false
            },
            todos: []
        }
    },
    mounted() {
        // fetch api 请求接口 es6提供
        // axois.get("http://jsonplaceholder.typicode.com/todos").then(res => {
        //     // console.log(res);
        //     return res.json(); //返回到下一个then
        // }).then(todos => {
        //     console.log(todos);
        //     this.todos = todos;
        // })

        axios.get("http://jsonplaceholder.typicode.com/todos").then(res => {
            // console.log(res);
            this.todos = res.data;
        })
    },
    methods: {
        onSubmit() {
            // fetch("http://jsonplaceholder.typicode.com/todos", {
            //     method: "POST",
            //     body: JSON.stringify(this.todo),
            //     headers: {
            //         'content-type': 'application/json'
            //     }
            // }).then(res => {
            //     return res.json();
            // }).then(todo => {
            //     console.log(todo);
            //     this.todos.unshift(todo);
            // })
            axios.post("http://jsonplaceholder.typicode.com/todos", this.todo).then(res => {
                // console.log(res);
                this.todos.unshift(res.data);
            });
        }
    }
});