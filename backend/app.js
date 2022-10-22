import "dotenv/config";

import express from "express";
import router from "../backend/routes/routes.js"

const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send('This really doesn\'t wanna work with us')
})

// app.get('/Pain', function(res){
//     var message = res.body.message
//     var html = `<h1>${message}</h1>`
//     res.send(html)
// }) // $.get in Jquery

app.use('/Pain', {message: "tangina"}, router)
app.use("/e", router)

app.listen(port, function(){
    console.log("Server running on\nhttp://localhost:3000");
});