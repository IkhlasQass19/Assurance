import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const BootstrapTable = () => {
  const [dossiers, setDossiers] = useState([]);

  useEffect(() => {
    const fetchDossiers = async () => {
      try {
        const response = await axios.get("http://localhost:8082/getDossiers");
        setDossiers(response.data);
      } catch (error) {
        console.error(error);
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
                <h4 className="card-title">Liste des demandes</h4>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive mt-4">
                <Table striped id="basic-table" className="mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Num dossier</th>
                      <th>Adherent immatriculation</th>
                      <th>Date depot</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dossiers.map((dossier) => (
                      <tr key={dossier.ndoss}>
                        <td>{dossier.ndoss}</td>
                        <td>{dossier.adhImm}</td>
                        <td>{dossier.dateDepot}</td>
                        <td>
                        <Link to={`../dashboardAgent/pdf?num=${dossier.adhImm}&num2=${dossier.ndoss}`}>Action</Link>

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
