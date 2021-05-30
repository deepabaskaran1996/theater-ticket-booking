const seats= require('../models/seat') 

exports.create = (req,res) => {
    const s = new seats(req.body);
    s.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        } else {
            res.json({data})
        }
    })
}


exports.finding = (req,res) => {
    seats.update({
        "Data.seat_no":"1A"
    },
    {
        $set:{
            "Data.available":false
        }
    })
        .exec((err,data) =>{
            if(err){
                return res.status(400).json({
                    error:"No seats found"
                })
            }
            res.json({data})
        })
}


// exports.finding = (req,res) => {
//     seats.findOneAndUpdate({
//         "_id":"60b0ad195767920588a7af1c",
//         "Data.seat_no":"1A"
//     },{
//         $set :{
//             "Data.available":false
//         }
//     },{
//         new: true
//     }
//     )
// }
// const id = req.params.id;
//       await ticketbookings.findOneAndUpdate({ _id: id },
//            {available: false});
//   res.send("successfully canceled your tickets")
//   }