<template>
  <div id="app">
  <header>
  <nav>
    <div id="logo">
        <NuxtLink to="/"><img src="../assets/img/akipop.jpg" width="96" alt="brand-logo"> &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;</NuxtLink> 
    </div>
    <div id="navbar">
        <NuxtLink to="/">HOME &emsp; &emsp; &emsp; &emsp;</NuxtLink>    
        <NuxtLink to="/about">ABOUT &emsp; &emsp; &emsp; &emsp;</NuxtLink> 
    </div>
    <div id="dropdown_product">
      <DropDownMenuProduct title="Product"/>
    </div>       
    <div id="navbar_cart">
      <NuxtLink to="/cart">CART &emsp; &emsp; &emsp; &emsp;</NuxtLink>
    </div>
    <div id="dropdown_account">
      <DropdownMenuAccount title="Account"/> 
    </div>
  </nav>
  </header>
  </div>
</template>

<script setup>

</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: -10px -10px;
}

nav {
  padding: 20px;
  background-color: #e95a85;
  position: fixed;
  top: 0;
  width: 110%;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #f7c7c7;
}

#logo {
  margin: 0 0 0 50px;
}

#navbar {
  margin:-23px 0 0 260px;
  font-size: 110%;
}

#navbar_cart {
  margin:-23px 0 0 730px;
  font-size: 110%;
}

#dropdown_account {
  font-size: 110%;
  margin: -23px 0 0 870px;
  position: fixed;
}

#dropdown_product {
  font-size: 110%;
  margin: -23px 0 0 550px;
  position: fixed;
}
</style>
