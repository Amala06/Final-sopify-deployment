// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
// import { Link, useNavigate } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";
// import "../styles/signup.css";
// import axios from "axios";
// // import { useHistory } from "react-router-dom";
// import Toast from "react-bootstrap/Toast";
// import { useToast } from "@chakra-ui/react";
// // import Navigation from "../components/Navigation";

// import Navbar from "../components/Navbar/Navbar";
// import img1 from "../Images/internSignup2.png";
// import emailjs from "@emailjs/browser";

// // import {useSignupUserMutation} from '../services/appApi'

// const Signup = () => {
//   const [email, setEmail] = React.useState("");
//   const [show, setShow] = React.useState(false);
//   const [password, setPassword] = React.useState("");
//   const [nameOfUser, setName] = React.useState("");
//   // const [pic, setPic] = React.useState("pic-here");
//   const [loading, setLoading] = React.useState(false);
//   const [showpopup, setShowpopup] = React.useState(true);
//   const [phone, setPhone] = React.useState("");
//   const [IsIntern, setIsIntern] = React.useState(false);
//   const [status, setstatus] = React.useState(false);

//   // console.log({ email });
//   // console.log({ password });
//   // console.log({ phone });
//   // console.log({ nameOfUser });
//   // console.log({ IsIntern });
//   const handleClick = (e) => {
//     e.preventDefault();
//     setShow(!show);
//   };
//   const handleCheck = (e) => {
//     e.preventDefault();
//     let checked = e.target.checked;
//     if (checked) {
//       setIsIntern(true);
//       setstatus(true);
//     } else {
//       setIsIntern(false);
//       setstatus(false);
//     }
//   };

//   const toast = useToast();

//   const history = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (!nameOfUser || !email || !password || !IsIntern) {
//       toast({
//         title: "Please Fill all the Feilds",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });

//       return;
//     }

//     console.log({ nameOfUser, email, password, phone, IsIntern });
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const { data } = await axios.post(
//         "/api/user",
//         {
//           name: nameOfUser,
//           email,
//           password,
//           phone,
//           isIntern: IsIntern,
//           status: status,
//         },
//         config
//       );
//       console.log(data);
//       toast({
//         title: "Registration Successful",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });

//       localStorage.setItem("userInfo", JSON.stringify(data));
//           try {
//             await emailjs
//               .sendForm(
//                 "service_uizbllj",
//                 "template_1hpy3qb",
//                 e.target,
//                 "sf2MnwCTretSZoHYo"
//               )
//               .then(
//                 (result) => {
//                   console.log("result", result.text);
//                 },
//                 (error) => {
//                   console.log("error", error.text);
//                 }
//               );
//             toast({
//               title: "Notification sent to client",
//               status: "success",
//               duration: 5000,
//               isClosable: true,
//               position: "bottom",
//             });
//           } catch (error) {
//             console.log(error);
//           }

//       history("/internDashboard");
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
// console.log(e.target);
//     emailjs
//       .sendForm(
//         "service_uizbllj",
//         "template_1hpy3qb",
//         e.target,
//         "sf2MnwCTretSZoHYo"
//       )
//       .then(
//         (result) => {
//           console.log("result",result.text);
//         },
//         (error) => {
//           console.log("error",error.text);
//         }
//       );
//     toast({
//       title: "Notification sent to client",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//       position: "bottom",
//     });
//   };

//   return (
//     <>
//       {" "}
//       <Navbar />
//       <Container>
//         <Row>
//           <Col md={5} className="signup__bg">
//             <img className="internsignupimage" src={img1} />
//           </Col>
//           <Col
//             md={7}
//             className="d-flex align-items-center justify-content-center flex-direction-column"
//           >
//             {/* </Col> */}
//             <Form style={{ width: "80%", maxWidth: 500 }}>
//               <br />
//               <Form.Group className="mb-3" controlId="formBasicName">
//                 <Form.Label>Enter Intern's Name</Form.Label>
//                 <Form.Control
//                   required
//                   type="name"
//                   placeholder="Enter name"
//                   onChange={(e) => setName(e.target.value)}
//                   value={nameOfUser}
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Enter Intern's Email</Form.Label>
//                 <Form.Control
//                   required
//                   type="email"
//                   placeholder="Enter email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Create Password</Form.Label>
//                 <Form.Control
//                   required
//                   type={show ? "text" : "password"}
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   value={password}
//                 />{" "}
//                 <button
//                   style={{
//                     height: "27px",
//                     background: "#efefef",
//                     border: "transparent",
//                   }}
//                   onClick={handleClick}
//                 >
//                   {show ? "Hide" : "Show"}
//                 </button>
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formBasicPhone">
//                 <Form.Label>Enter Intern's Phone</Form.Label>
//                 <Form.Control
//                   required
//                   type="phone"
//                   placeholder="Enter phone "
//                   onChange={(e) => setPhone(e.target.value)}
//                   value={phone}
//                 />
//               </Form.Group>
//               {/* <Form.Group className="mb-3" controlId="formBasicPhone">
//                 <Form.Label>Enter your Intern</Form.Label>
//                 <Form.Control
//                   required
//                   // type="phone"
//                   placeholder="Enter true "
//                   onChange={(e) => setIsIntern(e.target.value)}
//                   value={IsIntern}
//                 />
//               </Form.Group> */}

//               <Form.Group className="mb-3" controlId="formBasicPhone">
//                 <Form.Label></Form.Label>
//                 <Form.Check
//                   inline
//                   label=" I am willing to dedicate my time and effort to serve as an
//                   intern"
//                   name="group1"
//                   type="checkbox"
//                   id={`inline-checkbox-1`}
//                   onChange={handleCheck}
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit" onClick={submitHandler}>
//                 {/* Signup<Spinner animation="border" /> */}
//                 Sign Up
//               </Button>
//               {/* <form onSubmit={sendEmail}>
//                 <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   // style={{ display: "none" }}
//                 />
//                 <input
//                   type="name"
//                   name="name"
//                   value={nameOfUser}
//                   // style={{ display: "none" }}
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   // style={{ display: "none" }}
//                 />
//                 {console.log(email, password, nameOfUser)}
//                 <input type="submit" value="Notify the client " />
//               </form> */}

//               <div className="py-4">
//                 <p className="text-center">
//                   Already have an account ?{" "}
//                   <Link to="/login">
//                     <u style={{ color: "blue" }}> Login</u>
//                   </Link>
//                 </p>
//               </div>
//             </Form>{" "}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Signup;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar/Navbar";
import img1 from "../Images/internSignup2.png";
import './signup.css';
const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [nameOfUser, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [IsIntern, setIsIntern] = React.useState(false);
  const [status, setstatus] = React.useState(false);
  const [ref, setRef] = React.useState();
  const [em, setEm] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    let checked = e.target.checked;
    setIsIntern(checked);
    setstatus(checked);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uizbllj",
        "template_1hpy3qb",
        e.target,
        "sf2MnwCTretSZoHYo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast({
      title: "Notification sent to client",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    setEm(true);
  };

  const toast = useToast();
  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!nameOfUser || !email || !password || !IsIntern) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    console.log({ nameOfUser, email, password, phone, IsIntern });
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        {
          name: nameOfUser,
          email,
          password,
          phone,
          isIntern: IsIntern,
          status: status,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      // Send the email here using EmailJS
      // sendEmail(e);

      history("/internDashboard");
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: error.response?.data?.message || "Something went wrong!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={5} className="signup__bg">
            <img className="internsignupimage" src={img1} />
          </Col>
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center flex-direction-column"
          >
            <Form style={{ width: "80%", maxWidth: 500 }}>
              <br />
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Enter Intern's Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={nameOfUser}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Intern's Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  required
                  type={show ? "text" : "password"}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  style={{
                    height: "27px",
                    background: "#efefef",
                    border: "transparent",
                  }}
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="ref"
                  placeholder="Confirm Password "
                  onChange={(e) => setRef(e.target.value)}
                  value={ref}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhofne">
                <Form.Label>Enter Intern's Phone</Form.Label>
                <Form.Control
                  required
                  type="phone"
                  placeholder="Enter phone "
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label></Form.Label>
                <Form.Check
                  inline
                  label="I am willing to dedicate my time and effort to serve as an intern"
                  name="group1"
                  type="checkbox"
                  id={`inline-checkbox-1`}
                  onChange={handleCheck}
                />
              </Form.Group>

              {em ? (
                <>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={submitHandler}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={submitHandler}
                    disabled
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </Form>{" "}
          </Col>
        </Row>
        <form onSubmit={sendEmail}>
          <input
            type="email"
            name="email"
            value={email}
            style={{ display: "none" }}
            // The "email" state variable should be used here
            // onChange={(e) => setEmail(e.target.value)} // Update the "email" state with the input value
          />
          <input
            type="name"
            name="name"
            value={nameOfUser}
            style={{ display: "none" }}

            // The "email" state variable should be used here
            // onChange={(e) => setName(e.target.value)} // Update the "email" state with the input value
          />
          <input
            type="ref"
            name="ref"
            value={ref}
            style={{ display: "none" }}
            // The "email" state variable should be used here
            // onChange={(e) => setRef(e.target.value)} // Update the "email" state with the input value
          />

          {console.log(email)}
          <Button
            type="submit"
            id="email_button"
            variant="info"
            // style={{ marginTop: "-4rem", marginLeft: "40rem" }}
          >
            Notify the client
          </Button>
          {/* <input type="submit" value="Notify the client " /> */}
        </form>
      </Container>
    </>
  );
};

export default Signup;
