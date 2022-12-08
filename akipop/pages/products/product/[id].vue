<template>
    <div class="product-container">
        <div class="images">
            <div class="main-image">
                <img :src="product.image" alt="product image">
            </div>
            <div class="mini-images">
            </div>
        </div>
        <div class="buttons">
            <button class="like-btn"><img src="../../assets/img/likeproduct.png" alt="like" id="like-product"/></button>
            <button class="chat-btn">
                <span class="chat-icon"><!-- Insert chat image here --></span>
                <span class="chat-text">Have questions? Chat with us</span>
            </button>
        </div>
        <div class="product-info">
            <h1 id="prod-name">{{ product.name }}</h1>
            <p id="prod-desc">{{ product.description }}</p>
            <p id="prod-price">{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default{
    async created(){
        const supabase = useSupabaseClient()
        const { data , error } = await supabase
            .from('products')
            .select()
            .eq('id',this.id)
            this.product = data
    },
    data(){
        return{
            id:useRoute().params.id,
            product:Object,
        }
    }
}
</script>

<style scoped>
.product-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10%;
    margin-top: 10%;
}
.images{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}
.main-image{
    width: 100%;
    height: 100%;
}
.mini-images{
    display: flex;
}
.buttons{
    display: flex;
}
.like-btn{
    width: 27px;
    height: 27px;
    padding: 0px;
    color:black;
    border-radius: 50%;
    background-color: #FFFBEC;
    margin-top: 0%;
    margin-bottom: 0%;
    border: none;
}
#like-product{
    width: 100%;
    height: 100%;
}
.chat-btn{
    border: none;
}
.chat-icon{
    width: 27px;
    height: 27px;
    padding: 0px;
    color:black;
    border-radius: 50%;
    background-color: #FFFBEC;
    margin-top: 0%;
    margin-bottom: 0%;
    border: none;
}
.chat-text{
    font-family: lemonlikreg;
    font-size: 1.5rem;
    margin-left: 1rem;
}
.product-info{
    display: flex;
}
#prod-name{
    font-size: 2rem;
}
#prod-desc{
    font-size: 1.5rem;
}
#prod-price{
    font-size: 1.5rem;
}
</style>