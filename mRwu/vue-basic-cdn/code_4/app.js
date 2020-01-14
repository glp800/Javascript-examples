// 实例化 vue对象
new Vue({
    el: "#vue-app",
    data() {
        return {
            name: "",
            age: 32
        }
    },
    methods: {
        getName() {
            // console.log(this.$refs.name.value);
            // 获取输入的名字
            this.name = this.$refs.name.value;
        },
        getAge() {
            this.age = this.$refs.age.value;
        }
    },
    // 不建议使用比较耗费性能 用来调试比较好
    watch: {
        name(val, oldVal) {
            console.log(val, oldVal);
        },
        age(val, oldVal) {
            console.log(val, oldVal);
        }
    }
});