import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MyProjects, DemoData } from '../Project_data/data';
import { maxitab, miniimobile, minilap, minitab } from '../responvise';
import { Link } from 'react-router-dom';
import RotatingLoader from './Loader';

const Container = styled.div`
    padding : 0% 2%;
    padding-bottom : 3%
`
const SerialNo = styled.p`
    font-size : 30px;
    font-weight : bold;
`
const Wrapper = styled.div`
    margin-left : 5%;
    margin-right : 5%;
    display : flex;
    ${minitab({
        flexDirection : 'column',
        marginLeft : '10%',
        marginRight : '0px',
    })}
`
const ImageContainer = styled.div`
    flex : 1;
`
const Image = styled.img`
    width : 73%;
    border-radius : 20px;
    box-shadow : 0px 0px 10px 2px black;
`
const InfoContainer = styled.div`
    flex : 1;

`
const Title = styled.h3`
    font-size : 50px;
    line-height : 0px;
    ${minilap({
        fontSize : '30px',
    })}
    ${maxitab({
        fontSize : '25px',
    })}
`
const Desc = styled.p`
    font-size : 18px;
    line-height : 20px;
    ${minilap({
        fontSize : '16px',
        lineHeight : '17px',
    })}
    ${maxitab({
        fontSize : '13px',
        lineHeight : '17px',
    })}
    ${minitab({
        width : '90%',
    })}
`
const Buttons = styled.div`
    display : flex;
`
const Button = styled.button`
    border : none;
    color : white;
    background-color : black;
    padding : 10px 20px;
    margin-right : 20px;
    font-weight : 600;
    border-radius : 10px;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.05);
        transition : all 0.25s ease-in;
        color : black;
        background-color : transparent;
        box-shadow : 0px 0px 10px 2px black;
    }
    ${maxitab({
        fontSize : '10px',
    })}
`

const Demo = styled.div`
    position : fixed;
    top : 20px;
    left :0px;
    width : 99vw;
    height : 92vh;
    overflow-y: auto;
    display : ${props => props.scrollEnabled ? 'none' : 'flex'};
    flex-direction : column;
    background-color : #f2f2f2;
    padding : 10px 20px;
    ${maxitab({
        top : '0',
        height : '100vh',
    })}
`

const Cross = styled.img`
    cursor : pointer;
    width : 30px;
    position : absolute;
    right :5%;
    padding : 5px;
    border-radius : 10px;
    border : 3px solid red;
    cursor : pointer;
    transition : all 0.25s ease-in;
    &:hover{
        transform : scale(1.1);
        background-color : #ffafaf;
        transition : all 0.25s ease-in;
    }
    ${minitab({
        left : '45%',
        right : '0%',
        margin : '20px',
    })}
    ${miniimobile({
        left : '41%',
    })}
`
const DemoView = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    ${maxitab({
        flexDirection : 'column',
    })}
`

const WebGIF1 = styled.video`
    width : 40%;
    height : auto;
    margin : 20px;
    margin-top : 50px;
    border-radius : 30px;
    ${minitab({
        width : '65%',
        marginTop : '100px',
    })}
    ${miniimobile({
        width : '85%',
    })}
`

const WebGIF2 = styled.video`
    width : 40%;
    height : auto;
    margin : 20px;
    margin-top : 50px;
    border-radius : 30px;
    ${minitab({
        width : '65%',
    })}
    ${miniimobile({
        width : '85%',
    })}
`

const CodeLinks = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

const FrontEnd = styled.button`
    padding : 10px 20px;
    font-size : 18px;
    border : none;
    background-color : black;
    color : white;
    border-radius : 10px;
    font-weight : bold;
    margin : 20px;
    cursor : pointer;
    transition : all 0.25s ease-in;
    &:hover{
        transform : scale(1.05);
        transition : all 0.25s ease-in;
        color : black;
        background-color : white;
        box-shadow : 0px 0px 10px 2px black;
    }
`

const BackEnd = styled.button`
    padding : 10px 20px;
    font-size : 18px;
    border : none;
    background-color : black;
    color : white;
    border-radius : 10px;
    font-weight : bold;
    margin : 20px;
    cursor : pointer;
    transition : all 0.25s ease-in;
    &:hover{
        transform : scale(1.05);
        transition : all 0.25s ease-in;
        color : black;
        background-color : white;
        box-shadow : 0px 0px 10px 2px black;
    }
`

const TechStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TechTitle = styled.div`
    font-size : 35px;
    font-weight : bold;
    text-decoration : underline;
`
const TechLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    width: 70px;
    height: auto; 
    margin: 5px;
`

const Myproject = () => {

    const [scrollEnabled, setScrollEnabled] = useState(true);

    const [currIndex, setCurrIndex] = useState(0);
    
    const [viewLoader, setViewLoader] = useState(true);
    useEffect(() => {
        const webGIF1 = document.getElementById('webGIF1');
        const webGIF2 = document.getElementById('webGIF2');
        if (webGIF1 && webGIF2 && viewLoader === false) {
            webGIF1.src = DemoData[currIndex].desk;
            webGIF2.src = DemoData[currIndex].mob;
        }
    }, [currIndex, viewLoader]);


    const handleScroll = (idx) => {
        setCurrIndex(idx);
        setTimeout(() => {
            setViewLoader(false);
        }, 4000);
        setScrollEnabled(!scrollEnabled);
        document.body.style.overflow = scrollEnabled ? 'hidden' : 'auto';
        document.getElementById('main').style.opacity = scrollEnabled ? '20%' : '100%';
    };
    const handleScrollCross = () => {
        setCurrIndex(0);
        setViewLoader(true);
        setScrollEnabled(!scrollEnabled);
        document.body.style.overflow = scrollEnabled ? 'hidden' : 'auto';
        document.getElementById('main').style.opacity = scrollEnabled ? '20%' : '100%';
    };

  return (
    <>
    <Container id='main'>
        {MyProjects.map((item, idx) => (<>
        <SerialNo>{item.id}</SerialNo>
        <Wrapper>
            <ImageContainer>
                <Image src={item.image}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc1} {item.desc2} {item.desc3}</Desc>
                <Buttons>
                    <Button onClick={() => handleScroll(idx)}>DEMO</Button>
                </Buttons>
            </InfoContainer>
        </Wrapper>
        </>))}
    </Container>
    <Demo scrollEnabled = {scrollEnabled}>
        <Cross onClick={() => handleScrollCross()} src='https://i.ibb.co/stJCB4c/icons8-cross-48-1.png'/>
        {viewLoader === false ? <DemoView>
            <WebGIF1 id="webGIF1" autoPlay loop muted></WebGIF1>
            <WebGIF2 id="webGIF2" autoPlay loop muted></WebGIF2>
        </DemoView> : ''}
        {viewLoader === true ? <RotatingLoader/> : ''}
        <CodeLinks>
        <Link to={DemoData[currIndex].frontend_link} target='_blank'><FrontEnd>{'<> Frontend'}</FrontEnd></Link>
            {DemoData[currIndex].backend_link !== "" && <Link to={DemoData[currIndex].backend_link} target='_blank'> <BackEnd>{'<> Backend'}</BackEnd></Link>}
        </CodeLinks>
        <br />
        <TechStack>
            <TechTitle>Tech Stacks</TechTitle>
            <br />
            <TechLogoContainer>
                {DemoData[currIndex].techStack.map((item, index) => ( 
                    <Logo key={index} src={item.tech} />
                ))}
            </TechLogoContainer>
        </TechStack>
    </Demo>
</>
  )
}

export default Myproject