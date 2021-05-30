const express=require("express")

const {create} = require("../controllers/screen");
const router = express.Router();

router.post("/screen/create",create)

module.exports=router