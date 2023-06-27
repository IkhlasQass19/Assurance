import React, { Fragment, useEffect, useState } from 'react'
import FsLightbox from 'fslightbox-react';

import { Row, Col, Image, Tab } from 'react-bootstrap'
import Card from '../../../components/Card'

import { Link } from 'react-router-dom'
// img

import avatars11 from '../../../assets/images/avatars/01.jpeg'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'



import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon8 from '../../../assets/images/icons/08.png'

import icon5 from '../../../assets/images/icons/05.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'
const UserProfile = () => {
   const [user, setUser] = useState('');
   const [role, setRole] = useState('');
   const [desc, setDesc] = useState('');
   useEffect(() => {
      let a=JSON.parse(localStorage.getItem("user")).login;
      console.log(a);
      fetch(`http://localhost:8082/api/v1/user/getUserByImm/${a}`)
         .then(response => response.json())
         .then(data => setUser(data))
         .catch(error => console.error(error));
      if (JSON.parse(localStorage.getItem("user")).role === 'ADMIN') {
         setRole("Administrateur d'assurance");
         setDesc("un administrateur d'assurance expérimenté, chargé de gérer efficacement les aspects administratifs des polices d'assurance pour assurer la satisfaction des clients et le respect des réglementations de l'industrie de l'assurance.");

      }
      if (JSON.parse(localStorage.getItem("user")).role === 'AGENT') {
         setRole("Agent d'assurance");

         setDesc("un agent d'assurance compétent et expérimenté, chargé d'aider les clients à trouver les meilleurs produits d'assurance pour répondre à leurs besoins spécifiques. Mon rôle consiste à fournir des conseils d'expert, à aider les clients à comprendre les termes et les conditions des polices d'assurance, à gérer les réclamations et à assurer une satisfaction client élevée.");

      }
      if (JSON.parse(localStorage.getItem("user")).role === 'USER') {
         setRole("Adhérent");
         setDesc("membre d'un groupe ou d'une organisation qui offre une assurance collective à ses membres pour les protéger contre les risques spécifiques couverts par cette assurance, tels que la santé, la vie ou l'invalidité.");
      };
   }, []);
   console.log(JSON.parse(localStorage.getItem("user")).role);


   return (
      <Fragment>
         <FsLightbox

            sources={[icon4, shap2, icon8, shap4, icon2, shap6, icon5, shap4, icon1]}
         />
         <Tab.Container defaultActiveKey="first">
            <Row>
               <Col lg="12">
                  <Card>
                     <Card.Body>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                           <div className="d-flex flex-wrap align-items-center">
                              <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                 <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
                                 <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
                                 <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
                                 <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
                                 <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic" />
                                 <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
                              </div>
                              <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                 <h4 className="me-2 h4">{user.nom} {user.prenom}</h4>
                                 <span>{role}</span>
                              </div>
                           </div>

                        </div>
                     </Card.Body>
                  </Card>
               </Col>

               <Col lg="6">
                  <Tab.Content className="profile-content">
                     <Tab.Pane eventKey="g" id="profile-feed">


                     </Tab.Pane>
                     <Tab.Pane eventKey="second" id="profile-activity">

                     </Tab.Pane >
                     <Tab.Pane eventKey="third" id="profile-friends">

                     </Tab.Pane >
                     <Tab.Pane eventKey="first" id="profile-profile">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Profile</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="text-center">
                                 <div className="user-profile">
                                    <Image className="theme-color-default-img  rounded-pill avatar-130 img-fluid" src={avatars11} alt="profile-pic" />
                                    <Image className="theme-color-purple-img rounded-pill avatar-130 img-fluid" src={avatars22} alt="profile-pic" />
                                    <Image className="theme-color-blue-img rounded-pill avatar-130 img-fluid" src={avatars33} alt="profile-pic" />
                                    <Image className="theme-color-green-img rounded-pill avatar-130 img-fluid" src={avatars55} alt="profile-pic" />
                                    <Image className="theme-color-yellow-img rounded-pill avatar-130 img-fluid" src={avatars66} alt="profile-pic" />
                                    <Image className="theme-color-pink-img rounded-pill avatar-130 img-fluid" src={avatars44} alt="profile-pic" />
                                 </div>
                                 <div className="mt-3">
                                    <h3 className="d-inline-block">{user.nom} {user.prenom}</h3>
                                    <p className="d-inline-block pl-3"> - {role}</p>
                                    <p className="mb-0">{desc}</p>
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>

                     </Tab.Pane >
                  </Tab.Content>
               </Col>
               <Col lg="6">

                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">À propos de l'utilisateur</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="mt-2">
                           <h6 className="mb-1">immatriculation:</h6>
                           <p>{user.immatriculation}</p>
                        </div>
                        <div className="mt-2">
                           <h6 className="mb-1">Cin:</h6>
                           <p>{user.cin}</p>
                        </div>
                        <div className="mt-2">
                           <h6 className="mb-1">Email:</h6>
                           <p><Link to="#" className="text-body"> {user.email}</Link></p>
                        </div>
                        <div className="mt-2">
                           <h6 className="mb-1">Numéro de téléphone :</h6>
                           <p><Link to="#" className="text-body" target="_blank"> {user.mobile} </Link></p>
                        </div>
                        <div className="mt-2">
                           <h6 className="mb-1">Date de Naissance:</h6>
                           <p><Link to="#" className="text-body">{user.date_de_naissance}</Link></p>
                        </div>
                        <div className="mt-2">
                           <h6 className="mb-1">Lieu de Naissance:</h6>
                           <p><Link to="#" className="text-body">{user.lieu_de_naissance}</Link></p>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Tab.Container>
      </Fragment>
   )

}
export default UserProfile;