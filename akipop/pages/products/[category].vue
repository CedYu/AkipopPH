<template>
 <br><br><br><br><br><br><br><br><br><br>
 <h1>{{category}}</h1>
 <div class = "container">
    <productcard v-for="product in products" v-bind:key="product.id" :product="product"/>
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
      .order('id', { ascending: true })
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
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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