<template>
    <br><br><br><br><br><br><br><br><br><br>
    <h1>Prints</h1>
    
    <!--SAMPLE WITHOUT SCRIPT-->
    <div class="mainProduct">
    
      <img src="../assets/product.jpg" alt="Denim Jeans" style="width:100%">
    
      <h2>Anya Prints</h2>
      <p class="price">$4.66</p>
      <p>a very very amazing prints</p>
      <p>550</p>
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