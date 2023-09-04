import React from 'react';
import styled from 'styled-components';
import './Success.css';

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Chelsea Market', cursive;
  text-align: center;
  width:100%;
  color: white;
  background-color: red;
`;

const StyledParag = styled.p`
  background-color: red;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  text-align: center;
  width: 100%;
  color: black;

`

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
//const Wrapper = styled.section`
//  padding: 0;
//  background: red;
//`;

// Use them like any other React component – except they're styled!


function OrderSuccess() {
  return (
    <div className="siparis-success">
        <Title>TEKNOLOJİK YEMEKLER</Title>
        <StyledParag>TEBRİKLER! SİPARİŞİNİZ ALINDI!</StyledParag>
    </div>
  );
}

export default OrderSuccess;
