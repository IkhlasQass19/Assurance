import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";

//progressbar
import Progress from "../../../components/progress.js";

const BootstrapTable = () => {
  const [dossiers, setDossiers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8082/dossier_etat_ref");
      setDossiers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Les demandes de remboursement refuser</h4>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive mt-4">
                <Table striped id="basic-table" className="mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Numero dossier</th>
                      <th>Adherent immatriculation </th>
                      <th>Agent immatriculation</th>
                      <th>Montant</th>
                      <th>Date depot</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dossiers.map((dossier) => (
                      <tr key={dossier.ndoss}>
                        <td>{dossier.ndoss}</td>
                        <td>{dossier.adhImm}</td>
                        <td>{dossier.agentImm}</td>
                        <td>{dossier.montant}</td>
                        <td>{dossier.dateDepot}</td>
                        <td>
                        <Link
                            to={`../dashboard/table/TimeAdmin?ndoss=${dossier.ndoss}`}
                          >
                           Détails 
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
