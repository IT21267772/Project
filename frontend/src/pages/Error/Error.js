import React, { useContext, useEffect } from 'react';
import Footer from '../../components/store/Footer'
import error from '../../assets/404.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Header from '../../components/store/Header';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;

  img {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 30px;
    color: #9980FA;
    text-transform: uppercase;
  }

`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 25px;
  padding: 10px;
  border: 2px solid #333;
  border-radius: 5px;
  color: #333;
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: white;;
  }

  svg {
    margin-right: 3px;
  }
`;

const Error = () => {

  return (
    <Container>
    <Header />
      <Wrapper>
          <img src={error} height='300px' />
          <h1>Page not found</h1>
          <Link to="../" style={{textDecoration: "none", color: "black"}}>
              <Button>
                  Back to Home
              </Button>
          </Link>
      </Wrapper>
    <Footer />
    </Container>
  )
}

export default Error