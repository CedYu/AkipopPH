import db from './models/db.js'
import User from './models/user.js'

const user_functions = {
    Register: async function (req, res){
        // Check if user exists
        // Add user to database
        username, firstname, lastname, email, password, password2 = [req.body]
        res.send('Function Register:', username, firstname, lastname, email, password, password2)
        if (password != password2){ res.send("Passwords do not match") }
        if (password.length < 8){ res.send("Password too short") }
        if (username.length < 4){ res.send("Invalid Username") }
        // if username exists in database... Invalid username
        if (db.findOne(User, {username: username})){ res.send("Username already exists") }
    },
    
    Login: async function (req, res){
        // Check if email exists
        // Check if password is correct
        // Create session key
        email, password = [req.body]
        // Get user from database.. if wala edi "Invalid email/password" para nde mabilis brute force search
    },
    
    Logout: async function (req,res){
        // Delete session key
    },
    
    Pain: function (req,res){
        return {message: "Pain"}
    }
}

export default user_functions