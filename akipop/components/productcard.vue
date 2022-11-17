<template>
  <br><br><br><br><br><br><br><br><br><br>
  <h1>Photocards</h1>
  
  <!--SAMPLE WITHOUT SCRIPT-->
  <div class="mainProduct">
  
    <img src="../assets/product.jpg" alt="Denim Jeans" style="width:100%">
  
    <p>Anya Photocards</p>
    <p class="price">$14.66</p>
    <p>a very very amazing card</p>
    <p>50</p>
    <p><button>Add to Cart</button></p>
    <p><button><router-link to="/product">See More Details</router-link></button></p>
  </div>
  
  <!--WITH SCRIPT-->
  <!-- <div v-for="mainProduct in mainProducts"
      :key="mainProduct.id" 
      class="mainProduct">
  
    <img src="../assets/product.jpg" alt="Denim Jeans" style="width:100%">
  
    <h2>{{mainProduct.name}}</h2>
    <p class="price">{{mainProduct.price}}</p>
    <p>{{mainProduct.description}}</p>
    <p>{{mainProduct.quantity}}</p>
    <p><button>Add to Cart</button></p>
    <p><button>See More Details</button></p>
  </div> -->
  </template>
  
  
  
  <style>
  .mainProduct {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 190px;
    margin: 80px;
    text-align: center;
    font-family: arial;
    float: left;
    background-color: #FFFBEC;
    
  }
  
  .price {
    color: #e95a85;
    font-size: 22px;
  }
  
  .mainProduct button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #e95a85;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  .mainProduct button:hover {
    opacity: 0.7;
  }
  
  
</style>