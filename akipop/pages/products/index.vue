<template>
  <br><br><br><br><br><br><br><br><br><br>
  <h1>Products</h1>
  <!--WITH SCRIPT-->
  <div class = "container">
    <div v-for="product in products"
      :key="product.id" 
      class="mainProduct">
    <div class="picture">
      <img src="../../assets/img/product.jpg" alt="Denim Jeans" style="width:100%">
    </div>
  
    <p>{{product.name}}</p>
    <p class="price">{{product.price}}</p>
    <p>{{product.description}}</p>
    <p>{{product.id}}</p>
    <p>{{product.quantity}}</p>
    <p><button>Add to Cart</button></p>
    <p><button><router-link to="/products">See More Details</router-link></button></p>
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
    padding: 12px;
    color: white;
    background-color: #e95a85;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  .picture{
    width: 100%;
    height: 200px;
    background-color: #e95a85;
  }

  .price{
    color: #e95a85;
    font-size: 22px;
  }

  .text{
		font-size: 82%;
		text-align: center;
		font-weight: bold;
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