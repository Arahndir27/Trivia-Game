<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link>  |
      <router-link to="/about">About</router-link>  |
      <router-link to="/suggestions">Feedback</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  background-color: azure;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #002447;
}

/* nav a.router-link-exact-active {
  color: #3ff0f0;
} */
</style>
