import "dotenv/config";

import express from "express";
import router from "../backend/routes/routes.js"
import mongoose from "mongoose";

const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI||process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use('/',router)


app.listen(port, function(){
    console.log("Server running on\nhttp://localhost:3000");
});