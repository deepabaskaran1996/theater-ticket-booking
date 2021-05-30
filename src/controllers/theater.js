const Theater=require("../models/theater")

exports.create = (req,res) => {
    const theater = new Theater(req.body);
    theater.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        } else {
            res.json({data})
        }
    })
}

exports.listOrders = (req,res) => {
    Theater.find()
    .populate('screen')
        .exec((err,theater) => {
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }
            res.json(theater)
        })
}