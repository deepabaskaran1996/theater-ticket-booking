const ticketbookings = require("../models/bookingmodel")

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
     if(seats.booked !==  true){
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
           {booked: false});
  res.send("successfully canceled your tickets")
  }

  const theaterName = async (req, res) => {
    theaters.find(
      { theaterName: req.query.theaterName}
    )
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: "No products found"
          })
        }
        res.json({ data })
      })
  }

    module.exports = {movieBooking,cancelBooking,theaterName}

