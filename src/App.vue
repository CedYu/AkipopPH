<template>
  <nav>
    <router-link to="/about"><img src="../akipop.jpg" width="96" alt="brand-logo"> &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;</router-link> 
    <router-link to="/home">Home &emsp; &emsp; &emsp; &emsp;</router-link>    
    <router-link to="/about">About &emsp; &emsp; &emsp; &emsp;</router-link>    
    <router-link to="/cart">Cart &emsp; &emsp; &emsp; &emsp;</router-link>    
    <router-link to="/product">Product &emsp; &emsp; &emsp; &emsp;</router-link> 
    <router-link to="/register">Register &emsp; &emsp; &emsp; &emsp;</router-link>
    <router-link to="/login">Log In &emsp; &emsp; &emsp; &emsp;</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin: -10px -10px;
}
nav {
  padding: 20px;
  background-color: #e95a85;
  margin: auto;
  max-width: 100%;
}
nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #f7c7c7;
}
</style>