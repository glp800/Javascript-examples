// 实例化 vue对象
new Vue({
    el: "#vue-app",
    data() {
        return {
            changeColor: false,
            changeLength: false
        }
    },
    methods: {},
    computed: {
        compClasses() {
            return {
                'change-color': this.changeColor,
                'change-length': this.changeLength
            }
        }
    }
});