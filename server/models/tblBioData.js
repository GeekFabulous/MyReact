
const mongoose = require("mongoose");

const BioDataSchema = new mongoose.Schema({
    rsaPin: {
        type: String,
        required: true,
    },
    firstName: {
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
    paymentBatch:{
        type: String
    },
    dob:{
        type: String
    }, 
     dofa:{
        type: String
    }, 
     edor:{
        type: String
    },
    yearOfRetirement:{
        type: String
    },
    


});
const BioDataModel = mongoose.model("tblBioDatas", BioDataSchema);// name of collection and the scheema that represents the model

module.exports = BioDataModel;