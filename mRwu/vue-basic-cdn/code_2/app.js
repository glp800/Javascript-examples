// 实例化 vue对象
new Vue({
    el: "#vue-app",
    data() {
        return {
            age: 20,
            x: 0,
            y: 0
        }
    },
    methods: {
        add(inc) {
            this.age += inc;
        },
        subtract(dec) {
            this.age -= dec;
        },
        updataXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        handleClick() {
            alert("阻止默认事件！");
        }
    }
});