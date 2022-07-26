const express = require("express");
const app = express();// we use this to apply middlewares, telling your apis to start, creating routes
// const mongoose = require("mongoose");
// const BioDataModel = require("./models/tblBioData");
// const Sequelize = require("sequelize");

const bodyParser = require("express");
const mysql = require("mysql2");
const cors = require("cors"); //this is going to allow us to the apis with our react frontend

const db = mysql.createPool({
    host:"localhost",
    user:"cbrd",
    password:"Cbrd2020$",
    database:"cbrd_schema"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=> {
    const sqlInsert = "INSERT INTO tbl_biodata (rsaPin, firstName, lastName, gender, email, employerName, paymentbatch, dob, dofa, edor, yearOfRetirement) VALUES ('PEN000557712', 'imaan233', 'ishaku', 'Femmale', 'dogara@pencom.gov.ng','PenCom', 'batch 3','dob','dofa','edordata','yeardata')";

    db.query(sqlInsert,(error,result)=>{
        console.log("error",error);
        console.log("result",result);
        res.send("Express");
    });
});

app.get("/getRetirees", (req,res)=>{
    const sqlAllRetirees = "SELECT * FROM cbrd_schema.tbl_biodata";
    db.query(sqlAllRetirees,(error,result) => {
        
        res.send(result);
    });

});

app.post("/createRetiree", (req,res) =>{
    const {rsaPin, firstName, lastName, gender, email, employerName, paymentbatch, dob, dofa, edor, yearOfRetirement } = req.body;
    const sqlCreateRetiree = "INSERT INTO tbl_biodata (rsaPin, firstName, lastName, gender, email, employerName, paymentbatch, dob, dofa, edor, yearOfRetirement) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlCreateRetiree,[rsaPin, firstName, lastName, gender, email, employerName, paymentbatch, dob, dofa, edor, yearOfRetirement], (error,result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.listen(3001, () => {

    console.log("SERVER IS RUNNING FINE!");
});
 
// mongoose.connect(

//     // "mongodb+srv://imaan:imaan123@myfirstcluster.ec3t7.mongodb.net/cbrdDatabase?retryWrites=true&w=majority"
//     "mongodb+srv://imaan:imaan123@myfirstcluster.ec3t7.mongodb.net/cbrdDatabase?retryWrites=true&w=majority"
//     );
    // mongoose.connect(
    //     process.env.MONGO_URL,
       
    //     (err) => {
    //      if(err) console.log(err) 
    //      else console.log("mongdb is connected");
    //     }
    //   );
// app.get("/getRetirees", (req,res) =>{
//     //inside here; you write all the logic you want it to load when successful
//     //req- request can get info from frontend and with res (result) we can send info from backend to the frontend
//     BioDataModel.find({}, (err, result) => {
//         if(err){
//             res.json(err);  
//         }else{
//             res.json(result);//this is used to parse "result" into json, the function will send back the result we got
//         }
//     });//the callback function will return 2 arguments the error and the result
// });

// app.post("/createRetiree",async (req,res) =>{
// const retiree  = req.body;
// const newRetiree = new BioDataModel(retiree);
// await newRetiree.Create();

// res.json(retiree)
// })

// app.listen(3001, () => {

//     console.log("SERVER IS RUNNING FINE!");
// });