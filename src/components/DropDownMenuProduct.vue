
<template>
    <div class="product_menu" @click="isOpen = !isOpen" >
        <a href ='#'>
            PRODUCT
        </a>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <div class="submenu_product" v-if="isOpen">
            <router-link to="/plushies">Plushies &emsp; &emsp; &emsp; &emsp;</router-link>
            <br><router-link to="/prints">Prints &emsp; &emsp; &emsp; &emsp;</router-link>
            <br><br><router-link to="/stationery">Stationery &emsp; &emsp; &emsp; &emsp;</router-link>
            <br><router-link to="/photocards">Photocards &emsp; &emsp; &emsp; &emsp;</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product_drop',
  props: ['title'],
  data () {
    return {
      isOpen: false,
      }
    }
}
</script>  

<style>
    .submenu_product {
        font-size: 90%;
        border: 10px solid lightpink;
        background-color: lightpink;
        width: 130px;
        height: 140px;
    }
</style>