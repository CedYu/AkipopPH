<template>
    <div id="app">
      <nav>
        <div id="logo">
          <router-link to="/"><img src="../akipop.jpg" width="96" alt="brand-logo"> &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;</router-link> 
        </div>
  
        <div id="navbar">
          <router-link to="/">Prodcut &emsp; &emsp; &emsp; &emsp;</router-link>    
          <router-link to="/about">ABOUT &emsp; &emsp; &emsp; &emsp;</router-link> 
        </div>
  
        <div id="dropdown_product">
            <!--Dropdown: Unship, Ready To Ship, SHipped , COmpleted -->
          <DropdownMenuProduct title="Order"/>
        </div>       
          
        <div id="navbar_cart">
          <router-link to="/cart">Voucher &emsp; &emsp; &emsp; &emsp;</router-link>
        </div>

        <div id="navbar_cart">
          <router-link to="/cart">Edit Home Banner &emsp; &emsp; &emsp; &emsp;</router-link>
        </div>

      </nav>
    <router-view/>
    </div>
  </template>
  
  <script>
    import DropdownMenuOrder from '@/components/DropdownMenuOrder.vue';
    
    export default {
    name: 'app',
    components: {
      DropdownMenuOrder,
      
  }
  }
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
    margin: auto;
    position: fixed;
    top: 0;
    width: 100%;
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
    margin: -20px 0 0 870px;
    position: fixed;
  }
  
  #dropdown_product {
    font-size: 110%;
    margin: -20px 0 0 550px;
    position: fixed;
  }
  
  </style>