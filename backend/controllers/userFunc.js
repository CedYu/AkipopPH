const userFunc = {
    func: async function(req,res){
      console.log("End");
      res.send("Hello World");
    },
    Pain: async function (req,res){
      res.send("FUCK")
    },
    test: async function( req, res){
      res.send("Hello Github");
    },
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
    Login: async function(req,res){

    },
    Logout: async function(req,res){

    },
}

export default userFunc