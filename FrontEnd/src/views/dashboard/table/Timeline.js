import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Timeline = () => {
  const [dossierDetails, setDossierDetails] = useState([]);
  const location = useLocation();
  const ndoss = new URLSearchParams(location.search).get('ndoss');

  useEffect(() => {
    // Fonction pour récupérer les détails du dossier
    const fetchDossierDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/dossier_etat_details?ndoss=${ndoss}`);
        setDossierDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Appel de la fonction pour récupérer les détails du dossier
    if (ndoss) {
      fetchDossierDetails();
    }
  }, [ndoss]);

  // Fonction pour formater la date et l'heure
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString();
  };

  return (
    <>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="iq-timeline m-0 d-flex align-items-center justify-content-between position-relative">
                <ul className="list-inline p-0 m-0 w-100">
                  {/* Parcourir les détails du dossier */}
                  {dossierDetails.map((detail, index) => (
                    <li key={index}>
                      <div className="time">
                        <span>{formatDateTime(detail[6])}</span> {/* Utilisation de la fonction formatDateTime */}
                      </div>
                      <div className="content">
                        <div className="timeline-dots new-timeline-dots"></div>
                        <h6 className="mb-1">{detail[3]}</h6>
                        <div className="d-inline-block w-100">
                          <p>{detail[7]}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Timeline;
