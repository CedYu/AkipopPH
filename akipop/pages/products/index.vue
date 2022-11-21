<template>
  <br><br><br><br><br><br><br><br><br><br>
  <h1>Products</h1>
  <!--WITH SCRIPT-->
  <div class = "container">
    <div v-for="product in products" :key="product.id" class="mainProduct">
      <div class="picture">
        <img src="../../assets/img/product.jpg" alt="Denim Jeans" id="prod-img">
        <span class="card-buttons"> 
          <button class="box-btn"><NuxtLink to="/"><img src="../../assets/img/viewproduct.png" alt="deets" id="view-details"/></NuxtLink></button>
          <button class="box-btn"><img src="../../assets/img/likeproduct.png" alt="like" id="like-product"/></button>
      </span>
      </div>
      <div class="card-footer">
        <div id="product-name">{{product.name}}</div>
        <div id="product-price">P{{product.price}}</div>
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
    position: relative;
  }

  .mainProduct{
    border: none;
    outline: 0;
    /* padding: 5px; */
    color: white;
    background-color: #FFFBEC;
    text-align: center;
    cursor: pointer;
    width: auto;
    height: auto;
    font-size: 18px;
    position: relative;
  }

  .picture{
    width: auto;
    height: auto;
    position: relative;
  }

  #prod-img{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .card-buttons{
    /* background-color: #e95a85; */
    background-color: #FFFBEC;
    width: auto;
    height: auto;
    margin-bottom: 10px;
    padding: 0px;
    z-index: 9;
    position: absolute;
    right:0;
    left: 0;
    bottom:0;
  }

  .card-footer{
    /* background-color: #e95a85; */
    background-color: #000;
    margin-top: 5px;
    width: 100%;
    height: auto;
    display: inline-flex;
  }

  .box-btn{
    width: 25px;
    height: 25px;
    padding: 0px;
    margin: 3px;
    background-color: #FFFBEC;
    z-index: 9;
  }

  #product-name{
    color: #ffffff;
    font-size: 22px;
    font-size: 82%;
		text-align: center;
		font-weight: bold;
    margin: 5px;
  }

  #product-price{
    /* color: #e95a85; */
    color: #ffffff;
    font-size: 22px;
    font-size: 82%;
		text-align: center;
		font-weight: bold;
    margin: 10px;
  }

  #like-product{
    width: 25px;
    height: 25px;
  }

  #view-details{
    width: 25px;
    height: 25px;
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