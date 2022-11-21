<template>
  <div class="product">
                        <!--VUE JS-->
                        <input type="checkbox" name="select-product">
                        <h3 class="cart-product-header">{{product.name}}</h3>
                        <!--FOR IMAGE-->
                        <!-- <img 
                            src={{product.image}} style={{ height="120px" }}  
                            :alt="product.name" 
                            class="product-image"
                        > -->
                        <div class="cart">
                            <button class="cart-button">-</button>
                            <span class="cart-quantity">{{product.quantity}}</span>
                            <button class="cart-button">+</button>
                        </div>
                    </div>
</template>

<script>
export default{
  props:{
    product:{
      type:Object,
    }
  }
}
</script>

<style scoped>   
    .product {
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: 1%;
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
            /* font-size: 1.3rem;
            margin-top: 1rem; */
    }
</style>