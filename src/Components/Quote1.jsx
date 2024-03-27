import React from 'react';
import { styled } from 'styled-components';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { maxilap, maxilap1, maximobile, maxitab, miniimobile, minilap, minitab } from '../responvise';

const Container = styled.div`
  width: 99vw;
  height: 100vh;
  background-color: black;
  position: relative;
  ${minitab({
    height : '90vh',
  })}
  ${maximobile({
    height : '80vh',
  })}
  ${miniimobile({
    height : '70vh',
  })}
`


const MessageContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 1;
  padding-top: 40px;
  &:before {
    content: '';
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const BracketLeft = styled.img`
  width: 150px;
  position: absolute;
  left: 420px;
  top: 0;
  ${maxilap({
    left : '365px',
  })}
  ${minilap({
    left : '250px',
  })}
  ${maxitab({
    left : '170px',
  })}
  ${minitab({
    left : '100px',
  })}
  ${miniimobile({
    left : '50px',
    top : '40px',
  })}
`;


const BracketText = styled.p`
  color: white;
  font-size: 25px;
  text-align: center;
  width: 27%;
  z-index: 2;
  ${maxilap({
    fontSize : '20px',
    width : '23.5%',
  })}
  ${minilap({
    fontSize : '17px',
    width : '23%',
  })}
  ${maxitab({
    fontSize : '17px',
    width : '30%',
  })}
  ${minitab({
    fontSize : '17px',
    width : '35%',
  })}
  ${miniimobile({
    fontSize : '14px',
    width : '40%',
    marginTop : '60px',
  })}
`;

const BracketRight = styled.img`
  transform: rotate(180deg);
  width: 150px;
  position: absolute;
  right: 420px;
  top: 100px;
  ${maxilap({
    right : '365px',
  })}
  ${minilap({
    right : '250px',
    top : '80px',
  })}
  ${maxitab({
    right : '170px',
    top : '90px',
  })}
  ${minitab({
    right : '100px',
  })}
  ${miniimobile({
    top : '110px',
    right : '50px',
  })}
`;

const QuoteContainer = styled.div`
display: flex;
position: absolute;
justify-content: center;
align-items: center;
top: 0px;
left: 0px;
width: 100%;
opacity: 1;
padding-top: 40px;
&:before {
  content: '';
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
`;

const QuoteMessage = styled.p`
  color: white;
  position: absolute;
  top: 270px;
  left: 35%;
  font-size: 50px;
  font-weight: bold;
  width: 30%;
  text-align: center;
  ${maxilap1({
    fontSize : '50px',
  })}
  ${maxilap({
    fontSize : '50px',
    width : '30%',
  })}
  ${minilap({
    fontSize : '50px',
    width : '40%',
    left : '30%',
  })}
  ${maxitab({
    fontSize : '45px',
    width : '45%',
    left : '29%',
  })}
  ${maximobile({
    fontSize : '35px',
    width : '55%',
    left : '24%',
  })}
  ${miniimobile({
    fontSize : '30px',
    width : '60%',
    left : '20%',
  })}
  
`;

const Drawing = styled.img`
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 70%;
  ${maxilap1({
    width : '75%',
    left : '13%',
    bottom : '2%', 
  })}
  ${maxilap({
    width : '80%',
    left : '11%',
    bottom : '2%', 
  })}
  ${minilap({
    width : '85%',
    left : '9%',
    bottom : '4%', 
  })}
  ${maxitab({
    width : '90%',
    left : '7%',
    bottom : '15%', 
  })}
  ${minitab({
    width : '100%',
    left : '1%',
    bottom : '17%',
  })}
  ${maximobile({
    bottom : '20%',
  })}
  ${miniimobile({
    bottom : '10%',
  })}
`;

const boxVariant = {
  visible: { opacity: 1,  transition: { duration: 2 } },
  hidden: { opacity: 0}
};

const Quote1 = ({Title, Message}) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    
      <Container>
        <motion.div 
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
        <MessageContainer>
          <BracketLeft src="https://i.ibb.co/HP1nZVp/Web-capture-14-12-2023-182238-www-figma-com.jpg" />
          <BracketText>
          {Message}
          </BracketText>
          <BracketRight src="https://i.ibb.co/HP1nZVp/Web-capture-14-12-2023-182238-www-figma-com.jpg" />
        </MessageContainer>
        <QuoteContainer>
          <QuoteMessage ref={ref}>{Title}</QuoteMessage>
          {/* <Box1></Box1>
          <Box2></Box2>
          <Box3></Box3>
          <Box4></Box4>
          <Box5></Box5> */}
        </QuoteContainer>
        <Drawing src="https://i.ibb.co/XFfdyJg/Web-capture-14-12-2023-183426-www-figma-com-removebg-preview.png" />
        </motion.div>
      </Container>
  );
};

export default Quote1;
