<template>
 <br><br><br><br><br><br><br><br><br><br>
 <h1>{{category}}</h1>
 <div class="filter-container">
  <select id="list" v-on:change="getAnimeName()">
    <option value=''>-- Select Anime --</option>
    <option value='Spy X Family'>Spy X Family</option>
    <option value='Naruto'>Naruto</option>
    <option value='Kuroko no Basket'>Kuroko no Basket</option>
    <option value='Genshin Impact'>Genshin Impact</option>
    <option value='Chainsaw Man'>Chainsaw Man</option>
    <!-- <option v-for="anime in animes" v-bind:key="anime.id" value =${{anime.name}}>{{anime.name}}</option > -->
  </select>
 </div>
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

    const { data:animes} = await supabase
      .from('animes')
      .select()
    this.animes = animes
    },
    data(){
        return{
            products:[],
            animes:[],
            anime:[],
            category:useRoute().params.category
        }
    },
    methods:{
      async getAnimeName(){
          this.anime = document.getElementById("list").value;
          const supabase = useSupabaseClient()
          const { data , error } = await supabase
            .from('products')
            .select()
            .eq('category',this.category)
            .eq('anime',this.anime)
            .order('id', { ascending: true })
          this.products = data
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