const express = require('express');
const router = express.Router();
const patientValidator = require('../validator/patientValidator');
const Hospital = require('../model/hospitalModel');
const Psychiatrist = require('../model/psychiatristModel');
const Patient = require('../model/patientModel');

router.post('/register', async (req, res) => {
  try {
    const { hospitalId, psychiatristID } = req.body;
    const { name, address, email, phoneNumber, password, photo } = req.body;
    const { error } = patientValidator.validate({ name, address, email, phoneNumber, password, photo });

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const hospital = await Hospital.findById(hospitalId);
    const psychiatrist = hospital ? await Psychiatrist.findById(psychiatristID) : null;

    if (!hospital || !psychiatrist) {
      return res.status(404).json({ error: 'Hospital or Psychiatrist not found.' });
    }



    const newPatient = await Patient.create({ name, address, email, phoneNumber, password, photo, psychiatristID ,hospitalId});

    res.status(200).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
