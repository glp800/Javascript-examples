// 实例化 vue对象
new Vue({
    el: "#vue-app",
    data() {
        return {
            a: 0,
            b: 0,
            age: 32,
        }
    },
    methods: {
        // addToA() {
        //     return this.a + this.age;
        // },
        // addToB() {
        //     return this.a + this.age;
        // }
    },
    computed: {
        addToA() {
            console.log("addToA");
            return this.a + this.age;
        },
        addToB() {
            console.log("addToB");
            return this.b + this.age;
        }
    }
});