import React, { useEffect } from 'react'
import styled from 'styled-components'
import Myself from '../assets/IMG_0409.jpg'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contactlap, maxilap, maxitab, miniimobile, minitab } from '../responvise'

const Container = styled.div`
    width : 99vw;
    height : auto;
    background-color : black;
    ${miniimobile({
        paddingBottom : '20px'
    })}
`

const Wrapper = styled.div`
    display : flex;
    justify-content : center;
`
const ImageContainer = styled.div`
    padding :3%;
    flex : 1;
`
const Image = styled.img`
    width : 80%;
    border-radius : 25px;
`
const InfoContainer = styled.div`
    flex : 1;
    margin-top : 10px;
`
const Title1 = styled.p`
    font-size : 64px;
    line-height : 0px;
    font-weight : 500;
    color : white;
    ${maxilap({
        fontSize : '50px',
    })}
    ${contactlap({
        fontSize : '30px',
    })}
    ${maxitab({
        fontSize : '25px',
    })}
    ${minitab({
        fontSize : '20px',
    })}
    ${miniimobile({
        fontSize : '13px',
    })}
`
const Title2 = styled.p`
    font-size : 64px;
    line-height : 0px;
    font-weight : 500;
    color : white;
    ${maxilap({
        fontSize : '50px',
    })}
    ${contactlap({
        fontSize : '30px',
    })}
    ${maxitab({
        fontSize : '25px',
    })}
    ${minitab({
        fontSize : '20px',
    })}
    ${miniimobile({
        fontSize : '13px',
    })}
`
const Desc1 = styled.p`
    font-size : 20px;
    width : 85%;
    text-align : justify;
    line-height : 25px;
    color : #D5D5D6;
    ${maxilap({
        fontSize : '15px',
        lineHeight : '20px',
    })}
    ${contactlap({
        fontSize : '13px',
    })}
    ${maxitab({
        fontSize : '10px',
        lineHeight : '15px',
    })}
    ${minitab({
        fontSize : '8px',
        lineHeight : '10px',
    })}
    ${miniimobile({
        fontSize : '6px',
        lineHeight : '7px',
    })}
`
const Desc2 = styled.p`
    font-size : 20px;
    width : 85%;
    text-align : justify;
    line-height : 25px;
    color : #D5D5D6;
    ${maxilap({
        fontSize : '15px',
        lineHeight : '20px',
    })}
    ${contactlap({
        fontSize : '13px',
    })}
    ${maxitab({
        fontSize : '10px',
        lineHeight : '15px',
    })}
    ${minitab({
        fontSize : '8px',
        lineHeight : '10px',
    })}
    ${miniimobile({
        fontSize : '6px',
        lineHeight : '7px',
    })}
`
const ResumeButton = styled.button`
    font-size : 20px;
    border : none;
    border-radius : 6px;
    font-weight : 600;
    padding : 10px 20px;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.1);
        transition : all 0.25s ease-in;
        color : white;
        box-shadow : 0px 0px 10px 2px white;
        background-color : transparent;
    }
    ${maxitab({
        fontSize : '15px',
    })}
    ${minitab({
        fontSize : '12px',
        padding : '7px 13px',
    })}
    ${miniimobile({
        fontSize : '8px',
        padding : '5px 13px',
    })}
`
const boxVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0}
  };

const Aboutme = () => {

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
    <div style={{backgroundColor : "black", width : "99vw"}}>
    <motion.div 
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
    <Container>
        <Wrapper id='about'>
            <ImageContainer>
                <Image src={Myself}/>
            </ImageContainer>
            <InfoContainer ref={ref}>
                <Title1>Hello there!</Title1>
                <Title2>I’m Sahil Raza Ansari</Title2>
                <Desc1>Hey there, I'm Sahil Raza Ansari, currently a second-year student pursuing BTech in Electronics and Communication Engineering (ECE). Since my early school days, I've been captivated by the world of coding, which ignited a passion for software development alongside my academic pursuits.</Desc1>
                <Desc2>Despite my main focus on ECE, my curiosity for software development has been unrelenting. I've dedicated considerable time to exploring various programming languages and diving into coding projects that fuels my learning and growth.</Desc2>
                <ResumeButton>Resume</ResumeButton>
            </InfoContainer>
        </Wrapper>
    </Container>
    </motion.div>
    </div>
  )
}

export default Aboutme