const mongoose = require("mongoose");
const {Schema} = mongoose;

const patientSchema = new Schema({
    name: String,
    address: String,
    email: String,
    phoneNumber: String,
    password: String,
    photo: String,
    psychiatristID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Psychiatrist', strictPopulate: false},
    hospitalId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', strictPopulate: false},
});
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;