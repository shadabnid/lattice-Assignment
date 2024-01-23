const mongoose = require("mongoose");
const {Schema} = mongoose;

const psychiatristSchema  = new Schema({
    name: String,
    hospitalID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', strictPopulate: false}, 
    
});

const Psychiatrist = mongoose.model('Psychiatrist', psychiatristSchema);

module.exports = Psychiatrist;