<template>
    <br><br><br><br><br><br><br><br><br><br>
    <h1>Stationary</h1>
    
    <!--SAMPLE WITHOUT SCRIPT-->
    <div class="mainProduct">
    
      <img src="../assets/product.jpg" alt="Denim Jeans" style="width:100%">
    
      <h2>Anya Stationary</h2>
      <p class="price">$13.66</p>
      <p>a very very amazing stationary</p>
      <p>10</p>
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