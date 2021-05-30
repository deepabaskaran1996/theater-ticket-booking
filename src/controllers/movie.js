const Movies=require("../models/movie")

exports.create = (req,res) => {
    const movie = new Movies(req.body);
    movie.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        } else {
            res.json({data})
        }
    })
}