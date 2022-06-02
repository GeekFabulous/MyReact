
const mongoose = require("mongoose");

const BioDataSchema = new mongoose.Schema({
    otherNames: {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true, 
    },
    gender:{
        type: String,
        required: true,
    },
   
    emailAddress:{
        type: String,
    },
    phoneNumber:{
        type: Number,
        
    },
    
    employerName:{
        type: String
    },
});
const BioDataModel = mongoose.model("tblBioData", BioDataSchema);// name of collection and the scheema that represents the model

module.exports = BioDataModel;