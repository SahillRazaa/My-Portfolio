import React from 'react';
import { keyframes, styled } from 'styled-components';

// Styled component for the circle container
const Circle = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Keyframes for the rotation animation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the container of rotating text
const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotateAnimation} 10s linear infinite; /* Applying rotation animation */
`;

// Styled component for individual characters of the text
const Text = styled.div`
  color: white;
  transform: rotate(${props => props.rotate || 0}deg); /* Rotating each character */
  display: inline-block;
  position : absolute;
  left : 50%; /* Centering horizontally */
  font-size : 16px;
  transform-origin : 0 60px; /* Setting the transform origin for rotation */
  font-weight : 400;
`;

// Component for rendering a circle with text arranged in a circular pattern
const RoundedTextCircle = () => {
  // Text to be displayed
  const text = "DEVELOPER - DESIGNER : SAHIL RAZA : ";

  return (
    <Circle>
      {/* Container for the rotating text */}
      <TextContainer>
        {/* Rendering each character of the text */}
        {Array.from(text).map((char, i) => (
          <Text key={i} rotate={i * 10}> {/* Rotating each character by an increasing angle */}
            {char}
          </Text>
        ))}
      </TextContainer>
    </Circle>
  );
};

export default RoundedTextCircle;
