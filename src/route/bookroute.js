const users = require('express').Router();
const {movieBooking,cancelBooking } = require('../controller/bookingcontroller')
const {userAuth,checkRole } = require('../controller/authcontroller')

users.post('/ticketbooking',userAuth,checkRole(['user']), async(req, res)=>{
    await movieBooking(req, res)
});


users.post('/cancelbooking/:id', userAuth,checkRole(['user']),async(req, res)=>{
    await cancelBooking(req, res)
});














module.exports = users;