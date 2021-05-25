const mongoose = require('mongoose');


var bookingSchema = mongoose.Schema({
    theatreName: String,
    movieTitle: String,
    fromDate: String,
    toDate: String,
    moviLanguage: String,
    theatreSeats: String,
    ticketPrice: String,
    });

    module.exports = mongoose.model('ticketbooking',bookingSchema)


