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
require("../test/token")(passport)

//route middlewares
app.use('/',authRoute)
app.use(passport.initialize());


// app.use(express.urlencoded())

app.listen(port,() => {
    console.log("server listening in port",port)
})

mongoose.connect('mongodb+srv://user:MbvyVlIqk0xlPnZs@cluster0.uxdtw.mongodb.net/test', {
        useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true, })
        .then(() => console.log("mongodb connected"))
        .catch(err => console.log(err));
