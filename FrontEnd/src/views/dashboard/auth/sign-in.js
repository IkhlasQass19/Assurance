import React, { useState } from 'react'
import { Row, Col, Image, Form, Button, } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../../components/Card'
import auth1 from '../../../assets/images/auth/01.jpg'
import logo from '../../../assets/images/01.jpeg'
import axios from 'axios';
const SignIn = () => {
   let navigate = useNavigate();
   // Déclaration des états pour la gestion des données du formulaire
   const [login, setlogin] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   console.log(login);
   console.log(password);
   const handleSubmit = (event) => {
      event.preventDefault();
      // Requête HTTP pour vérifier les identifiants de l'utilisateur
      axios.post('http://localhost:8082/SignIn', {
         login: login,
         passwd: password,
      })
         // Si la requête est réussie, on récupère les informations de l'utilisateur
         .then((response) => {
            console.log(response.data);
            if (response.status === 200) {
               let user = response.data;
               let userString = JSON.stringify(user);

               // Stocker les informations de l'utilisateur dans un objet de local
               window.localStorage.setItem('user', userString);
               console.log(user.changepass);
               if (user.changepass==='TRUE') {
                  navigate("/dashboard");
               } else {
                  navigate("/auth/EditPassword");
               }
            }
         })
         // Si la requête échoue, afficher un message d'erreur

         .catch((error) => {
            setError('Login ou mot de passe incorrect');
         });
   }
   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                              <Link to="#" className="navbar-brand d-flex align-items-center mb-3">
                                 <Image src={logo} alt="images" height="40" width="40" />
                                 <h4 className="logo-title ms-3">AssuMa</h4>
                              </Link>
                              <h2 className="mb-2 text-center">S'identifier</h2>
                              <p className="text-center">Connectez-vous pour rester connecté.</p>
                              <Form onSubmit={handleSubmit}>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="login" className="">Login</Form.Label>
                                          <Form.Control type="text" className="" id="login" aria-describedby="login" placeholder=" " value={login} onChange={(event) => setlogin(event.target.value)} />
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Mot de passe</Form.Label>
                                          <Form.Control type="password" className="" id="password" aria-describedby="password" placeholder=" " value={password} onChange={(event) => setPassword(event.target.value)} />
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button /*</div>onClick={() => history.push('/dashboard')} */ onClick={handleSubmit} type="button" variant="btn btn-primary">Se Connecter</Button>
                                 </div>
                                 <div className="d-flex justify-content-center">
                                    <p className='rr text-danger'>{error}</p>
                                 </div>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  <div className="sign-bg">
                     <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                           <circle cx="215.5" cy="199" r="170" fill="#3B8AFF" />
                           <circle cx="245.5" cy="199" r="150" fill="#FFF" />
                        </g>
                     </svg>
                  </div>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images" />
               </Col>
            </Row>
         </section>
      </>
   )
}

export default SignIn
