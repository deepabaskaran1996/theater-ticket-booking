

    var assigning = new ticketbooking({
        theatreName: req.body.TName,
        movieTitle: req.body.MTitle,
        fromDate: req.body.FDate,
        toDate: req.body.TDate,
        moviLanguage: req.body.MLanguage,
        ticketPrice: req.body.TPrice,
        theatreSeats: req.body.TSeats,
     });
     console.log(assigning);
     assigning.save(function(err, docs){
       if ( err ) throw err;
       console.log("Show Assigned Successfully");
       res.json(docs);
     });
