<template>

<section class="Cart">
    
    <div class="Cart-Container">
        <div class="Header">
            <h1 class="Shopping-Cart">SHOPPING CART</h1> 
            
        </div>

        <div >

              <!--CART OPTION2-->
              <div id="app3">
                
                <section class="products">
                    <div 
                    v-for="product in products"
                    :key="product.id"
                    class="product"
                    >
    
    
                      <!--VUE JS-->
                      <input type="checkbox" name="select-product">
                        <h3 class="cart-product-header">{{product.name}}</h3>
                        
                        <!--FOR IMAGE-->
                        <!-- <img 
                            src={{product.image}} style={{ height="120px" }}  
                            :alt="product.name" 
                            class="product-image"
                        > -->

                        <p class="cart-product-description">{{product.description}}</p>
                        
                        <div class="cart">
                            <button class="cart-button">-</button>
                            <span class="cart-quantity">{{product.quantity}}</span>
                            <button class="cart-button">+</button>
                        </div>

            </div>
            </section>

            <div class="cart-activity-option">
                    <button class="cart-button2"><router-link to="/checkout">Checkout Deals</router-link></button>
                    <a href="index.html"><img src="../assets/brand.jpg" width="40" alt="brand-logo" ></a>
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
                    id:"19708555531",
                    name: "SPY X FAMILY PILLOW PLUSHIE Anya Yor Loid Anya Heh",
                    description: "High quality pillow with Anya design",
                    quantity: "15"
                },
                {
                    id:"18308562708",
                    name: "MY DRESS UP DARLING PILLOW PLUSHIE Marin",
                    description: "High quality pillow with elegant design",
                    quantity: "125"
                },
            ],
        }
    }
}
</script>


<style>

.Cart{ 
    color: #2C3E50;
    animation: shakeX;
    animation-duration: 3s;
    background-image: url("../assets/cart-bg.png");
    background-size: cover;
    
}
  
.cart-button {
        background: none;
        border: 0;
        color: #ffffff;
        cursor: pointer;
    }
      
      
.total-quantity {
        align-items: center;
        background: #ffffff;
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
    flex-wrap: wrap;
    justify-content: center;
  }
    
.product {
      border: 1px solid lightgray;
      border-radius: 10px;
      margin: 2rem;
      padding: 1rem;
}

.cart-product-header {
        font-size: 2rem;
        text-align: center;
}
      
.product-image {
        display: block;
        margin: 1rem auto;
}
      
.product-description {
        font-size: 1.3rem;
        margin-top: 1rem;
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