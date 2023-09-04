import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
//import styled from 'styled-components';

  //const StyledBaslik = styled.h1`
  //      font-size: 1.5em;
  //      text-align: center;
  //      color: palevioletred;
  //      width: 100%;
  //    `;



function Home() {

  //const history = useHistory();
  //const handleClick = () => {
  //  history.push('/order-pizza');
  //};

  return (
    <div className="home">
      <div className="image-container">
        <img alt="Teknolojik Yemekler" src="/images/mvp-banner.png" />
        <div className="image-text">
          <h1>TEKNOLOJİK YEMEKLER</h1>
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR! </p>
          <button><Link to="/order-pizza">ACIKTIM</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Home;

//<button onClick={handleClick}>ACIKTIM</button>
///Users/guzin/workintech/fsweb-s7-challenge-pizza/Assets/mvp-banner.png