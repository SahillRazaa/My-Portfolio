import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { maxitab } from './responvise';

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 black;
  }
  50% {
    box-shadow : 0px 0px 10px 2px black;
  }
`;

const CustomCursorWrapper = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  border : 2px solid black;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 999;
  mix-blend-mode: difference;
  animation: ${pulse} 1s infinite;
  ${maxitab({
    display : 'none',
  })}
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return <CustomCursorWrapper style={{ left: position.x, top: position.y }} />;
};

export default CustomCursor;
