<template>
  <br><br><br><br><br><br><br><br><br><br>
  <h1>Products</h1>
  <!--WITH SCRIPT-->
  <div class = "container">
    <div v-for="product in products"
      :key="product.id" 
      class="mainProduct">
    <div class="picture">
      <img src="../../assets/img/product.jpg" alt="Denim Jeans" id="prod-img">
    </div>
    <span class="card-buttons"> 
      <button class="box-btn"><NuxtLink to="/"><img src="../assets/img/viewproduct.png" alt="deets" id="view-details"/></NuxtLink></button>
      <button class="box-btn"><img src="../assets/img/likeproduct.png" alt="like" id="like-product"/></button>
    </span>
    <div class="card-footer">
      <div id="product-name">{{product.name}}</div>
      <div id="product-price">{{product.price}}</div>
    </div>
    <!-- <p id="product-desc">{{product.description}}</p>
    <p>{{product.id}}</p>
    <p>{{product.quantity}}</p>
    <p><button>Add to Cart</button></p>
    <p><button><router-link to="/products">See More Details</router-link></button></p> -->
    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .mainProduct{
    border: none;
    outline: 0;
    /* padding: 5px; */
    color: white;
    background-color: #e95a85;
    text-align: center;
    cursor: pointer;
    width: 100%;
    height: 600px;
    font-size: 18px;
  }

  .picture{
    width: 100%;
    height: 500px;
    background-color: #e95a85;
  }

  #prod-img{
    width: 100%;
    height: 100%;
  }

  .card-buttons{
    /* background-color: #e95a85; */
    background-color: blue;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }

  .card-footer{
    /* background-color: #e95a85; */
    background-color: #000;
    margin-top: 10px;
    width: 100%;
    height: 200px;
  }

  .box-btn{
    width: 30px;
    height: 30px;
    padding: 5px;
  }

  #product-name{
    color: #ffffff;
    font-size: 22px;
    font-size: 82%;
		text-align: center;
		font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  #product-price{
    /* color: #e95a85; */
    color: #ffffff;
    font-size: 22px;
    font-size: 82%;
		text-align: center;
		font-weight: bold;
    margin-top: 10px;
  }
</style>

<script>
export default{
  async created() {
    const supabase = useSupabaseClient()
    const { data , error } = await supabase
      .from('products')
      .select()
    this.products = data
  },
  data(){
      return{
          products:[],
      }
  },
}
</script>