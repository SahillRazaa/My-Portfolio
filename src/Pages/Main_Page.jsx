import React from 'react';
import HeroSection from '../Components/HeroSection';
import { createGlobalStyle } from 'styled-components';
import CustomCursor from '../CustomCursor';

const Body = createGlobalStyle`
    body {
        margin-top: 0;
        padding: 0;
        font-family: 'Roboto Condensed', sans-serif; 
    }
`

const MainPage = () => {
  return (
    <>
    <Body/>
    <CustomCursor/>
        <HeroSection/>
    </>
  );
};

export default MainPage;
