import express from "express";

const app = express();

app.get("/", function(req, res){
    // This is the laman of the webpage
})

app.listen(3000);

console.log("Server running on http://localhost:3000");