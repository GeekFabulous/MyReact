
import React from "react";

import { Card, Typography, CardContent, 
  Button, 
  Container,
   TextField, 
   NativeSelect, 
   FormControl,
  OutlinedInput,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Box,
Collapse,
IconButton,

} from "@mui/material"; 

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownIcon';

// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUpIcon';

// import {KeyboardDatePicker,
// MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

import { BrowserRouter as Router,  } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function PensionIncreaseMui () {
  const [listOfRetirees, setListOfRetirees] = useState([]);
  //the first 'listOfRetirees is the state and the setListOfretirees is the fucntion to modify the state

  const [rsaPin, setRsaPin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [employerName, setEmployerName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentBatch, setPaymentBatch] = useState("");
  const [dob, setDob] = useState("");
  const [dofa, setDofa] = useState("");
  const [edor, setEdor] = useState("");
  const [yearOfRetirement, setYearOfRetirement] = useState("");

  const [showAllRetirees, setShowAllRetirees] = useState(false);
  const [showAddRetiree, setShowAddRetiree] = useState(false);
  const [showCompute, setShowCompute] = useState(false);

  const handleCloseAllRetirees = () => setShowAllRetirees(false);
  const handleShowAllRetirees = () => setShowAllRetirees(true);

  const handleCloseAddRetiree = () => setShowAddRetiree(false);
  const handleShowAddretiree = () => setShowAddRetiree(true);

  const handleShowCompute = () => setShowCompute(true);
  const handleCloseCompute = () => setShowCompute(false);

  const [showSearchSingle, setShowSearchSingle] = useState(false);
  const handleShowSearchSingle = () => setShowSearchSingle(true);

  const [showSearchBulk, setShowSearchBulk] = useState(false);
  const handleShowSearchBulk = () => setShowSearchBulk(true);

  const toggle=() =>{ return !handleShowSearchBulk};


  useEffect(() => {
    Axios.get("http://localhost:3001/getRetirees").then((response) => {
      setListOfRetirees(response.data);
    });
  }, []);

  const createRetiree = () => {
    handleCloseAddRetiree();
    Axios.post("http://localhost:3001/createRetiree", {
      rsaPin: rsaPin,
      firstName: firstName, //we are passing the othernames state on the right
      lastName, //we dont have to equate it. we can just call the state directly like this. same thing
      gender,
      emailAddress,
      employerName,
      // phoneNumber,
      paymentBatch,
      dob,
      dofa,
      edor,
      yearOfRetirement,
    }).then((response) => {
      alert("new retiree added successfully");
      setListOfRetirees([
        ...listOfRetirees,
        {
          rsaPin: rsaPin,
          firstName: firstName,
          lastName,
          gender,
          emailAddress,
          employerName,
          paymentBatch,
          dob,
          dofa,
          edor,
          yearOfRetirement,
        },
      ]);
    });
  };

  const listAllRetirees = () => {
    handleShowAllRetirees();
    {
      listOfRetirees.map((retiree) => {
        return (
          <div>
            <h1> LastName: {retiree.lastName}</h1>
            <h1> Other Names: {retiree.otherNames}</h1>
            <h1> Gender: {retiree.gender}</h1>
            <h1> email Address: {retiree.emailAddress}</h1>
            <h1> Employer Name: {retiree.employerName}</h1>
            <br></br>
          </div>
        );
      });
    }
  };
  const data = { nodes: listAllRetirees };

    return (<div >
      
        <div> 
            <div style={{display: 'flex', justifyContent: 'center', marginTop:'10vh',alignContent:'center'} }>
         <Card >  <Container ><h1>Pension Increase Module</h1></Container>  <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Enter Date Details
      </Typography>
      <NativeSelect   
            >
                <option value={10}>Single Computation</option>
                <option value={20}>Bulk Computation</option>
        </NativeSelect>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
     
        
      <TextField id="standard-basic" label="Enter RSA PIN" variant="standard" />
      </Typography>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker 
            size = "small"
            disableToolbar
            variant = "inline"
            inputVariant="outlined"
         
            >

            </KeyboardDatePicker>
        </MuiPickersUtilsProvider> */}
  
    
  <FormControl sx={{ width: '25ch' }}>
  <OutlinedInput placeholder="Please enter Start Date" />
  {/* <MyFormHelperText /> */}
</FormControl>

<FormControl sx={{ width: '25ch' }}>
  <OutlinedInput placeholder="Please enter end Date" />
  {/* <MyFormHelperText /> */}
</FormControl>
        
      <div style={{alignItems:'center', justifyContent:'center', display:'flex'}}>
        <br></br>
        <Button variant="contained"  sx={{ m: 2, ml: 3}} >Compute</Button>
        </div>
      
    </CardContent></Card>
    </div>
    
       <br/>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/No</TableCell>
            <TableCell>Rsa PIN</TableCell>

            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gender</TableCell>

            <TableCell align="right">MDA Name</TableCell>
            <TableCell align="right">Payment Batch</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">YEAR OF RETIREMENT</TableCell>
            <TableCell align="right">SALARY STRUCTURE</TableCell>
            <TableCell align="right">GL AS AT JUNE 2004</TableCell>
            <TableCell align="right">STEP AS AT JUNE 2004</TableCell>

          
          
          
          </TableRow>
        </TableHead>
        <TableBody>
        {listOfRetirees.map((retiree) => {
                return (
                  <tr>
                    <TableCell>1</TableCell>
                    <TableCell>{retiree.rsaPin}</TableCell>
                    <TableCell> {retiree.firstName}</TableCell>
                    <TableCell>{retiree.lastName}</TableCell>
                    <TableCell>{retiree.gender}</TableCell>
                    <TableCell> {retiree.employerName}</TableCell>
                    <TableCell> {retiree.paymentBatch}</TableCell>
                    <TableCell>{retiree.dob}</TableCell>
                    <TableCell>{retiree.dofa}</TableCell>
                    <TableCell>{retiree.edor}</TableCell>
                    <TableCell>{retiree.yearOfRetirement}</TableCell>
                 

                    
                    
                  </tr>
                );
              })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
       
        
       
        </div>
        
      );

}
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? true: true}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default PensionIncreaseMui;
// export default function PensionIncreaseMui() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }