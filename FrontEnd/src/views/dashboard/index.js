import React, { useEffect, useState, useLocation } from "react";
import { Row, Col } from "react-bootstrap";
import Card from '../../components/Card'
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Chart from "react-apexcharts";
import CountUp from 'react-countup';
import { Alert } from 'react-bootstrap';

const Index = () => {
  const [dossiersAcceptes, setDossiersAcceptes] = useState([]);
  const [dossiersRefuses, setDossiersRefuses] = useState([]);
  const [dossiers, setDossiers] = useState([]);
  const [adhs, setAdhs] = useState([]);
  const [agents, setAgents] = useState([]);

  const [role, setRole] = useState('');
  useEffect(() => {
    setRole("admin");
    console.log(role);
    if (JSON.parse(localStorage.getItem("user")).role === 'ADMIN') {
      setRole("admin");
    }
    if (JSON.parse(localStorage.getItem("user")).role === 'AGENT') {
      setRole("agent");
    }
    if (JSON.parse(localStorage.getItem("user")).role === 'ADHERENT') {
      setRole("adherent");
    }
    fetchData();
    AOS.init({
      startEvent: "DOMContentLoaded",
      disable: function () {
        var maxWidth = 996;
        return window.innerWidth < maxWidth;
      },
      throttleDelay: 10,
      once: true,
      duration: 700,
      offset: 10,
    });
  }, []);

  const fetchData = async () => {
    try {
      const [responseAcc, responseRef, responseDossiers, responseAdhs, responseAgents] = await Promise.all([
        axios.get("http://localhost:8082/dossier_etat_acc"),
        axios.get("http://localhost:8082/dossier_etat_ref"),
        axios.get("http://localhost:8082/getDossiers"),
        axios.get("http://localhost:8082/api/v1/user/getAllUserAd"),
        axios.get("http://localhost:8082/api/v1/user/getAllUserAg"),
      ]);

      setDossiersAcceptes(responseAcc.data);
      setDossiersRefuses(responseRef.data);
      setDossiers(responseDossiers.data);
      setAdhs(responseAdhs.data);
      setAgents(responseAgents.data);
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    chart: {
      id: "dossiers-chart",
      type: "bar", // Change the type to "bar"
    },
    xaxis: {
      categories: [" Dossiers Accepter", "Dossiers Refuser", "Dossiers"],
    },
  };

  const series = [
    {
      name: "Nombre de dossiers",
      data: [dossiersAcceptes.length, dossiersRefuses.length, dossiers.length],
    },
  ];

  return (
    <div>
      {role === "admin" && (<Row>

        <Col lg="4" md="6" className="col-lg-3 col-md-6">
          <Card className="bg-soft-info">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-soft-info rounded p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-end">
                  <h2 className="counter"><CountUp start={0} end={agents.length} duration={3} /></h2>
                  Agents
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="4" md="6">
          <Card className="bg-soft-warning">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-soft-warning rounded p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-end">
                  <h2 className="counter"><CountUp start={0} end={adhs.length} duration={3} /></h2>
                  Adhérents
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="4" md="6">
          <Card className="bg-soft-danger">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-soft-danger rounded p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div className="text-end">
                  <h2 className="counter"><CountUp start={0} end={dossiers.length} duration={3} /></h2>
                  Demande
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md="12" lg="10">
          <Row>
            <Col md="12" >
              <div className="card" data-aos="fade-up" data-aos-delay="800">
                <div className="flex-wrap card-header d-flex justify-content-between">
                  <div className="d-flex align-items-center align-self-center">
                    <div className="d-flex align-items-center text-primary">
                      {/* Accepter content */}
                    </div>
                    <div className="d-flex align-items-center ms-3 text-info">
                      {/* Refuser content */}
                    </div>
                    <div className="d-flex align-items-center ms-3 text-success">
                      {/* Total content */}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart">
                    <Chart options={options} series={series} type="bar" height={350} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>)}
      {role === "agent" && (
        <Row>
    <div className="d-flex justify-content-around">
      <Col lg="4" md="6">
               <Card className="bg-soft-warning" >
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-warning rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={0} end={adhs.length} duration={3} /></h2>
                           Adhérents
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="bg-soft-danger">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-danger rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={0} end={dossiers.length} duration={3} /></h2>
                           Demande En cours
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            </div>

            <div className="container-fluid">
    <Alert variant="info mb-0" role="alert">
        <h4 className="alert-heading text-center"> Bienvenue dans votre espace personnel de l'application de gestion des remboursements</h4>
        <hr/>
        <p className="alert-heading text-center"> Cette application a été conçue pour faciliter la gestion des demandes de remboursement  des adhérents de manière efficace et </p>
        <p className="alert-heading text-center">  sécurisée. Vous pouvez utiliser cette application pour suivre l'état des demandes de remboursement,  </p>       
        <p className="alert-heading text-center">traiter les demandes en attente, et générer des rapports statistiques.</p>
        <hr/>
       
    </Alert>
</div>
        </Row>
      )}
      {role === "adherent" && (
        <Row>
          <div className="container-fluid">
            <Alert variant="info mb-0" role="alert">
              <h4 className="alert-heading text-center">Bienvenue dans votre espace personnel de l'application d'assurance</h4>
              <hr />
              <p className="alert-heading text-center">Cette application est là pour vous aider à gérer vos assurances de manière simple et sécurisée.</p>
              <p className="alert-heading text-center">Vous pouvez utiliser cette application pour voir vos contrats d'assurance,envoyer  </p>
              <p className="alert-heading text-center">des demandes de remboursement, suivre l'avancement de vos demandes.</p>
              <hr />

            </Alert>
          </div>
        </Row>)}
    </div>
  )
}

export default Index;
