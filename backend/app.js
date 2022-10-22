import "dotenv/config";

import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res){
    // This is the laman of the webpage
    console.log("Hello World")
})

app.listen(port, function(){
    console.log("Server running on\nhttp://localhost:3000");
});