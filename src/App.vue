<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/suggestions" class="nav-item">Feedback</router-link>
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

body {
  margin: 0;
  padding: 0;
  height: 100%;
}


.nav {
  background-color: #0077e6;
  padding: 30px;
  color: black;
  font-weight: bold;
  text-align: center;
}
.nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
.nav a:hover {
  color: rgb(187, 255, 255);
}
.nav-item {
  padding: 10px;
}


.footer {
    /*background-color: rgb(99, 0, 133);*/
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /*position: absolute;*/
    bottom: 0 !important;
    background-color: #0077e6;
}
.footerItem {
    color: #ffffff;
    font-size: larger;
    margin-left: 7px;
    margin-right: 7px;
}
</style>
