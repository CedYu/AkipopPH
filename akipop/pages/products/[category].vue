<template>
  <br><br><br><br><br><br><br><br><br><br>
  <h1 class="category-header">{{category}}</h1>
  <div class="filter-container">
  <select id="list" v-on:change="getAnimeName()">
    <option id="option-font">-- Select Anime --</option>
    <option id="option-font" v-for="anime in animes" v-bind:key="anime.id">{{anime.name}}</option>
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
        var e = document.getElementById("list");
        this.anime = e.options[e.selectedIndex].text
        const supabase = useSupabaseClient()
        if(this.anime=='-- Select Anime --'){
          const { data , error } = await supabase
            .from('products')
            .select()
            .eq('category',this.category)
            .order('id', { ascending: true })
          this.products = data
        }
        else{
          const { data , error } = await supabase
          .from('products')
          .select()
          .eq('category',this.category)
          .order('id', { ascending: true })
          .eq('anime',this.anime)
        this.products = data
        }
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

  .category-header{
    font-family: lemonmilk;
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
		margin: 50px;
    margin-top: 0px;
		animation: fadeInDown;
		animation-duration: 1s;
  }

  #list{
    border-radius: 10px;
  }

  #option-font{
    font-family: lemonmilkreg;
  }
</style>