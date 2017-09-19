<template>
  <div id="app">
    <!--<img src="./images/logo.png">-->
    <hello></hello>
  </div>
</template>

<script>
//import 'common/css/reset.css';
  import Hello from './display'

  export default {
    name: 'app',
    components: {
      Hello
    },
    created(){
        let u = navigator.userAgent;

        if ( u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 ) {
          this.$store.dispatch('setApp', 'android');
        } else if ( !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ) {
          this.$store.dispatch('setApp', 'ios');
        }else{
          this.$store.dispatch('setApp', 'PC');
        }
        console.log(this.$store.state.platform);
    },
    mounted(){
       console.log('父组件调用:'+this.$store.getters.doneTodos);  //这个是子组件created 里修改的
     
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>