<template>
    <div class="checkout">
        <!--Personal Info of the buyer-->
        <br><h1>Checkout Detail</h1>
	    <form>
			<label for="receiverName">Receiver Name
		    <span style="color:red">*</span></label><br>
		
    		<input type = text name = "receiverName" id = "receiverName" size = 25><br>

    		<label for="address">Delivery Address
		    <span style="color:red">*</span></label><br>

      		<input type = text name = "address" id = "address" size = 25><br>

		    <label for="payment">Paying Method
		    <span style="color:red">*</span></label><br>

            <label for="payment1">GCASH</label>
      		<input type = radio name = "payment1" id = "payment1" size = 25><br>
            <label for="payment1">BANK TRANSFER</label>
            <input type = radio name = "payment2" id = "payment2" size = 25><br>
            

		    <label for="email">Email
		    <span style="color:red">*</span></label><br>

      		<input type = text name = "email" id = "email" size = 25><br>

		    <label for="phoneNumber">Cellphone Number
		    <span style="color:red">*</span></label><br>
	
  		    <input type = text name = "phoneNumber" id = "phoneNumber" size = 25><br>

            <!--Info of the Product-->
            <section class="products">
                    <div 
                    v-for="product in products"
                    :key="product.id"
                    class="product"
                    >
    
    
                      <!--VUE JS-->
                        <h3 class="cart-product-header">{{product.name}}</h3>
                        
                        <!--FOR IMAGE-->
                        <!-- <img 
                            src={{product.image}} style={{ height="120px" }}  
                            :alt="product.name" 
                            class="product-image"
                        > -->

                        <p class="cart-product-description">{{product.description}}</p>
                        <p class="cart-quantity">{{product.quantity}}</p>
            </div>
            </section>

			<p>By clicking Place order, you order detail will immedietely proceed to the seller</p>
            
            <div class="buy_submit">
      	        <input type = submit value = "Place Order">
            </div>
	    </form>

        

		
	</div>

</template>

<script> 
    export default{
        data(){
            return{
                products:[
                {
                    id:"19708555531",
                    name: "SPY X FAMILY PILLOW PLUSHIE Anya Yor Loid Anya Heh",
                    description: "High quality pillow with Anya design",
                    quantity: "15"
                },
                {
                    id:"18308562708",
                    name: "MY DRESS UP DARLING PILLOW PLUSHIE Marin",
                    description: "High quality pillow with elegant design",
                    quantity: "125"
                },
            ],
        }
    }
}
</script>

<style>
	@font-face {
		font-family: lemonmilk;
    		src: url("../assets/LEMONMILK-Bold.otf");
	}

	@font-face {
		font-family: lemonmilkreg;
		src: url("../assets/LEMONMILK-Regular.otf");
	}

	.checkout {
		font-family: arial;
		background-color: #FFFBEC;
		background-image: url("../assets/checkout-bg.png");
        background-size: cover;
		color: #2C3E50;
	}

    h1 {
		font-family: lemonmilk;
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
	}

	form {
		text-align: left; 
  		margin-left: auto; 
        margin-right: auto;
 		width: 490px;
	}

	input {
		width: 460px;
    	padding: 13px;
    	display: block;
		border-style: solid;
		border-color: #D8D1C9;
    	background-color: #FFF9ED;
		outline: none;
	}

	input[type=text]:focus {
  		border: 3px solid pink;
	}

	.buy_submit input[type="submit"] {
		background-color: #cf7c1e;
		color: white;
		font-weight: bold;
		cursor:pointer;
        margin: auto;
        border-radius: 20px;
        border: none;
        width: 200px;
	}

	.buy_submit input[type="submit"]:hover {
		background-color: #9ED149;
		color: black;
	}

	p {
		font-size: 82%;
		text-align: center;
		font-weight: bold;
	}

	#login a:link {
		color: #e95a85;
	}

    .product{
        background-color: #FFF9ED;
        padding: 30px 40px;
    }
</style>