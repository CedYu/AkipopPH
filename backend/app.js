import "dotenv/config";

import express from "express";
import router from "../backend/routes/routes.js"

const app = express();

const port = process.env.PORT || 3000;

app.use('/',router)


app.listen(port, function(){
    console.log("Server running on\nhttp://localhost:3000");
});