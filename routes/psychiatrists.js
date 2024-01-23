const express = require('express');
const router = express.Router();
const Hospital = require('../model/hospitalModel');
const Psychiatrist = require('../model/psychiatristModel');
const Patient = require('../model/patientModel');

router.get('/fetch', async (req, res) => {

  try {
    const { hospitalId } = req.body;


    const hospital = await Hospital.findById(hospitalId, 'name');

    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    const psychiatristCount = await Psychiatrist.countDocuments({ hospitalID: hospitalId });


    const patientCount = await Patient.countDocuments({ hospitalId: hospitalId });

    const psychiatrists = await Psychiatrist.find({ hospitalID: hospitalId }, '_id name')

    const response = {
      hospitalName: hospital.name,
      totalPsychiatristCount: psychiatristCount,
      totalPatientsCount: patientCount,
      psychiatristDetails: await Promise.all(psychiatrists.map(async (psychiatrist) => {
        const patientsCount = await Patient.countDocuments({ psychiatristID: psychiatrist._id });
        return {
          id: psychiatrist._id,
          name: psychiatrist.name,
          patientsCount: patientsCount,
        };
      }))
    }

    res.json(response);
  } catch (error) {
    console.error('Error fetching hospital details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
