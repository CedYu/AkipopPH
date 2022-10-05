<template>
    <div class="register">
        <br><br><br><br><br><br><br><h1>Register</h1>
	    <form>
			<label for="username">Username
		    <span style="color:red">*</span></label><br>
		
    		<input type = text name = "username" id = "username" size = 25><br>

    		<label for="firstname">First Name
		    <span style="color:red">*</span></label><br>

      		<input type = text name = "firstname" id = "firstname" size = 25><br>

		    <label for="lastname">Last Name
		    <span style="color:red">*</span></label><br>

      		<input type = text name = "lastname" id = "lastname" size = 25><br>

		    <label for="email">Email
		    <span style="color:red">*</span></label><br>

      		<input type = text name = "email" id = "email" size = 25><br>

		    <label for="password">Password
		    <span style="color:red">*</span></label><br>
	
  		    <input type = text name = "password" id = "password" size = 25><br>

			<p>By clicking Register, you agree to our Terms, Data Policy and Cookies Policy.</p>
            
            <div class="reg_submit">
      	        <input type = submit value = "Register">
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

	.register {
		font-family: arial;
		background-color: #FFFBEC;
		background-image: url("../assets/registerbg.png");
        background-size: cover;
		color: #2C3E50;

		
	}

    h1 {
		font-family: lemonmilk;
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
		animation: fadeInDown;
		animation-duration: 3s;
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

	.reg_submit input[type="submit"] {
		background-color: #004AAD;
		color: white;
		font-weight: bold;
		cursor:pointer;
        margin: auto;
        border-radius: 20px;
        border: none;
        width: 200px;
	}

	.reg_submit input[type="submit"]:hover {
		background-color: #9ED149;
		color: black;
	}

	p {
		font-size: 82%;
		text-align: center;
		font-weight: bold;
	}
</style>