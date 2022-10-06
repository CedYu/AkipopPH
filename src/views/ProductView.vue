<template>
<br><br><br><br><br><br><br><br><br><br><br>
<section class="product-info">
    <!--SAMPLE PRODUCT INFO-->
    <div class="product-img">
        <img src="../assets/product.jpg"  style="width:100%">
        <img src="../assets/product2.jpg"  style="width:100%">
    </div>

    <div class="product-detail">
        <p>Product Name: Anya plushies</p> <!--Product Name-->
        <p>Description: a very very amazing plushies</p> <!--Product Description-->
        <p>Quantity: 50</p> <!--Product Quantity-->
        <p>Price: $64.66</p> <!--Product Price-->
    </div>

    <div class="action-button">
        <p><button>Add to Cart</button></p>
        <p><button><router-link to="/checkout">Checkout Deals</router-link></button></p>

    </div>

</section>

</template>

<style>
   
    .product-img{
        position: relative;
        max-width: 300px;
        margin: auto;
        
    }

    .product-detail{
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 20px;
    }

    .action-button button{
        border-radius: 12px;
        background-color: #e95a85;
        color:white;
    }
</style>
