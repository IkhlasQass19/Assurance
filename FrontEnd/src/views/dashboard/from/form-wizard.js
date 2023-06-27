import React, { useState } from 'react'
import { Row, Col, Form, Image } from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import axios from  'axios';


// img
import imgsuccess from '../../../assets/images/pages/img-success.png'
const FormWizard = () => {
    const [show, AccountShow] = useState('A');
    const [facture, setFacture] = useState(null);
    const [ordonnance, setOrdonnance] = useState(null);
    const [feuilleDeSoin, setFeuilleDeSoin] = useState(null);
    const [autreDocument, setAutreDocument] = useState("null");
    const handleFile1Change = (event) => {
        setFacture(event.target.files[0]);
        console.log("hi1");
    };
    const handleFile2Change = (event) => {
        setOrdonnance(event.target.files[0]);
        console.log("hi2");
    };
    const handleFile3Change = (event) => {
        setFeuilleDeSoin(event.target.files[0]);
        console.log("hi3");
    };
    const handleFile4Change = (event) => {
        setAutreDocument(event.target.files[0]);
        console.log("hi4");
    };
   
    const handleSubmit = (event) => {
        let x=JSON.parse(localStorage.getItem("user")).login;
        console.log(x);
        event.preventDefault();
        const formData = new FormData();
        formData.append('Imm',  x)
        formData.append('facture', facture);
        formData.append('ordonnance', ordonnance);
        formData.append('feuille-de-soin', feuilleDeSoin);
        formData.append('autre-document', autreDocument);
        try {
            const response = axios.post('http://localhost:8082/addDossier', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(AccountShow('Image'));
            console.log("hhhh");
            console.log(response.data);
        }

        catch (error) {
            console.error('Error uploading files:', error);
            // Handle error, such as displaying an error message to the user
        }
    };
    return (
        <>
            <div>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Demande de remboursement</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form id="form-wizard1" className="text-center mt-3" onSubmit={handleSubmit}>
                                    <ul id="top-tab-list" className="p-0 row list-inline">
                                        <li id="account" className={` ${show === 'Image' ? ' active done' : ''}  ${show === 'Account' ? ' active done' : ''} ${show === 'A' ? 'active' : ''} col-lg-4 col-md-6 text-start mb-2 active`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M16.334 2.75H7.665C4.644 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.635 21.25 7.665 21.25H16.333C19.364 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.364 2.75 16.334 2.75Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.9946 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.9896 8.2041H11.9996" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>

                                                </div>
                                                <span>Information</span>
                                            </Link>
                                        </li>

                                        <li id="payment" className={`${show === 'Image' ? ' active done' : ''} col-lg-4 col-md-6 mb-2 text-start`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M7.666 21.25H16.335C19.355 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.365 2.75 16.335 2.75H7.666C4.636 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.636 21.25 7.666 21.25Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 16.0861V7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.748 12.3223L12 16.0863L8.25195 12.3223" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>
                                                </div>

                                                <span>fichiers</span>
                                            </Link>
                                        </li>
                                        <li id="confirm" className={`${show === 'Image' ? ' active ' : ''} col-lg-4 col-md-6 mb-2 text-start`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span>Terminer</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                        <div className="bd-example">
                                            <Alert variant="success mb-0" role="alert">
                                                <h4 className="alert-heading"> Information !</h4><hr />
                                                <p>Avant de continuer, nous vous encourageons vivement à vérifier que les fichiers que vous allez télécharger sont les bons et complets.</p>
                                                <p>Veuillez vous assurer que vous téléchargez la facture, l'ordonnance et la feuille de soin correctes.</p>
                                                <p>Assurez-vous également que ces fichiers sont au format PDF valide.</p>


                                                <h5 className="alert-heading">Cela garantira que votre demande sera traitée avec précision et efficacité. </h5>
                                                <hr />
                                                <div class="text-end">

                                                    <p>Merci de votre coopération !</p>
                                                </div>

                                            </Alert>
                                        </div>
                                        <br />

                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Account')} >Suivant</button>
                                    </fieldset>

                                    <fieldset className={`${show === 'Account' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Télécharger des fichiers PDF :</h3>
                                                </div>
                                                <div className="col-5">
                                                    {/* <h2 className="steps">Étape 3 - 4</h2> */}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Téléchargez votre facture :</label>
                                                <input type="file" name="facture" className="form-control" onChange={handleFile1Change} accept=".pdf" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Téléchargez votre ordonnance :</label>
                                                <input type="file" name="ordonnance" className="form-control" onChange={handleFile2Change} accept=".pdf" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Téléchargez votre feuille de soin :</label>
                                                <input type="file" name="feuille-de-soin" className="form-control" onChange={handleFile3Change} accept=".pdf" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Téléchargez votre autre document :</label>
                                                <input type="file" name="AutreDocument" className="form-control" onChange={handleFile4Change} accept=".pdf" />
                                            </div>
                                        </div>
                                        <input type="submit"
                                            className="btn btn-primary next action-button float-end"
                                            value="envoyer"
                                        />

                                        <button type="button"
                                            name="previous"
                                            className="btn btn-dark previous action-button-previous float-end me-1"
                                            value="Previous"
                                            onClick={() => AccountShow('A')} >Précédent</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4 text-left">Terminer</h3>
                                                </div>
                                                <div className="col-5">
                                                    {/* <h2 className="steps">Step 4 - 4</h2> */}
                                                </div>
                                            </div>
                                            <br /><br />
                                            <h2 className="text-success text-center"><strong>RÉUSSITE !</strong></h2>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col-3"> <Image src={imgsuccess} className="img-fluid" alt="fit-image" /> </div>
                                            </div>
                                            <br /><br />
                                            <div className="row justify-content-center">
                                                <div className="col-7 text-center">
                                                    <h5 className="purple-text text-center">Votre dossier a été déposé avec succès.</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FormWizard
