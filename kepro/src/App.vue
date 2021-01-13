<template>
  <div id="app">
      <router-link to="/" tag="p" class="nav">KGC技术博客</router-link> 
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("/utils.css");
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  padding-bottom: 400px;
}
.nav{
  padding-left: 10px;
  width: 100%;
  line-height: 50px;
  background: #f8f8f8;
  color: #555;
  text-align: left;
}

</style>
