const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 3000
require("dotenv").config() //to use env variables
const passport = require("passport")

//middlewares
app.use(express.json());

//import routes
const authRoute = require('../route/authroute')
const userRoute= require('../route/bookroute')
require("../test/token")(passport)

//route middlewares
app.use('/',authRoute)
app.use("/",userRoute)
app.use(passport.initialize());


// app.use(express.urlencoded())

app.listen(port,() => {
    console.log("server listening in port",port)
})

mongoose.connect('mongodb+srv://reshma:reshma@cluster0.edeo5.mongodb.net/mySecondDatabase', {
        useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true, })
        .then(() => console.log("mongodb connected"))
        .catch(err => console.log(err));
