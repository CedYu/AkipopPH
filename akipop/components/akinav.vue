<template>
  <div class="nav-container">
    <header>
      <nav class="aki-nav">
        <div class="nav-buttons">
          <NuxtLink to="/" id="nav-text">HOME</NuxtLink>
          <NuxtLink to="/about" id="nav-text">ABOUT</NuxtLink>
          <div class="dropdown" id="nav-text">
            <DropDownMenuProduct title="Product"/>
          </div> 
          <div class="logo">
            <NuxtLink to="/"><img src="../assets/img/logo.jpg" width="96" alt="brand-logo" /></NuxtLink>
          </div>
          <div class="cart-button" id="right-side">
            <NuxtLink to="/user/cart" id="nav-image"><img src="../assets/img/cart_image.png" width="40" height="40" alt="cart image"></NuxtLink>
          </div>
          <div class="dropdown" id="right-side">
            <DropdownMenuAccount title="Account"/>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
  const supabase = useSupabaseClient()
  const logout = async() =>{const {error} = await supabase.auth.signOut()}
</script>

<style scoped>
.nav-container{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: -10px -10px;
  font-size: 110%;
  width: 1000px;
  height: 10px;
}

.aki-nav{
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #e95a85;
  top: 0%;
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 12%;
  align-content: center;
}

.nav-buttons{
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
}

#nav-text{
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  font-size: 110%;
  position: relative;
  left: 25%;
}
.logo{
  margin-left: 32%;
}

.dropdown{
  position: relative;
  padding: 5px;
}

#right-side{
  position: relative;
  left: 35%;
}
</style>
