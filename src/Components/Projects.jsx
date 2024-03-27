import React from 'react';
import styled from 'styled-components';
import { MyProjects } from '../Project_data/data';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width : 99vw;
    height : auto;
    background-color : #f9f9fa;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom : 0px;
  position : relative;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const DeviceImage = styled.img`
  width: 130%;
  margin-top : 80px;
  margin-left : 60px;
`;

const GIFImage = styled.img`
  position: absolute;
  top: 136px;
  left: 155px;
  z-index: 2;
  width: 100%;
`;

const InfoContainer = styled.div`
    margin-left : 200px;
    margin-top : 80px;
`;

const Title = styled.p`
  position : absolute;
  top : 30px;
  right : 70px;
  text-align : center;
  font-size : 100px;
  font-weight : bold;
  line-height : 0px;
  opacity : 80%;
`;

const DescriptionContainer = styled.div`
    line-height : 25px;
`;

const Description1 = styled.p`
    font-size : 20px;
    color : grey;
    width : 350px;
    position : absolute;
    top: 200px;
    right : 150px;
`;

const Description2 = styled.p`
  font-size : 20px;
  color : grey;
  width : 350px;
  position : absolute;
  right : 150px;
  top : 260px;
`;

const Description3 = styled.p`
font-size : 20px;
color : grey;
width : 350px;
position : absolute;
right : 150px;
top : 340px;
`;

const Description4 = styled.p`
font-size : 20px;
color : grey;
width : 350px;
position : absolute;
right : 150px;
top : 400px;
`
const Description5 = styled.p`
font-size : 20px;
color : grey;
width : 350px;
position : absolute;
right : 150px;
top : 460px;
`
const ButtonContainer = styled.div`
    margin-top : 50px;
    display : flex;
    align-items : center;
`
const Button1 = styled.button`
    border : none;
    position : absolute;
    bottom : 120px;
    right : 360px;
    font-size : 20px;
    font-weight : bold;
    padding : 10px 20px;
    border-radius : 10px;
    background-color : black;
    color : white;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.1);
        color : black;
        background-color : white;
        border : 3px solid black;
        transition : all 0.25s ease-in;
    }
`
const Button2 = styled.button`
    border : none;
    position : absolute;
    bottom : 120px;
    right : 160px;
    font-size : 20px;
    font-weight : bold;
    padding : 10px 20px;
    border-radius : 10px;
    background-color : black;
    color : white;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.1);
        color : black;
        background-color : white;
        border : 3px solid black;
        transition : all 0.25s ease-in;
    }
`
const Index = styled.p`
    font-size : 50px;
    position : absolute;
    top : -30px;
    left : 30px;
    font-weight : bold;
    margin-right : 50px;
`

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 2.5 } },
  hidden: { opacity: 0}
};

const Projects = () => {

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
    <Container ref={ref}>
      {MyProjects.map(item => (
      <Wrapper key={item.id}>
        <motion.div 
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
        <Title>{item.title}</Title>
        <ImageContainer>
          <GIFImage src={item.gifImage} alt='No Image'/>
          <DeviceImage src= {item.deviceImage} alt='No Image'/>
        </ImageContainer>
        <InfoContainer>
          <DescriptionContainer>
            <Description1>{item.desc1}</Description1>
            <Description2>{item.desc2}</Description2>
            <Description3>{item.desc3}</Description3>
            <Description4>{item.desc4}</Description4>
            <Description5>{item.desc5}</Description5>
          </DescriptionContainer>
          <ButtonContainer>
            <Link to={item.frontend_link} target='_blank'><Button1>&lt; &gt; Frontend</Button1></Link>
            {item.backend_link && <Link to={item.backend_link} target='_blank'><Button2>&lt; &gt; Backend</Button2></Link>}
          </ButtonContainer>
        </InfoContainer>
      <Index>0{item.id}.</Index>
      </motion.div>
      </Wrapper>
      ))}
    </Container>
  );
};

export default Projects