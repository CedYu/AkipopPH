<template>
<div class="home">
    <br><br><br><br><br><br>
    <h1 id="home1" class="homeh1">HOME</h1>
    <div class="banner1">
        <img v-bind:src="'../banner1.png'" alt="banner1" id="main-banner"/>
    </div>

    <div class="boxed">
        <div class = "request_section">
            <div class="request">
                <img src="../assets/img/request.png" width="80" height="80" alt="request"/>
            </div>
            <div class="maintext_request">
                GOT REQUESTS?
            </div>
            <div class="subtext_request">
                Want merch of a specific anime?
                <br>We will make it work for you, send
                <br>us your requests <a href="https://tinyurl.com/akipoprequest">HERE</a>
            </div>
        </div>

        <div class = "delivery_section">
            <div class="delivery">
                <img src="../assets/img/delivery.png" width="80" height="80" alt="delivery"/>
            </div>

            <div class="maintext_delivery">
                DELIVERY
            </div>
            <div class="subtext_delivery">
                We ship nationwide via J&T
                <br>every Wednesday, Saturday,
                <br>and Sunday
            </div>
        </div>

        <div class = "payment_section">
            <div class="payment">
                <img src="../assets/img/payment.png" width="80" height="80" alt="payment"/>
            </div>

            <div class="maintext_payment">
                PAYMENT
            </div>
            <div class="subtext_payment">
                Pay directly via GCash or
                <br>through bank transfers
            </div>
        </div>      
    </div>

    <h2>PRODUCTS</h2>
    <!--SAMPLE WITHOUT SCRIPT-->
    <div class="container">
        <ProductCard v-for="product in products" v-bind:key="product.id" :product="product"/>
    </div>
    <br><br><br><br><br><br><br>
    <Follow/>
</div>
</template>

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

<style>
    .home {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000000;
        margin: -10px -10px;
    }
    @font-face {
		font-family: "lemonmilk";
        src: url("../assets/LEMONMILK-Bold.otf");
	}

	@font-face {
		font-family: "lemonmilkreg";
		src: url("../assets/LEMONMILK-Regular.otf");
	}

    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        position: relative;
        width: 100%;
        height: 500px;
        overflow: scroll;
    }

    #home1 {
		font-family: "lemonmilk";
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
	}

    #main-banner{
        width: 100%; 
        height: 1200px;
    }

    body {
        background-color: #FFFBEC; 
        min-width: 100%;
    }

    .homeh1 {
        color: #2C3E50;
        animation: fadeInDown; 
        animation-duration: 2s;
        margin-bottom: 12px; 
    }

    a:link, a:visited{
        color: white;
        font-size: 20px;
        text-decoration: none;
    }

    .banner1 {
        text-align: center;
    }

    .boxed {
        border: 20px solid #E86187;
        background-color: #E86187;
        width: 100%;
        height: 200px;
        margin-top: 50px;
    }

    .request_section {
        margin-left: 6%;
        text-align: left;
    }

    .request {
        margin-top: 10px;
    }

    .maintext_request {
        margin-top: -50px;
        margin-left: 100px;
        font-size: 150%;
        font-family: "lemonmilk";
        color: white;
    }

    .subtext_request {
        margin-top: 30px;
        margin-left: 8px;
        font-size: 100%;
        font-family: Arial;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 25px;
        color: white;
    }

    .delivery_section {
        margin-left: 39.3%;
        display: block;
    }

    .delivery {
        margin-top: -163px;
    }

    .maintext_delivery {
        margin-top: -60px;
        margin-left: 108px;
        font-size: 150%;
        font-family: "lemonmilk";
        color: white;
    }

    .subtext_delivery {
        margin-top: 30px;
        font-size: 100%;
        font-family: Arial;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 25px;
        color: white;
    }

    .payment_section {
        margin-left: 66.5%;
        display: block;
    }

    .payment {
        margin-top: -160px;
    }

    .maintext_payment {
        margin-top: -60px;
        margin-left: 110px;
        font-size: 150%;
        font-family: lemonmilk;
        color: white;
    }

    .subtext_payment {
        margin-top: 30px;
        font-size: 100%;
        font-family: Arial;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 25px;
        color: white;
    }

    p{
		font-size: 82%;
		text-align: center;
		font-weight: bold;
	}

    h2 {
        color: #2C3E50;
        font-family: lemonmilk;
        font-size: 300%;
        text-align: center;
        letter-spacing: -3px;
        margin: 50px;
    }

    .subtext_request a{
        text-decoration-line: underline;
        text-decoration-color: lightpink;
    }

    .boxed2 {
        border: 20px solid #2C3E50;
        background-color: #2C3E50;
        flex-wrap: column;
        width: 100%;
        height: 80px;
        margin-top: 600px;
    }

    .boxed2 h2 {
        color: white;
        text-align: center;
        align-content: center;
        margin-left: 5%;
        margin-top: 20px;
        font-family: Arial;
        letter-spacing: 0.4px;
    }

    /* .facebook {
        margin-left: 50%;
        margin-top: -120px;
    }


    .instagram {
        margin-left: 60%;
        margin-top: -82px;
    }

    .tiktok {
        margin-left: 70%;
        margin-top: -78px;
    }

    .shopee {
        margin-left: 79%;
        margin-top: -84px;
    } */
</style>