<template>
    <section class="Cart">
        <div class="Cart-Container">
            <div class="Header">
                <br><br><br><br><br><br><br><br><h1 class="Shopping-Cart">SHOPPING CART</h1>     
            </div>
            <div>
                <!--CART OPTION2-->
                <div id="app3">
                    <section class="products">
                    <CartItem v-for="product in products" v-bind:key="product.id2" :product="product"/>
                    </section>
        
                    <div class="cart-activity-option">
                        <button class="cart-button2"><NuxtLink to="/user/cart/checkout">Checkout Deals</NuxtLink></button>
                        <a href="../"><img src="../../../assets/img/brand.jpg" width="40" alt="brand-logo" ></a>
                        <button class="cart-button2">Remove Deals</button>
                    </div>
    
                </div>
            </div>
        </div>
    </section>
</template>
    
<script> 
export default{
    data(){
        return{
            products:[
            {
                id2:1,
                image: "../assets/img/product.jpg",
                id:"19708555531",
                name: "SPY X FAMILY PILLOW PLUSHIE Anya Yor Loid Anya Heh",
                description: "High quality pillow with Anya design",
                quantity: "15"
            },
            {
                id2:2,
                image: "../assets/img/product2.jpg",
                id:"18308562708",
                name: "MY DRESS UP DARLING PILLOW PLUSHIE Marin",
                description: "High quality pillow with elegant design",
                quantity: "125"
            },
            {
                id2:3,
                image: "../assets/img/product2.jpg",
                id:"18308562708",
                name: "MY DRESS UP DARLING PILLOW PLUSHIE Marin",
                description: "High quality pillow with elegant design",
                quantity: "125"
            },
            ],
        }
    },
}
</script>
    
    
<style>
    .Cart{ 
        color: #2C3E50;
        background-color: #FFFBEC;
    }

    .cart-button {
        background: none;
        border: 0;
        color: white;
        cursor: pointer;
    }

    .total-quantity {
        align-items: center;
        background: white;
        border-radius: 50%;
        display: flex;
        font-weight: bold;
        height: 2rem;
        justify-content: center;
        padding: 0.5rem;
        position: absolute;
        right: -10px;
        top: -10px;
        width: 2rem;
    }
    .products {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .cart-product-header {
            font-size: 2rem;
            text-align: center;
    }

    .cart {
        margin-top: 2rem;
        text-align: center;
    }
        
    .cart-button {
        background: #e95a85;
        border: 0;
        color: white;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        height: 2.5rem;
        width: 2.5rem;
    }
        
    .cart-quantity {
        font-size: 1.5rem;
        margin: 0 1rem;
    }
    
    
    .cart-button2{
        background: #f5b1c6;
        border: 0;
        color: white;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        height: 2.5rem;
        width: 7.5rem;
        font-family: 'Droid Serif',serif;
        border-spacing: 4px;
    }
    
    .cart-button2 a{
        text-decoration: none;
        color: white;
        font-size: 12px;
        font-weight: bold;
        font-family: 'Droid Serif',serif;
    }
    
    .cart-activity-option{
        display: flex;
        justify-content: center;
    }
</style>    