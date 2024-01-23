const express = require('express');
const router = express.Router();

const Hospital = require('../model/hospitalModel');

router.post('/hospital',async(req,res)=>{
   const name = req.body;
   const data = await Hospital.create(name);
   res.status(200).json({data});

});

module.exports = router
