
import './App.css';
import { useState, useEffect } from "react";
import dashboard from './dashboard';
//the useEffet hook is just a function that runs immediately the page is loaded
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [listOfRetirees , setListOfRetirees] =  useState([]);   //the first 'listOfRetirees is the state and the setListOfretirees is the fucntion to modify the state  
  const [otherNames, setOtherNames] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [employerName, setEmployerName] = useState("")



  useEffect(() => {
    Axios.get("http://localhost:3001/getRetirees").then((response) =>{
    setListOfRetirees(response.data);
    })
  }, []);


  const createRetiree = () => {
    Axios.post("http://localhost:3001/createRetiree",
     {
      otherNames: otherNames, //we are passing the othernames state on the right
      lastName, //we dont have to equate it. we can just call the state directly like this. same thing
      gender, 
      emailAddress, 

      employerName
    }).then((response) =>{
      alert("new retiree added successfully");
      setListOfRetirees([...listOfRetirees,{
      otherNames: otherNames, 
      lastName, 
      gender, 
      emailAddress, 
      employerName
      },
    ]);
    });
  };

  

  return (
    <div className="App">

      
      <div>
        <h1>Register New Retiree</h1>
        
        <br></br>
        <input 
          type = "text" 
          placeholder="Last Name..." 
          onChange={(event) =>
            {setOtherNames(event.target.value);}} /> 
        <br>
        {/* (above) this is a very common thing you do in react to get data from an input */}
        </br>
        <input 
          type = "text" 
          placeholder="Other Names..."
          onChange={(event) =>
            {setLastName(event.target.value);}} />
        <br></br>
        <input 
          type = "gender" 
          placeholder="Gender.." 
          onChange={(event) =>
            {setGender(event.target.value);}}/>
        <br></br>
        <input 
          type = "text" 
          placeholder="email Address..." 
          onChange={(event) =>
            {setEmailAddress(event.target.value);}}/>
        <br></br>
        <input 
          type = "text" 
          placeholder="Employer Name..." 
          onChange={(event) =>
            {setEmployerName(event.target.value);}}/>  
        <br></br>
        <br></br>
        <button onClick = {createRetiree} className="btn btn-primary">Add new Retiree</button>
      </div>
      <div className="retireesDisplay">
      <h1>List of All Retirees</h1>
      {listOfRetirees.map((retiree) =>{
        return(
          <div>
            
            <h1> LastName: {retiree.lastName}</h1>
            <h1> Other Names: {retiree.otherNames}</h1>
            <h1> Gender: {retiree.gender}</h1>
            <h1> email Address: {retiree.emailAddress}</h1>
            <h1> Employer Name: {retiree.employerName}</h1>
            <br></br>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
