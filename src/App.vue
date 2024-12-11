<template>
  <nav class="navbar" v-if="$route.meta.showSidebar">
    <div class="logo">
      <img style="height: 100px" src="./assets/utm_logo.png" alt="UTM Logo" />
    </div>
    <div class="nav-links">
      <a href="#"><router-link to="/">Home</router-link> </a>
      <a href=""><router-link to="/Login">Log in</router-link></a>
    </div>
  </nav>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
}
/* Navbar styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
}
.navbar img {
  height: 40px;
}
.navbar .nav-links {
  display: flex;
  gap: 20px;
}
.navbar .nav-links a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
</style>
