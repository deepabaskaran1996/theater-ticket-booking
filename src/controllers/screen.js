const Screens=require("../models/screen")

exports.create = (req,res) => {
    const screen = new Screens(req.body);
    screen.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        } else {
            res.json({data})
        }
    })
}
