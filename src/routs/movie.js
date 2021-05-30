const express=require("express")

const {create} = require("../controllers/movie");
const router = express.Router();

router.post("/movie/create",create)

module.exports=router