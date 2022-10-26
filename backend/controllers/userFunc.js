import db from "../models/dbFuncs.js";
import User from "../models/user.js";
// import Cart from "../models/cart.js";

const userFunc = {
    func: async function(req,res){
      console.log("End");
      res.send("Hello World");
    },
    Pain: async function (req,res){
      res.send("FUCK")
    },
    test: async function(req,res){
      res.send("Hello Github");
    },
    Register: async function (req,res){
      let {username, firstname, lastname, email, password, password2} = req.body
      
      if (password !== password2){ res.send("Passwords do not match"); return }
      if (password.length < 8){ res.send("Password too short"); return }
      if (username.length < 4){ res.send("Invalid Username"); return }
      
      db.insertOne(User, {"username":username, "firstname":firstname, "lastname":lastname, "email":email, "password":password}, function(result){
        if(result){res.send("User added"); console.log("User added"); return}
        res.send("Username or Email is invalid!!!"); return // Integrate a checker in front end
      })
    },
    CheckUsername: async function(req,res){
      db.findOne(User, {"username":req.body.username}, null, function(result){ res.send("Username already exists!"); result})
    },
    CheckEmail: async function(req,res){
      db.findOne(User, {"email":req.body.email}, null, function(result){ res.send("Email already in use!"); result})
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