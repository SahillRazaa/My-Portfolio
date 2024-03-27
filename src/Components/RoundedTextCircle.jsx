import React from 'react';
import { keyframes, styled } from 'styled-components';

const Circle = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotateAnimation} 10s linear infinite;
`;


const Text = styled.div`
  color: white;
  transform: rotate(${props => props.rotate || 0}deg);
  display: inline-block;
  position : absolute;
  left : 50%;
  font-size : 16px;
  transform-origin : 0 60px;
  font-weight : 400;
`;

const RoundedTextCircle = () => {
  const text = "DEVELOPER - DESIGNER : SAHIL RAZA : ";

  return (
    <Circle>
      <TextContainer>
        {Array.from(text).map((char, i) => (
          <Text key={i} rotate={i * 10}>
            {char}
          </Text>
        ))}
      </TextContainer>
    </Circle>
  );
};

export default RoundedTextCircle;
