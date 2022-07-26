

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const BioDataSchema = new Schema({
//     rsaPin: {
//         type: String,
       
//     },
//     firstName: {
//         type: String,
      
//     },
//     lastName:{
//         type: String,
        
//     },
//     gender:{
//         type: String,
        
//     },
   
//     emailAddress:{
//         type: String,
//     },
//     phoneNumber:{
//         type: Number,
        
//     },
//     employerName:{
//         type: String
//     },
//     paymentBatch:{
//         type: String
//     },
//     dob:{
//         type: String
//     }, 
//      dofa:{
//         type: String
//     }, 
//      edor:{
//         type: String
//     },
//     yearOfRetirement:{
//         type: String
//     },
    


// });


// const BioDataModel = mongoose.model("tblBioDatas", BioDataSchema);// name of collection and the scheema that represents the model

// module.exports = BioDataModel;

const Sequelize = require('sequelize');

const useSequelize = require('../database');


//  const tblBioData = useSequelize.define(
//      'tbl_biodata',{
//          rsaPin:{
//              type: Sequelize.STRING,
//              allowNull: false,
//              primaryKey:true
//          },
//          fisrtName: Sequelize.STRING,
//          lastName: Sequelize.STRING,
//          gender: Sequelize.STRING,
//          employerName: Sequelize.STRING,
//          dateOfBirth:Sequelize.DATE   
//         }

//     );
const tblBioData = Sequelize.define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
   
});
   

    module.exports = tblBioData;