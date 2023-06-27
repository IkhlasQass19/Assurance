import React, { useState } from 'react'
import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../../components/Card'
// img
import auth2 from '../../../assets/images/auth/01.jpg'
import logo from '../../../assets/images/01.jpeg'
import axios from 'axios';



const EditPassword = () => {
   let navigate = useNavigate();
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      console.log(password);
   };

   const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
      console.log(confirmPassword);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
         setError('Les mots de passe ne correspondent pas.');
         console.log('Les mots de passe ne correspondent pas.');
      } else {
         let user = JSON.parse(localStorage.getItem("user"));
         console.log(user.login);
         axios.put('http://localhost:8082/SignIn/UpdatePasswd', {
            "login": user.login,
            "newpasswd": password
         })
            .then((response) => {
               console.log(response.data);
               navigate("/dashboard");
            })
            .catch((error) => {
               setError((error.response && error.response.data && error.response.data.message) ||
                  error.message ||
                  error.toString());
            });
      }
   };
   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth2} className="img-fluid gradient-main animated-scaleX" alt="images" />
               </Col>
               <Col md="6" className="p-0">
                  <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                     <Card.Body>
                        <Link to="#" className="navbar-brand d-flex align-items-center mb-3">
                           <Image src={logo} alt="images" height="40" width="40" />
                           <h4 className="logo-title ms-3">AssuMa</h4>
                        </Link>
                        <h2 className="mb-2">Modifier le mot de passe</h2>
                        <p>Entrez votre nouveau mot de passe .</p>
                        <Form onSubmit={handleSubmit}>
                           <Row>
                              <Col lg="12" className="col-lg-12">
                                 <Form.Group className="floating-label">
                                    <Form.Label htmlFor="password" className="form-label">Mot de passe</Form.Label>
                                    <Form.Control type="password" className="form-control" id="email" aria-describedby="email" placeholder=" "
                                       value={password} onChange={handlePasswordChange}
                                    />
                                 </Form.Group>
                              </Col>
                           </Row>
                           <Row>
                              <Col lg="12" className="col-lg-12">
                                 <Form.Group className="floating-label">
                                    <Form.Label htmlFor="Rpassword" className="form-label">Répéter Mot de passe :</Form.Label>
                                    <Form.Control type="password" className="form-control" id="emaill" aria-describedby="email" placeholder=" "
                                       value={confirmPassword} onChange={handleConfirmPasswordChange}
                                    />
                                 </Form.Group>
                              </Col>
                           </Row>
                           <p className="error-message text-danger">{error}</p>
                           <Button type="submit" className="mt-3" variant="primary">Modifier</Button>
                        </Form>
                     </Card.Body>
                  </Card>
                  <div className="sign-bg sign-bg-right">
                     <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                           <circle cx="215.5" cy="199" r="170" fill="#3B8AFF" />
                           <circle cx="245.5" cy="199" r="150" fill="#FFF" />
                        </g>
                     </svg>
                  </div>
               </Col>
            </Row>
         </section>
      </>
   )
}

export default EditPassword
