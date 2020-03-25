<template>
  <div id="app">
    <form action="" @submit.prevent="login">
      <input type="text" v-model="mobile">
      <input type="password" v-model="password">
      <button type="submit" :disabled="!isVaild">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      password: ""
    };
  },
  computed: {
    isVaild(){
      return String(this.mobile).match(/^1\d{10}$/)&&String(this.password).length>=6
    }
  },
  methods: {
    login() {
      console.log(this.mobile);
    }
  }
};
</script>

<style>
body {
  background-color: #f2f2f2;
}
input {
  margin: 10px auto;
  display: block;
  width: 280px;
  height: 32px;
}
button {
  margin: 0 auto;
  display: block;
  width: 120px;
  height: 30px;
}
input:focus {
  outline: none;
}
</style>
