<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Buttons</router-link> |
      <router-link to="/dropdowns">Dropdowns</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import "@progress/kendo-licensing";
import "@progress/kendo-ui";
 import '@progress/kendo-theme-default/dist/all.css';
//import "./assets/styles/customTheme/kendo.custom.css";

export default {
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
