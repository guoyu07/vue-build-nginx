<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'element-ui/lib/theme-default/index.css'
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
