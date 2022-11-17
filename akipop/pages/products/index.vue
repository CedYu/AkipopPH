<template>
  <br><br><br><br><br><br><br><br><br><br>
  <h1>Products</h1>
  <!--WITH SCRIPT-->
  <div v-for="mainProduct in mainProducts"
      :key="mainProduct.id" 
      class="mainProduct">
  
    <img src="../../assets/img/product.jpg" alt="Denim Jeans" style="width:100%">
  
    <p>{{mainProduct.name}}</p>
    <p class="price">{{mainProduct.price}}</p>
    <p>{{mainProduct.description}}</p>
    <p>{{mainProduct.price}}</p>
    <p>{{mainProduct.quantity}}</p>
    <p><button>Add to Cart</button></p>
    <p><button><router-link to="/products">See More Details</router-link></button></p>
  </div>
  </template>

<script> 
export default{
  data(){
      return{
          mainProducts:[
          {
              id:"19708555531",
              name: "SPY X FAMILY PILLOW PLUSHIE Anya",
              description: "High quality pillow with Anya design",
              price: '$13.66',
              quantity: "15",
              category: "plushies"
          },
          {
              id:"18308562708",
              name: "SPY X FAMILY PILLOW prints Pink",
              description: "High quality pillow with elegant design",
              price: '$45.66',
              quantity: "125",
              category: "prints"
          },
      ],
  }
}
}
</script>