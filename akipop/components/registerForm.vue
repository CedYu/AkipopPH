<template>
<div class="register">
	<br><br><br><br><br><br><br><h1>Register</h1>
	<form @submit="registerUser($event)">
		<label for="username">Username
		<span style="color:red">*</span></label><br>

		<input type = text name = "username" id = "username" size = 25 v-model="username" required><br>

		<label for="firstname">First Name
		<span style="color:red">*</span></label><br>

		<input type = text name = "firstname" id = "firstname" size = 25 v-model="firstname" required><br>

		<label for="lastname">Last Name
		<span style="color:red">*</span></label><br>

		<input type = text name = "lastname" id = "lastname" size = 25 v-model="lastname" required><br>

		<label for="email">Email
		<span style="color:red">*</span></label><br>

		<input type = email name = "email" id = "email" size = 25 v-model="email" required><br>

		<label for="password">Password
		<span style="color:red">*</span></label><br>

		<input type = password name = "password" id = "password" size = 25 v-model="password" required><br>

		<label for="confirm-password">Confirm Password
		<span style="color:red">*</span></label><br>
	
		<input type = password name = "password2" id = "password2" size = 25 v-model="password2" required><br>

		<p>By clicking Register, you agree to our Terms, Data Policy and Cookies Policy.</p>
		<div class="reg_submit">
		<input type=submit value="Register" >
		</div>
	</form>
</div>
</template>



<script>
export default{
	data(){
		return{
			username:'',
			firstname:'',
			lastname:'',
			email:'',
			password:'',
			password2:'',
			role: 1
		}
	},
	methods: {
		
		async registerUser(e){
			const supabase = useSupabaseClient()
			e.preventDefault() //This prevents form clearing when you submit the form.
			if (this.username == '' || this.firstname == ''|| this.lastname =='' || this.email == '' || this.password == '' || this.password2 == ''){
				alert("There are missing fields! \n")
				return
			}
			else if(this.username.length < 4){
				alert('Your username has to be atleast 4 characters long')
				return
			}
			else if(this.password.length < 4){
				alert('Your password has to be atleast 4 characters long')
				return
			}
			else if(this.password!=this.password2){
				alert('Please make sure your passwords match')
				return
			}
			console.log("Inside method")
			console.log("Username:" + this.username + "\n" +
						"Firstname:" + this.firstname + "\n" +
						"Lastname:" + this.lastname + "\n" +
						"Email:" + this.email + "\n" + 	
						"Password:" + this.password + "\n" +
						"Password2:" + this.password2 + "\n")

			// const {data, error} = await supabase
			// .from('User')
			// .insert([{email:this.email, username:this.username, password:this.password, firstname:this.firstname, lastname:this.lastname, role:this.role}])
			// .select()
			console.log(this.email)
			const {data2, error2} = await supabase.auth.signUp({
				email:this.email,
				password:this.password
			})
			console.log(error2)
			console.log(data2)
			// if (error){
			// 	console.log(error)
			// }
			// if (data){
			// 	console.log(data)
			// }
			if (error2){
				console.log(error2)
			}
			if (data2){
				console.log(data2)
			}

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

	.register {
		font-family: arial;
		background-color: #FFFBEC;
		/*background-image: url("../assets/registerbg.png");
        background-size: cover;*/
		color: #2C3E50;
	}

	.register h1 {
		font-family: lemonmilk;
		font-size: 350%;
		text-align: center;
		letter-spacing: -3px;
		animation: fadeInDown;
		animation-duration: 1s;
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
