<script setup>
const email=ref('')
const password=ref('')

const client= useSupabaseClient()

const login = async() =>{
	console.log(email.value)
	const {user, error} = await client.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	console.log('user',user)
	console.log('error',error)
}
</script>

<template>
<div class="login">
	<br><br><br><br><br><br><br><br><h1>LOGIN</h1>
	<form @submit.prevent="login()">
		<label for="email">Email</label><br>
	
		<input type = text name = "email" id = "email" placeholder="Email" v-model="email" size = 25 required><br>

		<label for="password">Password</label>

		<input type = password name = "password" id = "password" placeholder="Password" v-model="password" size = 25 required><br>

		<div class="login_submit">
			<input type = submit value = "Log In">
		</div>
		<p>Don't have an account? <NuxtLink to="/account/register"> Sign Up</NuxtLink></p>
		<div id="extra">
		</div>
	</form>
</div>
</template>

<style scoped>
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
		background-color: #e95a85;
		color: white;
		font-weight: bold;
		cursor:pointer;
        margin: auto;
        border-radius: 20px;
        border: none;
        width: 200px;
	}
	p {
		font-size: 82%;
		text-align: center;
		font-weight: bold;
	}
	.login_submit input[type="submit"]:hover {
		background-color: #8E77F8;
		color: black;
	}

	p {
		font-size: 82%;
		text-align: center;
		font-weight: bold;
	}
	a{
		color : #E95A85;
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
		border-radius: 10px;
	}

	input[type=text]:focus {
		border: 3px solid pink;
	}

	p {
		font-size: 82%;
		text-align: center;
		font-weight: bold;
	}
</style>
