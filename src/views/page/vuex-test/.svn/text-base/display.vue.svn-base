<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>      platform: {{platform}}</h2>
  </div>
</template>

<script>

 
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      platform: '-'
    }
  },
   created () {
      this.platform = this.$store.getters.getApp;
     // console.log(this.$store.state.platform);
      console.log(this.$store.getters.doneTodos);

      this.$store.dispatch('testChangex', {"a":'子组件传的值sssss',age:10});
       console.log(this.$store.getters.doneTodos);
  }
}
</script>