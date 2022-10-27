import db from "../models/dbFuncs.js";
import User from "../models/user.js";
// import Cart from "../models/cart.js";

const userFunc = {
    running: async function(req,res){
      res.send("Server running")
    },
    Register: async function (req,res){
      let {username, firstname, lastname, email, password, password2} = req.body

      // if(!firstname.isAlpha()){ res.send("Invalid first name"); return}
      // if(!lastname.isAlpha()){ res.send("Invalid last name"); return}
      if (password !== password2){ res.send("Passwords do not match"); return }
      if (password.length < 8){ res.send("Password too short"); return }
      if (username.length < 4){ res.send("Invalid Username"); return }
      if (lastname.length < 2){ res.send("Invalid Last Name"); return }

      db.insertOne(User, {"username":username, "firstname":firstname, "lastname":lastname, "email":email, "password":password}, function(result){
        if(result){res.send("User added\nUsername:", username); return }
        res.send("Username or Email is invalid!!!"); return // Integrate a checker in front end
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
      db.findOne(User, {"username":username, "password":password}, null, function(result){
        if(!result){res.send("Invalid Username or Password"); return}
        
        // Create session key and store in database
        res.send("Login Successful"); return // return the session key
      })
    },
    Logout: async function(req,res){
      // Delete session key from database
      res.send("Logout Successful")
    },
}

export default userFunc