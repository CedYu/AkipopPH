<template>
    <div class="login">
		<br><br><br><br><br><br><br><br><h1>Log In</h1>
	    <form>
			<label for="username">Username</label><br>
		
    		<input type = text name = "username" id = "username" size = 25><br>

		    <label for="password">Password</label>
	
  		    <input type = password name = "password" id = "password" size = 25><br>

            <div class="login_submit">
      	        <input type = submit value = "Log In">
            </div>
			<div id="extra">
				<p>line<br>line<br>line</p>
			</div>
	    </form>
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
		/*background-image: url("../assets/loginbg.png");
		background-size: cover;*/
		color: #2C3E50;
	}

    .login h1 {
		font-family: lemonmilk;
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
		margin: 50px;
		animation: fadeInDown;
		animation-duration: 1s;
	}

	#extra {
		font-size: 100%;
		color: transparent;
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
</style>