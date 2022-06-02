const express = require("express");
const app = express();// we use this to apply middlewares, telling your apis to start, creating routes
const mongoose = require("mongoose");
const BioDataModel = require('./models/tblBioData');

const cors = require('cors'); //this is going to allow us to the apis with our react frontend

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://imaan:imaan123@myfirstcluster.ec3t7.mongodb.net/cbrdDatabase?retryWrites=true&w=majority"
    );

app.get("/getRetirees", (req,res) =>{
    //inside here; you write all the logic you want it to load when successful
    //req- request can get info from frontend and with res (result) we can send info from backend to the frontend
    BioDataModel.find({}, (err, result) => {
        if(err){
            res.json(err);  
        }else{
            res.json(result);//this is used to parse 'result' into json, the function will send back the result we got
        }
    });//the callback function will return 2 arguments the error and the result

});

app.post("/createRetiree",async (req,res) =>{
const retiree  = req.body
const newRetiree = new BioDataModel(retiree);
await newRetiree.save();

res.json(retiree)
})

app.listen(3001, () => {

    console.log("SERVER IS RUNNING FINE!");
});