<template>
  <br><br><br><br><br><br><br><br><br><br>
  <h1>Products</h1>
  <div class="container">
    <productcard v-for="product in products" v-bind:key="product.id" :product="product"/>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
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
    console.log(data)
  },
  data(){
    return{
      products:[],
    }
  },
}
</script>