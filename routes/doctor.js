const express = require('express');
const router = express.Router();

const Hospital = require('../model/hospitalModel');
const Psychiatrist = require('../model/psychiatristModel');

router.post('/registerpsychiatrist',async(req,res)=>{
   const {name,hospitalID} = req.body;
   const hospital = await Hospital.findById(hospitalID);
   if (!hospital) {
    return res.status(404).json({ error: 'Hospital not found.' });
  }
  const PsychiatristData = await Psychiatrist.create({name,hospitalID:hospitalID});
  
  res.status(200).json(PsychiatristData);

});

module.exports = router
