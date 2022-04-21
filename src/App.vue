<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/example">Example</router-link>|
      <router-link to="/special-topics">Special Topics</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: { },
}
</script>

<style>

html {
  height: 100%;
  width: 100%;

}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;  

}

nav {
  text-align: center;
  padding: 30px;
  background-color: orange;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
