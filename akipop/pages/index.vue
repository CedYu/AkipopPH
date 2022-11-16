<template>
    <div class="home">
        <br><br><br><br><br><br>
        <h1 class="homeh1">HOME</h1>
        <div class="banner1">
            <img v-bind:src="'../banner1.png'" width="1200" height="680" alt="banner1"/>
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
                    <br>us your requests <a href="https://tinyurl.com/akipoprequest">here</a>!
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
        <div class="mainProduct">
            <img src="../assets/img/product.jpg" alt="Denim Jeans" style="width:100%">
            <p>Anya Stationary</p>
            <p class="price">$13.66</p>
            <p>a very very amazing stationary</p>
            <p>10</p>
            <p><button>Add to Cart</button></p>
            <p><button><NuxtLink to="/product">See More Details</NuxtLink></button></p>
        </div>

        <div class="boxed2">
            <h2>CONNECT WITH US</h2>
            <div class = "facebook">
                <a href="https://www.facebook.com/akipopph" target="_blank"><img src="../assets/img/facebook.png" width="80" height="80" alt="facebook"/></a>
            </div>

            <div class = "instagram">
                <a href="https://www.instagram.com/akipopph/" target="_blank"><img src="../assets/img/instagram.png" width="75" height="75" alt="instagram"/></a>
            </div>

            <div class = "tiktok">
                <a href="https://www.tiktok.com/@akipopph" target="_blank"><img src="../assets/img/tiktok.png" width="75" height="75" alt="tiktok"/></a>
            </div>

            <div class = "shopee">
                <a href="https://shopee.ph/akipopph" target="_blank"><img src="../assets/img/shopee.png" width="85" height="85" alt="shopee"/></a>
            </div>
        </div>
    </div>
</template>

<script>

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
    
    h1 {
		font-family: "lemonmilk";
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
	}
    .mainProduct {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 190px;
      margin: 80px;
      text-align: center;
      font-family: arial;
      float: left;
      background-color: #FFFBEC;
      
    }
    .price {
      color: #e95a85;
      font-size: 22px;
    }
    
    .mainProduct button {
      border: none;
      outline: 0;
      padding: 12px;
      color: white;
      background-color: #e95a85;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }
    body {
        background-color: #FFFBEC; 
        min-width: 100%;
    }

    .homeh1 {
        color: #2C3E50;
        animation: fadeInDown; 
        animation-duration: 2s; 
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
        font-family: "lemonmilk";
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
        width: 100%;
        height: 80px;
        margin-top: 600px;
    }

    .boxed2 h2 {
        color: white;
        text-align: left;
        margin-left: 5%;
        margin-top: 20px;
        font-family: Arial;
        letter-spacing: 0.4px;
    }

    .facebook {
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
    }
</style>