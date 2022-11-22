
<template>
    <div class="product_menu" @mouseover="isOpen=true" @mouseleave="isOpen=false" >
        <NuxtLink to="/products" id="title">
            PRODUCT
        </NuxtLink>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <div class="submenu_product" v-if="isOpen">
            <NuxtLink to="/products" id="thing">All &emsp; &emsp; &emsp; &emsp;</NuxtLink>
            <br><NuxtLink to="/products/Plushies" id="thing">Plushies &emsp; &emsp; &emsp; &emsp;</NuxtLink>
            <br><NuxtLink to="/products/Prints" id="thing">Prints &emsp; &emsp; &emsp; &emsp;</NuxtLink>
            <br><NuxtLink to="/products/Ptationery" id="thing">Stationery &emsp; &emsp; &emsp; &emsp;</NuxtLink>
            <br><NuxtLink to="/products/Photocards" id="thing">Photocards &emsp; &emsp; &emsp; &emsp;</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "product_drop",
    props: ["title"],
    data() {
        return {
            isOpen: false,
        };
    },
    methods:{
        
    }
}
</script>  

<style>
    .submenu_product {
        border: 10px solid lightpink;
        background-color: lightpink;
        width: 130px;
        height: auto;
        position:fixed;
    }

    #thing {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }

    #title{
        color: white;
        font-weight: bold;
        text-decoration: none;
    }
</style>