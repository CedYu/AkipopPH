<template>
  <div class="nav-container">
    <header>
      <nav class="aki-nav">
        <div class="nav-buttons">
          <div class="left-side">
            <NuxtLink to="/" id="nav-text">HOME</NuxtLink>
            <NuxtLink to="/about" id="nav-text">ABOUT</NuxtLink>
            <div class="dropdown" id="nav-text">
              <DropDownMenuProduct title="Product"/>
            </div>
          </div>
          <div class="logo">
            <NuxtLink to="/"><img src="../assets/img/logo.jpg" width="96" alt="brand-logo" /></NuxtLink>
          </div>
          <div class="right-side">
            <div class="cart-button" id="right-side">
              <NuxtLink to="/user/wishlist"><img src="../assets/img/cart_image.png" alt="cart image" id="nav-image"></NuxtLink>
            </div>
            <div class="dropdown" id="right-side">
              <DropdownMenuAccount title="Account"/>
            </div>
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
  position: absolute;
  z-index: 10;
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
  z-index: 10;
}

.nav-buttons{
  display: inline-flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 10;
}

#nav-text{
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 30px;
  font-size: 130%;
  position: relative;
  left: 15%;
  z-index: 10;
}
.logo{
  position:absolute;
  left:47%;
  z-index: 10;
}

.dropdown{
  position: relative;
  padding: 5px;
  z-index: 10;
}

.left-side{
  position:relative;
  display: inline-flex;
  left: 2%;
}

.right-side{
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 7%;
  padding: 10px;
  z-index: 10;
}

#nav-image{
  position: relative;
  width: 40px;
  height: 40px;
  z-index: 10;
}
</style>
