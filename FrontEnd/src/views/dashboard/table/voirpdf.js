import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation,  useNavigate } from 'react-router-dom';

const PDFViewer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const num = searchParams.get('num');
  const num2 = searchParams.get('num2');
  const [pdfUrls, setPdfUrls] = useState([]);
  const [showRejectionReason, setShowRejectionReason] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showAcceptInputs, setShowAcceptInputs] = useState(false);
  const [percentage, setPercentage] = useState('');
  const [amount, setAmount] = useState('');

  // Récupérer la valeur de 'agentImm' depuis le localStorage
  const agentImm = JSON.parse(localStorage.getItem("user")).login;
  let navigate = useNavigate();
  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const pdfPromises = [
          axios.get('http://localhost:8082/getFichier', {
            params: { num, num2, type: 'facture' },
            responseType: 'arraybuffer',
          }),
          axios.get('http://localhost:8082/getFichier', {
            params: { num, num2, type: 'ordonnance' },
            responseType: 'arraybuffer',
          }),
          axios.get('http://localhost:8082/getFichier', {
            params: { num, num2, type: 'feuille-de-soin' },
            responseType: 'arraybuffer',
          }),
        ];

        const responses = await Promise.all(pdfPromises);

        const pdfUrls = responses.map((response) => {
          const blob = new Blob([response.data], { type: 'application/pdf' });
          return URL.createObjectURL(blob);
        });

        setPdfUrls(pdfUrls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPDFs();
  }, [num, num2]);

  const handleReject = () => {
    setShowRejectionReason(true);
  };

  const handleRejectionReasonChange = (event) => {
    setRejectionReason(event.target.value);
  };

  const handleSendRejectionReason = async () => {
    try {
      await axios.put('http://localhost:8082/refuser', null, {
        params: {
          ndoss: num2,
          msg: rejectionReason,
          agentImm:agentImm, // Remplacez par la valeur appropriée pour l'agent immobilier
        },
      });
      console.log('Rejection reason sent successfully');
      

      // Réinitialise la barre de texte et masque la section de la cause de refus
      setRejectionReason('');
      setShowRejectionReason(false);
    } catch (error) {
      console.error('Error sending rejection reason:', error);
    }
    navigate("/dashboard/traiterdos"); 
  };

  const handleAccept = () => {
    setShowAcceptInputs(true);
  };

  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSendAccept = async () => {
    try {
      await axios.put('http://localhost:8082/accepter', null, {
        params: {
          ndoss: num2,
          total: amount,
          per: parseFloat(percentage),
          agentImm: agentImm, // Remplacez par la valeur appropriée pour l'agent immobilière
        },
      });
      console.log('Acceptance sent successfully');
      // Réinitialise les inputs et masque la section des inputs pour l'acceptation
      setPercentage('');
      setAmount('');
      setShowAcceptInputs(false);
    } catch (error) {
      console.error('Error sending acceptance:', error);
    }
    navigate("/dashboard/traiterdos"); 
  };

  return (
    <div>
      {pdfUrls.length > 0 ? (
        pdfUrls.map((pdfUrl, index) => (
          <div key={index}>
            <h3>PDF {index + 1}</h3>
            <iframe src={pdfUrl} title={`PDF Viewer ${index + 1}`} width="80%" height="500px"></iframe>
          </div>
        ))
      ) : (
        <p>Aucun PDF disponible.</p>
      )}
      <div style={{ marginTop: '20px' }}>
        {showAcceptInputs ? (
          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              value={percentage}
              onChange={handlePercentageChange}
              placeholder="Pourcentage"
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Montant"
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <button
              style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
              onClick={handleSendAccept}
            >
              Envoyer
            </button>
          </div>
        ) : showRejectionReason ? (
          <div style={{ marginTop: '10px' }}>
            <textarea
              value={rejectionReason}
              onChange={handleRejectionReasonChange}
              placeholder="Cause de refus"
              style={{ marginTop: '10px', padding: '5px' }}
            />
            <button
              style={{
                marginTop: '10px',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
              onClick={handleSendRejectionReason}
            >
              Envoyer
            </button>
          </div>
        ) : (
          <div>
            <button
              style={{
                marginRight: '10px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
              }}
              onClick={handleAccept}
            >
              Accepter
            </button>
            <button
              onClick={handleReject}
              style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}
            >
              Refuser
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
