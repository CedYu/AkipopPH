const db = require('../db.js');

async function Register(req, res){
    // Check if user exists
    // Add user to database
    username, firstname, lastname, email, password, password2 = [req.body]
    if (password != password2){ res.send("Passwords do not match") }
    if (password.length < 8){ res.send("Password too short") }
    if (username.length < 4){ res.send("Invalid Username") }
    // if username exists in database... Invalid username
}

function Login(){
    // Check if email exists
    // Check if password is correct
    // Create session key
    email, password = [req.body]
    // Get user from database.. if wala edi "Invalid email/password" para nde mabilis brute force search
}

function Logout(){
    // Delete session key
}

function Pain(){
    console.log("test")
}