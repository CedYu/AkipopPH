<template>
    <div>
        <br><br><br><br><br><br><br><br><br><br>
        <h1>{{category}}</h1>
        <p></p>
    </div>
</template>

<script>
export default{
    data(){
        
        return{
            category:useRoute().params.category
        }
    }
}
</script>

<style scoped>

</style>