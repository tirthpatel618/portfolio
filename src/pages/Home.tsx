import React from 'react';
import FadeIn from "../components/FadeIn";
import styled from '@emotion/styled';
import Typewriter from 'typewriter-effect';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <HeaderContainer id="home">
      <TextContainer>
        <h1>          
        <FadeIn delay={`200ms`}>
          <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString('Hi! I\'m Rosanne.')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(10000)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
            options={{ delay: 230 }} // Add a delay of 1000 milliseconds
          />
          </FadeIn>
        </h1>
          <h2>
          <FadeIn delay={`600ms`}>
          I’m a full stack software engineer <br/> developing digital solutions for complex <br/> problems.
          </FadeIn>
          </h2>
        <FadeIn delay={`900ms`}>
          <div style={{marginTop:'0px'}}>
        <DescContainer>
          <GridContainer>
            <h2>currently</h2>
            <h3>studying</h3>
            <p>a Software Engineer Intern <br/>  @ <mark>BMO Financial Group</mark></p>
            <h1>Computer Science & Artifical Intelligence <br/> @ <mark>the University of Waterloo</mark></h1>
          </GridContainer>
        </DescContainer>
        </div>
        </FadeIn>
      </TextContainer>

    </HeaderContainer>
  );
};

const HeaderContainer = styled.main`
  position: relative;
  height: 520px;
  overflow: hidden;
  display: flex;
  width: 1000px
  
`;

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 130px;
  flex-direction: column;
  z-index: 10;
  width: 100%;
  
  > h1 {
    font-family: 'Karla', sans-serif; /* Adding the Google Font 'Karla' */
    font-size: 88px;
    font-weight: 400;
    text-align: left;
    color: black;
    width: 70vw;
    margin-top: -25px;
    margin-bottom: 10px; /* Remove the spacing underneath the text */
    
    margin-right: 10%;
    letter-spacing: 1px;
  }
  > h2 {
    font-family: 'Karla', sans-serif; 
    font-size: 46px !important;
    font-weight: 400;
    text-align: left;
    color: #202020;
    width: 70vw;
    margin-top: 0px;
    margin-bottom: 10px; 
    
    margin-right: 10%;
    letter-spacing: 1px;
  }
`;

const DescContainer = styled.div`
  width: 1000px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; /* Set grid template rows to create a 2x2 grid */
  gap: 20px; /* Adjust the gap as needed */
  grid-row-gap: 0; /* Remove the space between rows */
  
  flex-direction: column;
  z-index: 10;
  > p {
    z-index: 1;
    font-size: 15px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: 20px;
    margin-top: -11px;
    margin-right: 100%;
    line-height: 1.4;
  }
  > p mark {
    background-color: #DAE2F5;
    color: blue;
    border-radius: 6px;
    padding: 0px 5px;
  }
  > h1 {
    z-index: 1;
    font-size: 15px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: -18%;
    margin-top: -11px;
    margin-right: 100%;
    line-height: 1.4;
  }
  > h1 mark {
    background-color: #DAE2F5;
    color: blue;
    border-radius: 6px;
    padding: 0px 5px;
  }
  > h2 {
    z-index: 1;
    font-size: 20px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 600;
    font-style: italic;
    color: black;
    width: 70%;
    margin-left: 20px;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-right: 100%;
  }
  > h3 {
    z-index: 1;
    font-size: 20px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 600;
    font-style: italic;
    color: black;
    width: 70%;
    margin-left: -18%;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-right: 100%;
  }
`;

export default Home;
