import React from 'react';
import { styled } from 'styled-components';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { maxitab, minilap } from '../responvise';

// Styled components for styling the UI elements
const Container = styled.div`
    width: 99vw;
    height: auto;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 90%;
    height: auto;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    background-color: #f9f9fa;
    border-radius: 50px;
    padding-bottom: 30px;
`;

const TitleContainer = styled.div`
    height: auto;
`;

const Text = styled.p`
    position: absolute;
    top: 0px;
    left: 11%;
    right: 11%;
    text-align: center;
    font-size: 60px;
    font-weight: bolder;
    ${minilap({
        top: '10px',
        fontSize: '50px',
    })}
    ${maxitab({
        top: '20px',
        fontSize: '40px',
    })}
`;

const TechContainer = styled.div`
    width: 62%;
    height: auto;
    margin-top: 170px;
    margin-bottom: 20px;
    background-color: black;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    align-items: center;
    justify-content: center;
`;

const Stack = styled.img`
    width: 60px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.25s ease-out;
    &:hover{
        transform: scale(1.2);
        transition: all 0.25s ease-in;
        opacity: 0.8;
    }
`;

// Variants for animation
const boxVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 }
};

const MyTechStack = () => {
    // Animation controls
    const control = useAnimation();
    // Intersection observer hook to detect when the component comes into view
    const [ref, inView] = useInView();

    // Trigger animation when component comes into view
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <div style={{ backgroundColor: "black", width: "99vw" }}>
            {/* Apply animation to the entire component */}
            <motion.div 
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                {/* Container for the entire section */}
                <Container>
                    <Wrapper ref={ref}>
                        {/* Container for the title */}
                        <TitleContainer>
                            {/* Title text with styling */}
                            <Text>These are my <b style={{textShadow: "-3px -3px 10px black, 3px -3px 10px black, -3px 3px 10px black, 3px 3px 10px black", color: "white"}}>TECH STACKS</b></Text>
                        </TitleContainer>
                        {/* Container for the technology stack icons */}
                        <TechContainer>
                            {/* Links to technology resources */}
                            <Link to="https://react.dev/learn" target='_blank'><Stack src="https://i.ibb.co/TB3zZjN/image.png"/></Link>
                            <Link to="https://developer.mozilla.org/en-US/docs/Web/javascript" target='_blank'><Stack src="https://i.ibb.co/0hXDjTM/image.png"/></Link>
                            <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'><Stack src="https://i.ibb.co/6rcXkhp/image.png"/></Link>
                            <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'><Stack src="https://i.ibb.co/4T69Lb2/image.png"/></Link>
                            <Link to="https://www.freecodecamp.org/news/what-is-node-js/" target='_blank'><Stack src="https://i.ibb.co/0KcqYQF/image.png"/></Link>
                            <Link to="https://docs.flutter.dev/" target='_blank'><Stack src="https://i.ibb.co/r0nMw6F/image.png"/></Link>
                            <Link to="https://www.w3schools.com/java/" target='_blank'><Stack src="https://i.ibb.co/xChnmYZ/icons8-java-96.png"/></Link>
                            <Link to="https://www.mongodb.com/what-is-mongodb" target='_blank'><Stack src="https://i.ibb.co/Pcmxcgf/icons8-mongo-db-96.png"/></Link>
                            <Link to="https://www.programiz.com/cpp-programming" target='_blank'><Stack src="https://i.ibb.co/VvmQk5w/icons8-c-96.png"/></Link>
                        </TechContainer>
                    </Wrapper>
                </Container>
            </motion.div>
        </div>
    );
}

export default MyTechStack;
