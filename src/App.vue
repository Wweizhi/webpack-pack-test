<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <el-row>
      <el-button type="primary" >open single-contract</el-button>
      <el-button type="primary" >open multi-contract</el-button>
    </el-row>
    <!--<test-app></test-app>-->
  </div>
</template>

<script>
  // import {TestApp} from 'testmodule'

import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    // TestApp
  },
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
