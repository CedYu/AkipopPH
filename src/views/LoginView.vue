<template>
    <div class="login">
		<br><h1>Log In</h1>
	    <form>
			<label for="username">Username</label><br>
		
    		<input type = text name = "username" id = "username" size = 25><br>

		    <label for="password">Password</label>
	
  		    <input type = text name = "password" id = "password" size = 25><br>

            <div class="login_submit">
      	        <input type = submit value = "Log In">
            </div>
	    </form>
		<div id = "register">
		    <p>Click here to <a href="RegisterView.vue">create an account</a></p>
	    </div>
	</div>
</template>

<style>
	@font-face {
		font-family: lemonmilk;
    		src: url("../assets/LEMONMILK-Bold.otf");
	}

	@font-face {
		font-family: lemonmilkreg;
		src: url("../assets/LEMONMILK-Regular.otf");
	}

	.login {
		font-family: arial;
		background-color: #FFFBEC;
		background-image: url("../assets/loginbg.png");
		background-size: cover;
		color: #2C3E50;
	}

    h1 {
		font-family: lemonmilk;
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
		margin: 50px;
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

	.login_submit input[type="submit"] {
		background-color: #8E77F8;
		color: white;
		font-weight: bold;
		cursor:pointer;
        margin: auto;
        border-radius: 20px;
        border: none;
        width: 200px;

		animation: wobble;
		animation-duration: 8s;
	}

	.login_submit input[type="submit"]:hover {
		background-color: #FFDD62;
		color: black;
	}

	p {
		font-size: 82%;
		text-align: center;
		font-weight: bold;
	}

	#register a:link {
		color: #e95a85;
	}
</style>