const mongoose = require("mongoose");
const {Schema} = mongoose;

const HospitalSchema = new Schema({
    name: String,
});

const Hospital = mongoose.model('Hospital',HospitalSchema);

module.exports = Hospital;