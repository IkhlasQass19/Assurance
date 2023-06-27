import React, { useEffect, useState } from "react";
import { Row, Col, Image, Table } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";

//progressbar
import Progress from "../../../components/progress.js";

const BootstrapTable = () => {
  const [dossiers, setDossiers] = useState([]);

//  const agentImm =JSON.parse(localStorage.getItem("user")).login;

  useEffect(() => {
    let agentImm =JSON.parse(localStorage.getItem("user")).login;
    console.log(agentImm);
    const fetchDossiers = async () => {
      try {
        const response = await axios.get("http://localhost:8082/dossier_adh?adhImm="+agentImm);
     
        setDossiers(response.data);
       // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDossiers();
  }, []);

  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Suivi demande de remboursement</h4>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive mt-4">
                <Table striped id="basic-table" className=" mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Numero dossier</th>
                      <th>DateDepot</th>
                      <th>montant</th>
                      <th>etat dossier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dossiers.map((dossier) => (
                      <tr key={dossier.ndoss}>
                        <td>{dossier.ndoss}</td>
                        <td>
                          <div className="text-info">{dossier.dateDepot}</div>
                        </td>
                        <td>{dossier.montant}</td>
                        <td>
                        <Link to={`../dashboard/historique?ndoss=${dossier.ndoss}`}>
                        {dossier.etat_doss}
                        </Link>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BootstrapTable;
