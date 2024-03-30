import React from 'react';
import styled, { keyframes } from 'styled-components';
import { miniimobile } from '../responvise'; // Importing responsive styles

// Define keyframe animation for rotation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

// Styled component for the loader
const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: black;
  border-radius: 50%;
  margin-left : 48%; /* Center the loader horizontally */
  margin-top : 15%; /* Add some top margin */
  margin-bottom : 15%; /* Add some bottom margin */
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite; /* Apply the rotation animation */
  
  /* Responsive styles for smaller devices */
  ${miniimobile({
    marginLeft : '45%', // Adjusted margin for smaller screens
    marginTop : '20%', // Adjusted margin for smaller screens
    marginBottom : '20%' // Adjusted margin for smaller screens
  })}
`

// RotatingLoader component
const RotatingLoader = () => {
  return <Loader />; // Render the Loader component
};

export default RotatingLoader; // Export the RotatingLoader component
