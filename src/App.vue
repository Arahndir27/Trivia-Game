<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link>  |
      <router-link to="/about">About</router-link>  |
      <router-link to="/suggestions">Feedback</router-link>
    </nav>
    <router-view/>
    <div class="footer">
    <div class="footerItem">
      <a href="https://github.com/Arahndir27/Trivia-Game.git">
        <img
          alt="Github logo"
          src="@/assets/github.png"
          width="70"
          height="75"
        />
      </a>
    </div>
  </div>
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

.footer {
    /*background-color: rgb(99, 0, 133);*/
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /*position: absolute;*/
    bottom: 0 !important;
    background-color: #1d56f2;
}

.footerItem {
    color: #ffffff;
    font-size: larger;
    margin-left: 7px;
    margin-right: 7px;
}
</style>
