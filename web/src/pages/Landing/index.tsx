import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logoImf from "../../assets/images/logo.svg";
import landingImf from "../../assets/images/landing.svg";

import studyIson from "../../assets/images/icons/study.svg";
import giveClassesIson from "../../assets/images/icons/give-classes.svg";
import purpleHeartIson from "../../assets/images/icons/purple-heart.svg";

import './style.css'
import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total);
    })
  }, [
    //caso tenha uma variavel que sempre vámudar, informo ela aqui, quando ela alterar a função será executada
  ])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImf} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={landingImf} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIson} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIson} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIson} alt="Coração roxo" />
        </span>
      </div>
    </div>)
}

export default Landing