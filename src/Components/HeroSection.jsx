import React, { useEffect, useRef, useState } from 'react';
import { keyframes, styled } from 'styled-components';
import RoundedTextCircle from './RoundedTextCircle';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Quote1 from '../Components/Quote1';
import MyTechStack from '../Components/MyTechStack';
import ProjectHead from '../Components/ProjectHead';
import Contact from '../Components/Contact';
import greet from '../assets/greetings.gif';
import { HashLink as Link } from 'react-router-hash-link';
import { maxilap, maximobile, maxitab, miniimobile, minilap, miniminimobile, minitab } from '../responvise';
import Aboutme from './Aboutme';
import Myproject from './Myproject';

// Styled Components for the HeroSection component
const Container = styled.div`
    width: 99vw;
    height: 100vh;
    background-color: #f9f9fa;
    overflow: hidden;
`;

const AnimateNavbar = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Navbar = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    animation : ${AnimateNavbar} 1.5s ease-in-out;
`
const LeftNav = styled.div`
    display : flex;
    align-items : center;
    margin-left : 80px;
    z-index : 2;
    ${minilap({
        marginLeft : '10px',
    })}
`
const Logo = styled.img`
    width : 121px;
    height : 115px;
    z-index : 2;
    ${miniimobile({
        width : '80px',
        height : '80px',
    })}
`
const Name = styled.div`
    line-height : 0px;
    margin-left : -10px;
    margin-top : -20px;
    z-index : 2;
    ${miniimobile({
        marginTop : '0px',
        marginLeft : '-5px',
    })}
`
const UpperName = styled.p`
    font-size : 40px;
    z-index : 2;
    font-weight : bold;
    color : white;
    text-shadow : -1px -1px 10px black, 1px -1px 10px black, -1px 1px 10px black, 1px 1px 10px black;
    ${miniimobile({
        fontSize : '30px',
    })}
`
const LowerName = styled.p`
    font-size : 18px;
    margin-top : -5px;
    z-index : 2;
    ${miniimobile({
        fontSize : '15px',
    })}
`
const RightNav = styled.div`
    display : flex;
    align-items : center;
    ${minilap({
        display : 'none',
    })}
`
const Nav = styled.p`
    margin-right : 80px;
    font-size : 23px;
    font-weight : bold;
    z-index : 2;
    cursor : pointer;
    color : black;
    transition : transform 0.25s ease-out;
    &:hover{
        transform : scale(1.1);
        border-bottom : 3px solid black;
        transition : transform 0.25s ease-in;
    }
`
const Intro = styled.div`
    display : flex;
    align-items : center;
    position : relative;
`
const LeftScroll = styled.p`
    rotate : 90deg;
    font-size : 25px;
    top : 150px;
    position : absolute;
    z-index : 2;
    ${miniimobile({
        fontSize : '18px',
    })}
    ${miniminimobile({
        fontSize : '15px',
    })}
`
const CenterMain = styled.div`
    display : flex;
    align-items : center;
    margin-left : 30px;
`
const InfoContainer = styled.div`
    margin-top : -10%;
`
const Info1 = styled.p`
    font-size : 75px;
    font-weight : bold;
    top : 30px;
    position : absolute;
    left : 150px;
    z-index : 2;
    ${maxitab({
        fontSize : '50px',
        top : '60px',
    })}
    ${minitab({
        fontSize : '40px',
        top : '110px',
     })}
    ${maximobile({
        fontSize : '32px',
        top : '140px',
        left : '130px',
    })}
    ${miniimobile({
        fontSize : '27px',
        left : '100px',
    })}
    ${miniminimobile({
        fontSize : '24px',
    })}
`
const Info2 = styled.p`
    font-size : 35px;
    position : absolute;
    top : 150px;
    left : 150px;
    z-index : 2;
    ${maxitab({
        fontSize : '25px',
    })}
    ${minitab({
        fontSize : '20px',
        top : '180px',
     })}
     ${maximobile({
        fontSize : '17px',
        top : '200px',
        left : '130px',
    })}
    ${miniimobile({
        fontSize : '15px',
        left : '100px',
        top : '190px',
    })}
    ${miniminimobile({
        fontSize : '13px',
        top : '180px',
    })}
`

const Info3 = styled.p`
    font-size : 22px;
    width : 250px;   
    position : absolute;
    top : 300px;
    left : 160px;
    z-index : 2;
    ${maxitab({
        fontSize : '18px',
    })}
    ${minitab({
        top : '280px',
        left : '110px',
     })}
     ${maximobile({
        fontSize : '17px',
        width : '200px',
        left : '90px',
    })}
    ${miniimobile({
        fontSize : '13px',
        width : '140px',
        left : '70px',
        top : '270px',
    })}
`

const ImageContainer = styled.div`
    ${maxilap({
        display : 'none',
    })}
`
const AnimateGreet = keyframes`
    from {
        opacity : 0;
    }
    to { 
        opacity : 1;
    }
`
const Image = styled.img`
    width : 550px;
    height : 550px;
    z-index : 0;
    top : -60px;
    right : 50px;
    position : absolute;
    opacity : 80%;
    animation : ${AnimateGreet} 2s ease-in-out;
`
const RightScroll = styled.p`
    rotate : 90deg;
    font-size : 25px;
    position : absolute;
    right : 0px;
    top : 150px;
    ${miniimobile({
        fontSize : '18px',
    })}
    ${miniminimobile({
        fontSize : '15px',
    })}
`
const DoodleImage = styled.img`
    position : absolute;
    width :500px;
    top : 0px;
    left : 40px;
    ${maxitab({
        width: '450px',
    })}
    ${minitab({
        width : '350px',
        top : '60px',
    })}
    ${maximobile({
        width : '300px',
        height : '450px',
    })}
    ${miniimobile({
        width : '200px',
        height : '400px',
        top : '70px'
    })}
`
const AnimateExplore = keyframes`
    from{
        transform : translateY(100%);
    }
    to{
        transform : translateY(0);
    }
`
const ExploreContainer = styled.div`
    width : 99vw;
    height : 23.5vh;
    background-color : black;
    position : absolute;
    top : 64vh;
    ${minitab({
        height : '27vh',
    })}
`
const ExploreText = styled.div`
    color : white;
    position : absolute;
    bottom  : 100px;
    left : 20%;
    font-size : 50px;
    animation : ${AnimateExplore} 1.5s ease-in-out;
    ${minilap({
        left : '40px',
    })}
    ${minitab({
        display : 'none',
    })}
`
const ExploreImage = styled.img`
    width : 500px;
    position : absolute;
    bottom  : 20px;
    left : 30%;
    animation : ${AnimateExplore} 1.5s ease-in-out;
    ${minilap({
        left : '40px',
    })}
    ${minitab({
       display : 'none',
    })}
`
const RoundedTextCircleContainer = styled.div`
  position: absolute;
  top : 66vh;
  right: 150px;
  z-index : 2;
  animation : ${AnimateExplore} 2s ease-in-out;
  ${minilap({
        right : '40px',
    })}
    ${minitab({
        right : '40%',
     })}
    ${miniimobile({
        right : '38%',
     })}
`;
const ArrowContainer = styled.div`
    position: absolute;
    top : 69vh;
    right: 175px;
    z-index : 2;
    animation : ${AnimateExplore} 2s ease-in-out;
    ${minilap({
        right : '65px',
    })}
    ${minitab({
        right : '43.5%',
     })}
     ${maximobile({
        right : '45%',
    })}
     ${miniimobile({
        right : '44%',
    })}
    ${miniminimobile({
        right : '45%',
    })}
`
const AnimateCover1 = keyframes`
    from{
        width : 620px;
    }
    to{
        width : 0px;
    }
`
const AnimateCover2 = keyframes`
    from{
        width : 260px;
    }
    to{
        width : 0px;
    }
`
const CoverBox1 = styled.div`
    position : absolute;
    width : 0px;
    height : 130px;
    border-radius : 10px;
    top : 220px;
    left : 150px;
    background-color : black;
    z-index : 2;
    animation : ${AnimateCover1} 1.5s ease-in-out;
    ${maxitab({
        height : '100px',
    })}
    ${maxitab({
        top : '250px',
        height : '100px',
    })}
    ${maximobile({
        left : '130px',
        top : '270px',
        height : '80px',
    })}
    ${miniimobile({
        left : '100px',
        top : '230px',
        height : '80px',
    })}
`
const CoverBox2 = styled.div`
    position : absolute;
    width : 0px;
    height : 100px;
    border-radius : 10px;
    top : 430px;
    left : 150px;
    background-color : black;
    animation : ${AnimateCover2} 1.5s ease-in-out;
    ${maxitab({
        height : '50px',
    })}
    ${maxitab({
        left : '110px',
        top : '410px',
        height : '50px',
    })}
    ${maximobile({
        left : '90px',
        top : '410px',
        height : '70px',
    })}
    ${miniimobile({
        left : '70px',
        top : '350px',
        height : '70px',
    })}
`
const SlideInAnimation = keyframes`
    from {
        right: -100%;
    }
    to {
        right: 0%;
    }
`
const FloatingContainer = styled.div`
    position: fixed;
    width: 30px;
    height: 200px;
    top: 150px;
    right: 40px;
    z-index: 99;
    animation: ${props => (props.floatState === false ? SlideInAnimation : 'none')} 1s ease-in-out;
`
const HamFloat = styled.img`
    width : 30px;
    height : 30px;
    padding :10px 20px;
    background-color : #CBA11A;
    margin-bottom : 10px;
    border-radius : 10px;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.1);
        color : #CBA11A;
        border : 2px solid #CBA11A;
        box-shadow : 0px 0px 10px 2px #CBA11A;
        transition : all 0.25s ease-in;
    }
`

const HamburgerMenu = styled.div`
    top: 20px;
    right: 0;
    position: absolute;
    z-index: 99;
    display: none;
    flex-direction: column;
    align-items: end;
    transition: right 0.5s ease-in-out;
    ${minilap({
        display : 'flex',
    })}
`

const HamButton = styled.img`
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.25s ease-out;
    &:hover {
        transform: scale(1.1);
        transition: all 0.25s ease-in;
    }
`

const HamNav = styled.div`
    position: fixed;
    right: ${props => props.hamState ? '-100%' : '0%'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 10px 50px;
    border-radius: 10px;
    top: 70px;
    transition: right 0.5s ease-in-out;
`

const HamNavbar = styled.p`
    font-size: 23px;
    font-weight: bold;
    color: white;
    z-index: 2;
    cursor: pointer;
    transition: transform 0.25s ease-out;
    &:hover {
        transform: scale(1.1);
        border-bottom: 3px solid white;
        transition: transform 0.25s ease-in;
    }
`
const SlideFloat = styled.img`
    position: fixed;
    top: 80px;
    right: 0px;
    z-index: 99;
    animation: ${props => (props.isVisible === false ? SlideInAnimation : 'none')} 1s ease-in-out;
    width : 50px;
    height : 50px;
    background-color : #f9f9fa;
    border-radius : 10px;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.1);
        transition : all 0.25s ease-in;
    }
`

const HeroSection = () => {

    // State variables for managing visibility and animation
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [hamState, setHamState] = useState(true);
    const [floatState, setFloatState] = useState(true);

    // Refs for observing elements
    const myRef = useRef();
    const myRef1 = useRef();

    // Effect hooks for observing visibility
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
            setHamState(true);
            setFloatState(true);
        });
        if (myRef.current) {
            observer.observe(myRef.current);
        }
    }, []);

    useEffect(() => {
        const observer1 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible1(entry.isIntersecting);
        });
        if (myRef1.current) {
            observer1.observe(myRef1.current);
        }
    }, []);

    // Handlers for toggling state
    const handleNav = () => {
        setHamState(!hamState);
    };

    const handleFloat = () => {
        setFloatState(!floatState);
    };

    return (
        <>
            {/* Floating button for navigation */}
            {!isVisible && <SlideFloat isVisible={isVisible} onClick={handleFloat} src={floatState === true ? 'https://i.ibb.co/6nGCTYk/icons8-back-arrow-60.png' : 'https://i.ibb.co/gwK6H92/icons8-back-arrow-60-1.png'} />}
            {/* Floating container */}
            {!floatState && !isVisible && <FloatingContainer floatState={floatState}>
                <Link style={{ textDecoration: "none" }} to="#home" smooth><HamFloat src='https://i.ibb.co/RQGp3qx/icons8-home-60.png' /></Link>
                <Link style={{ textDecoration: "none" }} to="#projectHead" smooth><HamFloat src='https://i.ibb.co/hgzQ3F9/icons8-code-50.png' /></Link>
                <Link style={{ textDecoration: "none" }} to="#about" smooth><HamFloat src='https://i.ibb.co/d6T9y3n/icons8-about-48.png' /></Link>
                <Link style={{ textDecoration: "none" }} to="#contact" smooth><HamFloat src='https://i.ibb.co/crb2R44/icons8-contact-60.png' /></Link>
            </FloatingContainer>}
            {/* Main container */}
            <Container id='home'>
                {/* Navbar */}
                <Navbar ref={myRef}>
                    {/* Left navigation */}
                    <LeftNav>
                        <Logo src="https://i.ibb.co/Yck1kQ0/graph.png" />
                        <Name>
                            <UpperName>Sahil Raza</UpperName>
                            <LowerName>SOFTWARE DEVELOPER</LowerName>
                        </Name>
                    </LeftNav>
                    {/* Right navigation */}
                    <RightNav>
                        <Link style={{ textDecoration: "none", zIndex: "2" }} to="#home" smooth><Nav>HOME</Nav></Link>
                        <Link style={{ textDecoration: "none", zIndex: "2" }} to="#projectHead" smooth><Nav>PROJECT</Nav></Link>
                        <Link style={{ textDecoration: "none", zIndex: "2" }} to="#about" smooth><Nav>ABOUT</Nav></Link>
                        <Link style={{ textDecoration: "none", zIndex: "2" }} to="#contact" smooth><Nav>CONTACT</Nav></Link>
                    </RightNav>
                    {/* Hamburger menu */}
                    <HamburgerMenu>
                        <HamButton ref={myRef1} hamState={hamState} onClick={handleNav} src={hamState === true ? 'https://i.ibb.co/x1cxpZJ/icons8-hamburger-menu-50.png' : 'https://i.ibb.co/j8dZmyW/icons8-cross-48.png'} />
                        {isVisible1 && <HamNav hamState={hamState}>
                            <Link style={{ textDecoration: "none", zIndex: "2" }} to="#home" smooth><HamNavbar>HOME</HamNavbar></Link>
                            <Link style={{ textDecoration: "none", zIndex: "2" }} to="#projectHead" smooth><HamNavbar>PROJECT</HamNavbar></Link>
                            <Link style={{ textDecoration: "none", zIndex: "2" }} to="#about" smooth><HamNavbar>ABOUT</HamNavbar></Link>
                            <Link style={{ textDecoration: "none", zIndex: "2" }} to="#contact" smooth><HamNavbar>CONTACT</HamNavbar></Link>
                        </HamNav>}
                    </HamburgerMenu>
                </Navbar>
                {/* Intro section */}
                <Intro>
                    {/* Left scroll button */}
                    <LeftScroll>scroll --{'>'}</LeftScroll>
                    <CenterMain>
                        {/* Info container */}
                        <InfoContainer>
                            <Info1>Hi, I’m <b style={{ textShadow: "-3px -3px 10px black, 3px -3px 10px black, -3px 3px 10px black, 3px 3px 10px black", color: "white" }}>SAHIL RAZA.</b></Info1>
                            <Info2>MERN and Mobile App Developer</Info2>
                            <Info3>I create and develop efficient as well as good UI/UX design Apps</Info3>
                        </InfoContainer>
                        {/* Image container */}
                        <ImageContainer>
                            <Image src={greet} alt='Sorry!, Image not found' />
                        </ImageContainer>
                        {/* Rounded text circle */}
                        <RoundedTextCircleContainer>
                            <RoundedTextCircle />
                        </RoundedTextCircleContainer>
                        {/* Arrow container */}
                        <ArrowContainer>
                            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 70 }} style={{ color: "white" }} />
                        </ArrowContainer>
                    </CenterMain>
                    {/* Right scroll button */}
                    <RightScroll>scroll --{'>'}</RightScroll>
                    {/* Doodle image */}
                    <DoodleImage src="https://i.ibb.co/g76k4hh/Web-capture-7-12-2023-94920-www-figma-com-removebg-preview.png" />
                    {/* Explore container */}
                    <ExploreContainer>
                        <ExploreText>Let’s Explore </ExploreText>
                        <ExploreImage src="https://i.ibb.co/JHBrM6d/Web-capture-7-12-2023-94721-www-figma-com-removebg-preview.png" />
                    </ExploreContainer>
                </Intro>
                {/* Cover boxes */}
                <CoverBox1></CoverBox1>
                <CoverBox2></CoverBox2>
            </Container>
            {/* Additional components */}
            <Quote1 Title={"Coding Is a Poetry Of Logic"} Message={"In my curiosity-filled world, challenges are opportunities, and each experience is a lesson on my lifelong learning path."} />
            <MyTechStack />
            <ProjectHead />
            <Myproject />
            <Aboutme />
            <Contact />
        </>
    );
}

export default HeroSection;
