//import React from 'react'
import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import Card from '../../../components/Card'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
//import {Link} from 'react-router-dom'
// img
//import avatars1 from '../../../assets/images/avatars/01.jpeg'
//import avatars2 from '../../../assets/images/avatars/avtar_1.png'
//import avatars3 from '../../../assets/images/avatars/avtar_2.png'
//import avatars4 from '../../../assets/images/avatars/avtar_3.png'
import avatars5 from '../../../assets/images/avatars/avtar_4.png'
//import { Navigate } from 'react-router-dom';
import axios from 'axios';
//import avatars6 from '../../../assets/images/avatars/avtar_5.png'
const provinces = [
   {
      name: "Tanger-Tétouan-Al Hoceima",
      cities: ["Tanger", "Tétouan", "Al Hoceima"],
   },
   {
      name: "L'Oriental",
      cities: ["Oujda", "Nador", "Berkane"],
   },
   {
      name: "Fès-Meknès",
      cities: ["Fès", "Meknès", "Taza"],
   },
   {
      name: "Rabat-Salé-Kénitra",
      cities: ["Rabat", "Salé", "Kénitra"],
   },
   {
      name: "Béni Mellal-Khénifra",
      cities: ["Béni Mellal", "Khénifra", "Azilal"],
   },
   {
      name: "Casablanca-Settat",
      cities: ["Casablanca", "Mohammadia", "Settat"],
   },
   {
      name: "Marrakech-Safi",
      cities: ["Marrakech", "Essaouira", "Safi"],
   },
   {
      name: "Drâa-Tafilalet",
      cities: ["Ouarzazate", "Errachidia", "Zagora"],
   },
   {
      name: "Souss-Massa",
      cities: ["Agadir", "Tiznit", "Taroudant"],
   },
   {
      name: "Guelmim-Oued Noun",
      cities: ["Guelmim", "Tan-Tan", "Sidi Ifni"],
   },
   {
      name: "Laâyoune-Sakia El Hamra",
      cities: ["Laâyoune", "Boujdour", "Es-Smara"],
   },
   {
      name: "Dakhla-Oued Ed-Dahab",
      cities: ["Dakhla", "Aousserd"],
   },
];


const UserAdd = () => {
   let navigate = useNavigate();
   const [birthplace, setBirthplace] = useState("");

   const handleBirthplaceChange = (event) => {
      setBirthplace(event.target.value);
   };
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [lname, setLname] = useState('');
   const [cin,setCin]=useState('');
   const [date,setDate]=useState('');
   const [email,setEmail]=useState('');
   //validation des donnes:
   const handleNameChange = (event) => {
      const value = event.target.value;
      const regex = /^[a-zA-Z]+$/;
      if (regex.test(value) || value === '') {
         setName(value);
         console.log(name);
      }
   };
   const handleLnameChange = (event) => {
      const value = event.target.value;
      const regex = /^[a-zA-Z]+$/;
      if (regex.test(value) || value === '') {
         setLname(value);
         console.log(lname);
      }
   };
   const handlePhoneChange = (event) => {
      const value = event.target.value;
      const regex = /^[0-9\b]+$/; // allow only numbers and backspace
      if (regex.test(value) || value === '') {
         setPhone(value);
         console.log(phone);
      }
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log("submit");
     console.log(name);
     console.log(lname);
     console.log(email);
     console.log(date);
     console.log(birthplace);
     console.log(cin);
      // handle form submission here
      axios.post('http://localhost:8082/api/v1/user/sa',{
      nom : name,
      prenom : lname,
      cin : cin,
      email :email,
      mobile : phone,
      role : "AGENT",
      date_de_naissance : date,
      lieu_de_naissance : birthplace
   }
      )
      .then((response1) => {
        console.log(response1.data);
        navigate('/dashboard/app/user-list');
      })
      .catch((error) => {
        console.log((error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString());
      });
   };


   return (
      <>

         <div>
            <Form onSubmit={handleSubmit}>
               <Row>
                  <Col xl="3" lg="4" className="">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Ajouter Un nouveau Agent</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>

                           <Form.Group className="form-group">
                              <div className="profile-img-edit position-relative">
                                 <Image className="theme-color-default-img  profile-pic rounded avatar-100" src={avatars5} alt="profile-pic" />
                              </div>
                           </Form.Group>
                           <Form.Group className="form-group">
                              <Form.Label htmlFor="cin">CIN:</Form.Label>
                              <Form.Control type="text" id="cin" placeholder="F12344" 
                              value={cin} onChange={(event) => setCin(event.target.value)} 
                              />
                           </Form.Group>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col xl="9" lg="8">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Informations d'Agent</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <div className="new-user-info">
                                 <div className="row">
                                    <Form.Group className="col-md-6 form-group">
                                       <Form.Label htmlFor="fname">Prenom:</Form.Label>
                                       <Form.Control type="text" id="fname" placeholder="Prenom" value={lname}
                                          onChange={handleLnameChange}
                                          required
                                       />
                                       <Form.Control.Feedback type="invalid">
                                          Veuillez entrer un prenom valide (lettres uniquement).
                                       </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="col-md-6 form-group">
                                       <Form.Label htmlFor="lname">Nom:</Form.Label>
                                       <Form.Control type="text" id="lname" placeholder="Nom" value={name}
                                          onChange={handleNameChange}
                                          required
                                       />
                                       <Form.Control.Feedback type="invalid">
                                          Veuillez entrer un nom valide (lettres uniquement).
                                       </Form.Control.Feedback>

                                    </Form.Group>
                                    <Form.Group className="col-md-6  form-group">
                                       <Form.Label htmlFor="mobno">Mobile Number:</Form.Label>
                                       <Form.Control type="text" id="mobno" placeholder="Téléphone"
                                          value={phone}
                                          onChange={handlePhoneChange}
                                          pattern="[0-9]{10}" // enforce 10-digit phone number
                                          required
                                       />
                                       <Form.Control.Feedback type="invalid">
                                          Veuillez entrer un numéro de téléphone valide (10 chiffres).
                                       </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="col-md-6  form-group">
                                       <Form.Label htmlFor="email">Email:</Form.Label>
                                       <Form.Control type="email" id="email" placeholder="Email"
                                       value={email} onChange={(event) => setEmail(event.target.value)}  required
                              />
                                    </Form.Group>
                                    <Form.Group className="col-md-6  form-group">
                                       <Form.Label htmlFor="altconno">Date Naissance:</Form.Label>
                                       <Form.Control type="date" id="altconno" 
                                       value={date} onChange={(event) => setDate(event.target.value)} required  />
                                    </Form.Group>

                                    <Form.Group className="col-md-6 form-group">
                                       <Form.Label htmlFor="city">Lieu Naissance:</Form.Label>
                                       <select name="type" className="selectpicker form-control" data-style="py-0" value={birthplace} onChange={handleBirthplaceChange}>
                                          <option value="">Sélectionnez le lieu de naissance</option>
                                          {provinces.map((province) => (
                                             <optgroup label={province.name}>
                                                {province.cities.map((city) => (
                                                   <option value={`${city}, ${province.name}`}>{city}, {province.name}</option>
                                                ))}
                                             </optgroup>
                                          ))}
                                       </select>
                                    </Form.Group>
                                 </div>
                                 <Button type="submit" variant="btn btn-primary">Ajouter Un nouveau Agent</Button>
                              
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Form>
         </div>

      </>
   )

}

export default UserAdd;