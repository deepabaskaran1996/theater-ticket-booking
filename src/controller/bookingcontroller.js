const ticketbookings = require("../model/bookingmodel")

const movieBooking = async (req, res) => {
    var Booking = new ticketbookings({
        theatreName: req.body.theatreName,
        movieTitle: req.body.movieTitle,
        moviLanguage: req.body.moviLanguage,
        theatreScreen:req.body.theatreScreen,
        ticketPrice: req.body.ticketPrice,
        theatreSeats: req.body.theatreSeats,
     });
     console.log(Booking);
     if(ticketbookings.booked !==  true){
      return res.status(403).json({
          message:"first check your availability seats",
          success:false
      })
  }
     Booking.save(function(err, docs){
       if ( err ) throw err;
       console.log("Show Assigned Successfully");
       res.json(docs);
     });
    }

     const cancelBooking = async(req,res) =>{
      const id = req.params.id;
      await ticketbookings.findOneAndUpdate({ _id: id },
           {booked: true});
  res.send("successfully canceled your tickets")
  }

    module.exports = {movieBooking,cancelBooking}

