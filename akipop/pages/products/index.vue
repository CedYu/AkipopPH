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
    justify-content:center;
    position: relative;
  }

  h1{
    font-family: lemonmilk;
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
		margin: 50px;
    margin-top: 0px;
		animation: fadeInDown;
		animation-duration: 1s;
  }
</style>

<script>
export default{
  async created() {
    const supabase = useSupabaseClient()
    const { data , error } = await supabase
      .from('products')
      .select()
      .order('id', { ascending: true })
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