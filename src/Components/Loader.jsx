import React from 'react';
import styled, { keyframes } from 'styled-components';
import { miniimobile } from '../responvise';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: black;
  border-radius: 50%;
  margin-left : 48%;
  margin-top : 15%;
  margin-bottom : 15%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
  ${miniimobile({
    marginLeft : '45%',
    marginTop : '20%',
    marginBottom : '20%'
  })}
`

const RotatingLoader = () => {
  return <Loader />;
};

export default RotatingLoader;
