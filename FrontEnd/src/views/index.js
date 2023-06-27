import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import topImage from '../assets/images/healthinsurance.jpg';
import logo from '../assets/images/01.png';

const Index = () => {
  return (
    <Fragment>

      <div
        className="header"
        style={{
          background: `url(${topImage})`,
          backgroundSize: "65% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: " left",
          //right
          height: "100vh",
        }}
      >
        <div className="main-content">
          <h1>Bienvenue sur notre application !</h1>
          <p>
            Nous sommes là pour vous offrir une expérience fluide et pratique dans la gestion de votre assurance maladie. De la gestion des remboursements aux accès à vos dossiers de santé personnels, nous sommes là pour vous accompagner. Découvrez nos fonctionnalités et prenez le contrôle de votre parcours de santé.
          </p>
          <Link to="/auth/sign-in">
          <button type="button">Accéder à l'espace personnel</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

const styles = `
.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 10px;
  width: 400px; 
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #5289ae;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button {
  padding: 10px 20px;
  background-color: #5289ae;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logo img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

body {
  background-color: white; /* Définissez ici la couleur de fond souhaitée */
}

.navbar {
  height: 120px;
  width: 90%;
  display: flex;
  position: fixed;
  backdrop-filter: blur(30px);
  top: 0;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: flex-end;
  flex-direction: row;
  margin-top: -25px;
  padding: 0px;
  color: rgb(0, 1, 0); /* Couleur du texte en noir */
  font-weight: bold; /* Texte en gras */
  font-size: 1.2em; /* Taille de police plus grande */
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

li {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-left: 70px;
}

li a {
  text-decoration: none;
  border-radius: 10px;
  padding: 5px 5px;
  font-size: large;
  color:#088ab2d8;
  text-align: center;
  font-family: Georgia, serif;
  
}



.header .main-content {
  position: absolute;
  top: 15%;
  right: 15px; // Ajuster la position du texte à droite
  transform: translate(0, -50%);
  max-width: 600px;
  padding: 50px;
  text-align: center;
  color: #031420;
  //background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color:#088ab2d8;
  font-family: Georgia, serif;
}

.header p {
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: cursive;
  color:#031420;
}
`;

const IndexWithStyles = () => (
  <Fragment>
    <style>{styles}</style>
    <Index />
  </Fragment>
);

export default IndexWithStyles;
