var mongoose = require("mongoose");


const seat = []; 

let chars = ["A","B","C","D","E","F"]; 

for(var i = 1 ;i < 11 ;i++){ 

  for(var j = 0 ;j < 6 ;j++){ 

    seat.push({seat_no:(i+chars[j]),available:true}); 
   }
}


var SeatSchema = new mongoose.Schema({
    Data : {type: Array,default:seat},
    price: {type:Number,required:true}
})



//Model Register
module.exports = mongoose.model("seats", SeatSchema);