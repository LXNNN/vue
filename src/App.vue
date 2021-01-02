<template>
  <div id="app">
    <h1>vue project</h1>
     <router-link to="/" exact>Go to HelloWorld</router-link>
     <router-link to="/watch">Go to watch</router-link>
     <router-link to="/alive">Go to keep-alive</router-link>
     <router-link to="/router/lixn">Go to router1</router-link>
     <router-link to="/router/yushuai">Go to router2</router-link>
     <router-link :to="{ name: 'RouterDemo', params: { id: 'lixn' }}">router1 for name</router-link>
     <router-link to="/haha">Not Find</router-link>
     <hr />
    <!-- 路由显示位置 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
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
._active{
  background-color : yellowgreen;
}
</style>
