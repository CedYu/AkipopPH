<template>
 <br><br><br><br><br><br><br><br><br><br>
 <h1>{{category}}</h1>
 <div class = "container">
    <div v-for="product in products"
      :key="product.id" 
      class="mainProduct">
  
        <img src="../../assets/img/product.jpg" alt="Denim Jeans" style="width:100%">
    
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

<script>
export default{
    async created() {
    const supabase = useSupabaseClient()
    const { data , error } = await supabase
      .from('products')
      .select()
      .eq('category',this.category)
    this.products = data
    },
    data(){
        
        return{
            products:[],
            category:useRoute().params.category
        }
    }
}
</script>

<style scoped>

</style>