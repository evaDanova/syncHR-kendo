<template>

  <div id="app">
    <my-header></my-header>
    <div class="main-container-width ">
    <div id="nav">
      <router-link to="/"> Forms</router-link> |
      <router-link to="/card"> Card</router-link> | 
      <router-link to="/dialog"> Dialog</router-link> |
       <router-link to="/table"> Table</router-link>
    </div>
    
    <router-view/>
  </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import "@progress/kendo-licensing";
import "@progress/kendo-ui";

 // add default-custom-theme
//import "./assets/styles/customTheme/syncHr.css";

  // add bootstrap and bootstrap-custom-theme
import "@progress/kendo-theme-bootstrap/dist/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/customTheme/syncHRbootstrap.css";

 // add main global custom css
import "./assets/styles/customTheme/style.css";

// add header
import Header from './components/Header.vue';


export default {
      components:{
         'my-header':Header,
         
     },
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
