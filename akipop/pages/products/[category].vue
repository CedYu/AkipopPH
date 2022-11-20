<template>
    <div>
        <br><br><br><br><br><br><br><br><br><br>
        <h1>{{category}}</h1>
        <p>So ayown yung category nato and2 bahaha</p>
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
    console.log(data)
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