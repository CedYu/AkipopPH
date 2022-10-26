import "dotenv/config";

import express from "express";
import router from "../backend/routes/routes.js"
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json())

const corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions))


const port = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI||process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use('/',router)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

app.listen(port, function(){
    console.log("Server running on\nhttp://localhost:3000");
});