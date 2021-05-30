const users = require('express').Router();
const {movieBooking,cancelBooking,theaterName} = require('../controllers/bookingcontroller')
const {userAuth,checkRole } = require('../controllers/authcontroller')

users.post('/ticketbooking',userAuth,checkRole(['user']), async(req, res)=>{
    await movieBooking(req, res)
});


users.post('/cancelbooking/:id', userAuth,checkRole(['user']),async(req, res)=>{
    await cancelBooking(req, res)
});

users.get('/',async(req, res)=>{
    await theaterName(req, res)
});














module.exports = users;