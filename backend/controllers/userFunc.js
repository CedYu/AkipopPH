import db from "../models/dbFuncs.js";
import User from "../models/user.js";
// import Cart from "../models/cart.js";

const userFunc = {
    running: async function(req,res){
      res.send("Server running")
    },
    Register: async function (req,res){
      function Capitalize(str){
        var words = str.toLowerCase().split(" ")
        words = words.filter(word => word !== "")
        for (let i = 0; i < words.length; i++){
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }
        return words.join(" ")
      }
      
      let {username, firstname, lastname, email, password, password2} = req.body
      firstname = firstname.trim()
      lastname = lastname.trim()

      if(firstname === "") { res.send("First name is required"); return }
      if(lastname === "") { res.send("Last name is required"); return }
      if(!/^[a-zA-Z ]+$/.test(firstname)){ res.send("Invalid first name"); return }
      if(!/^[a-zA-Z ]+$/.test(lastname) || lastname.length < 2){ res.send("Invalid last name"); return }
      if (password !== password2){ res.send("Passwords do not match"); return }
      if (password.length < 8 || password.length > 16){ res.send("Password length should be 8 to 16 characters"); return }
      if(!/^[a-zA-Z0-9!@#$^&*()-=]+$/.test(password)){ res.send("Invalid password"); return }
      if (username.length < 4){ res.send("Invalid Username"); return }

      db.insertOne(User, {"username":username, "firstname":Capitalize(firstname), "lastname":Capitalize(lastname), "email":email, "password":password}, function(result){
        if(result){res.send("User added\nUsername:" + username); return }
        res.send("Username or Email is invalid!!!"); return
      })
    },
    CheckUsername: async function(req,res){
      db.findOne(User, {"username":req.body.username}, null, function(result){ if(result) {res.send("Username is already taken")} else {res.send("Username is available")} })
    },
    CheckEmail: async function(req,res){
      db.findOne(User, {"email":req.body.email}, null, function(result){ if(result) {res.send("Email is already in use")} else {res.send("Email is available")} })
    },
    Login: async function(req,res){
      let {username, password} = req.body
      if (password !== password2){ res.send("Passwords do not match"); return }
      if (password.length < 8 || password.length > 16){ res.send("Password length should be 8 to 16 characters"); return }
      if(!/^[a-zA-Z0-9!@#$^&*()-=]+$/.test(password)){ res.send("Invalid password"); return }
      if (username.length < 4){ res.send("Invalid Username"); return }
      db.findOne(User, {"username":username, "password":password}, null, function(result){
        if(!result){res.send("Invalid Username or Password"); return "Invalid"}
        
        // Create session key and store in database
        res.send("Login Successful"); return // return the session key
      })
    },
    Logout: async function(req,res){
      // Delete session key from database
      res.send("Account Logged Out")
    },
}

export default userFunc
