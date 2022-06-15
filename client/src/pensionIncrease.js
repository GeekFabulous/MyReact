import React from "react";
import {
  FloatingLabel,
  Form,
  Container,
  Table,
  Col,
  FormGroup,
  Modal,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function PensionIncrease() {
  const [listOfRetirees, setListOfRetirees] = useState([]);
  //the first 'listOfRetirees is the state and the setListOfretirees is the fucntion to modify the state

  const [rsaPin, setRsaPin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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

  useEffect(() => {
    Axios.get("http://localhost:3001/getRetirees").then((response) => {
      setListOfRetirees(response.data);
    });
  }, []);

  const createRetiree = () => {
    handleCloseAddRetiree();
    Axios.post("http://localhost:3001/createRetiree", {
      firstName: firstName, //we are passing the othernames state on the right
      lastName, //we dont have to equate it. we can just call the state directly like this. same thing
      gender,
      emailAddress,
      employerName,
      phoneNumber,
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
          firstName: firstName,
          lastName,
          gender,
          emailAddress,
          employerName,
          phoneNumber,
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

  return (
    <Router>
      <div>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Card.Header>
            <h1>Pension Increase Module</h1>
          </Card.Header>
        </Container>
        <br></br>

        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xs={7}>
              <Form.Select variant="secondary">
                <option>Single Computation</option>
                <option>Bulk Computation</option>
                <option></option>
              </Form.Select>
            </Col>
          </Row>
          <pre></pre>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xs={3}>
              <FormGroup>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Enter RSA PIN"
                >
                  <Form.Control type="text" placeholder="PEN123456789012" />
                </FloatingLabel>
              </FormGroup>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Enter Start Date"
                >
                  <Form.Control type="date" placeholder="01/01/2070" />
                </FloatingLabel>
              </FormGroup>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Enter End Date"
                >
                  <Form.Control type="date" placeholder="01/01/2070" />
                </FloatingLabel>
              </FormGroup>
            </Col>
          </Row>
          <pre></pre>

          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="primary " disabled={true}>
                SEARCH
              </Button>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Table striped bordered hover data={data}>
            <thead>
              <tr>
                <th>S/No</th>
                <th>PIN</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>MDA Name</th>
                <th>Payment Batch</th>
                <th>DOB</th>
                <th>DOFA</th>
                <th>EDOR/DOD</th>
                <th>YEAR OF RETIRE or DEATH</th>
                <th>SALARY STRUCTURE</th>
                <th>GL AS AT June 2004</th>
                <th>STEP AS AT June 2004</th>
              </tr>
            </thead>
            <tbody>
              {listOfRetirees.map((retiree) => {
                return (
                  <tr>
                    <td>1</td>
                    <td>{retiree.rsaPin}</td>
                    <td> {retiree.firstName}</td>
                    <td>{retiree.lastName}</td>
                    <td>{retiree.gender}</td>
                    <td> {retiree.employerName}</td>
                    <td> {retiree.paymentBatch}</td>
                    <td>{retiree.dob}</td>
                    <td>{retiree.dofa}</td>
                    <td>{retiree.edor}</td>
                    <td>{retiree.yearOfRetirement}</td>
                    <td>
                      <Form.Select>
                        <option>HAPPS</option>
                        <option>UASS</option>
                        <option>Contis</option>
                      </Form.Select>
                    </td>

                    <td>
                      <Form.Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                      </Form.Select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>

        {/* //compute button Modal */}
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="success"
            size="lg"
            disabled={false}
            onClick={handleShowCompute}
          >
            COMPUTE
          </Button>
          <Modal show={showCompute} onHide={handleCloseCompute}>
            <Modal.Header closeButton>
              <Modal.Title>Compute Pension Increase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <FormGroup>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Enter RSA PIN"
                    contentEditable={false}
                  >
                    <Form.Control
                      type="text"
                      placeholder="PEN123456789012"
                      onChange={(event) => {
                        setRsaPin(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="First Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Last Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <Form.Select
                    controlId="floatingInputGrid"
                    label="Gender"
                    placeholder="Gender"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  >
                    <option>Male</option>
                    <option>Female</option>

                    <Form.Control type="text" placeholder="PEN123456789012" />
                  </Form.Select>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Email Address"
                  >
                    <Form.Control
                      type="text"
                      placeholder="email"
                      onChange={(event) => {
                        setEmailAddress(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Employer Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Employer Name"
                      onChange={(event) => {
                        setEmployerName(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Payment batch"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Payment batch"
                      onChange={(event) => {
                        setPaymentBatch(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Date of Birth"
                  >
                    <Form.Control
                      type="date"
                      placeholder="DOB"
                      onChange={(event) => {
                        setDob(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Date of First Appointment"
                  >
                    <Form.Control
                      type="date"
                      placeholder="DOFA"
                      onChange={(event) => {
                        setDofa(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Estimated Date of Retirement"
                  >
                    <Form.Control
                      type="date"
                      placeholder="EDOR"
                      onChange={(event) => {
                        setEdor(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Year of Retirement"
                  >
                    <Form.Control
                      type="date"
                      placeholder="year of retirement"
                      onChange={(event) => {
                        setYearOfRetirement(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddRetiree}>
                Close
              </Button>
              <Button variant="primary" onClick={createRetiree}>
                Add Retiree
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        <pre></pre>

        {/* //List all retiree button and modal */}
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="secondary" size="lg" onClick={listAllRetirees}>
            List all retirees
          </Button>

          <Modal show={showAllRetirees} onHide={handleCloseAllRetirees}>
            <Modal.Header closeButton>
              <Modal.Title>List of All retirees</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlid="exampleForm.ControlTextarea1"
                >
                  {listOfRetirees.map((retiree) => {
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
                  })}
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAllRetirees}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseAllRetirees}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        <pre></pre>

        {/* //add retiree button and modal */}
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={handleShowAddretiree}>
            Add Retiree
          </Button>
          <Modal show={showAddRetiree} onHide={handleCloseAddRetiree}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Retiree</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <FormGroup>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Enter RSA PIN"
                  >
                    <Form.Control
                      type="text"
                      placeholder="PEN123456789012"
                      onChange={(event) => {
                        setRsaPin(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="First Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>

                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Last Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <Form.Select
                    controlId="floatingInputGrid"
                    label="Gender"
                    placeholder="Gender"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  >
                    <option>Male</option>
                    <option>Female</option>

                    <Form.Control type="text" placeholder="PEN123456789012" />
                  </Form.Select>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Email Address"
                  >
                    <Form.Control
                      type="text"
                      placeholder="email"
                      onChange={(event) => {
                        setEmailAddress(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Employer Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Employer Name"
                      onChange={(event) => {
                        setEmployerName(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Payment batch"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Payment batch"
                      onChange={(event) => {
                        setPaymentBatch(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Date of Birth"
                  >
                    <Form.Control
                      type="date"
                      placeholder="DOB"
                      onChange={(event) => {
                        setDob(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Date of First Appointment"
                  >
                    <Form.Control
                      type="date"
                      placeholder="DOFA"
                      onChange={(event) => {
                        setDofa(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Estimated Date of Retirement"
                  >
                    <Form.Control
                      type="date"
                      placeholder="EDOR"
                      onChange={(event) => {
                        setEdor(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <pre></pre>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Year of Retirement"
                  >
                    <Form.Control
                      type="date"
                      placeholder="year of retirement"
                      onChange={(event) => {
                        setYearOfRetirement(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddRetiree}>
                Close
              </Button>
              <Button variant="primary" onClick={createRetiree}>
                Add Retiree
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    </Router>
  );
}

export default PensionIncrease;
