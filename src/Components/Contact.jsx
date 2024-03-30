import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Alert from './Alert';
import { Link } from 'react-router-dom';
import { contactlap, miniimobile, minilap } from '../responvise';

// Styled components for the Contact component
const Container = styled.div`
    width : 99vw;
    height : auto;
    background-color : #f9f9fa;
    line-height : 0px;
    margin-top : -70px;
    margin-bottom : 30px;
`
const Title = styled.p`
    font-size : 70px;
    font-weight : bold;
    padding-top : 70px;
    padding-left : 60px;
    color : black;
    ${contactlap({
        paddingLeft : '0px',
        textAlign : 'center',
    })}
    ${miniimobile({
        fontSize : '50px',
    })}
`
const Wrapper = styled.div`
    display : flex;
    padding-left : 5%;
    padding-right : 5%;
    padding-top : 0px;
    ${contactlap({
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    })}
`
const Form = styled.div`
    width : 60%;
    display : flex;
    flex : 1;
    border-radius : 20px;
    box-shadow : 0px 0px 10px 2px black;
    padding : 2%;
    ${contactlap({
        width : 'auto',
    })}
`
const FormLeft = styled.div`
    flex : 1;
    padding-top : 40px;
`
const Name = styled.textarea`
    width : auto;
    height : 10%;
    border-radius : 13px;
    margin-bottom : 50px;
    font-size : 20px;
    padding-left : 10px;
    padding-top : 10px;
    background-color : lightgray;
    font-weight : bold;
    resize : none;
    ${contactlap({
        width : '100%',
    })}
`
const Email = styled.textarea`
    width : auto;
    height : 10%;
    border-radius : 13px;
    margin-bottom : 50px;
    font-size : 20px;
    padding-left : 10px;
    padding-top : 10px;
    background-color : lightgray;
    font-weight : bold;
    resize : none;
    ${contactlap({
        width : '100%',
    })}
`
const FormRight = styled.div`
    flex : 1;
    margin-left : 50px;
    padding-top : 40px;
    
`
const Message = styled.textarea`
    width : auto;
    height : 250px;
    border-radius : 13px;
    margin-bottom : 20px;
    font-size : 20px;
    padding-left : 10px;
    padding-top : 10px;
    resize : none;
    background-color : lightgray;
    font-weight : bold;
    ${contactlap({
        width : '95%',
    })}
    ${miniimobile({
        width : '90%',
    })}
`
const Submit = styled.button`
    padding : 10px 20px;
    border-radius : 10px;
    font-size: 20px;
    font-weight : bold;
    margin-left : 0px;
    background : black;
    cursor : pointer;
    color : white;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.1);
        color : black;
        background-color : white;
        box-shadow : 0px 0px 10px 2px black;
        transition : all 0.25s ease-in;
    }
`
const MySocial = styled.div`
    flex : 1;
    margin-left : 10%;
    display : flex;
    flex-direction : column;
    margin-top : -100px;
    ${contactlap({
        marginTop : '0px',
    })}
`
const MyLogo = styled.div`
    display : flex;
    margin-left : -40px;
    margin-bottom : 0px;
    ${contactlap({
        marginLeft : '0%',
    })}
`
const Logo = styled.img`
    width : 150px;
    height : 130px;
    z-index : 2;
    ${minilap({
        width : '120px',
        height : '100px',
    })}
    ${contactlap({
        display : 'none'
    })}
`
const MyName = styled.div`
    line-height : 0px;
    margin-left : -20px;
    margin-top : 7px;
    z-index : 2;
    color : white;
    ${minilap({
        marginLeft : '-10px',
    })}
`
const UpperName = styled.p`
    font-size : 38px;
    z-index : 2;
    font-weight : bold;
    color : black;
    ${minilap({
        fontSize : '33px',
    })}
`
const LowerName = styled.p`
    font-size : 15px;
    margin-top : -5px;
    z-index : 2;
    color : black;
    
`
const Social = styled.div`

`
const MyDesc1 = styled.p`
    line-height : 20px;
    color : black;
    font-size : 18px;
    width : 90%;
    opacity : 80%;
    ${minilap({
        fontSize : '16px',
        marginLeft : '20px'
    })}
`
const MyDesc2 = styled.p`
    line-height : 20px;
    color : black;
    font-size : 18px;
    width : 90%;
    opacity : 80%;
    margin-top : -10px;
    ${minilap({
        fontSize : '16px',
        marginLeft : '20px'
    })}
`
const Heading = styled.p`
    color : black;
    font-size : 30px;
    font-weight : bold;
    text-decoration : underline;
    margin-top : 20px;
    ${minilap({
        fontSize : '23px',
        marginLeft : '20px'
    })}
    ${contactlap({
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    })}
`
const Icons = styled.div`
`
const Icon1 = styled.img`
    border-radius : 50%;
    width : 40px;
    margin-bottom : 5px;
    margin-right : 5px;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.2);
        transition : all 0.25s ease-in;
    }
    ${minilap({
        width : '33px',
        marginLeft : '20px'
    })}
`
const Icon2 = styled.img`
    width : 50px;
    cursor : pointer;
    transition : all 0.25s ease-out;
    &:hover{
        transform : scale(1.2);
        transition : all 0.25s ease-in;
    }
    ${minilap({
        width : '43px',
    })}
`
const Myemail = styled.p`
    color: black;
    opacity: 80%;
    font-size: 18px;    
    ${minilap({
        fontSize : '16px',
        marginLeft : '20px'
    })}
`
const MyNumber = styled.p`
    color : black;
    opacity : 80%;
    font-size : 18px;
    margin-top : 25px;
    ${minilap({
        fontSize : '16px',
        marginLeft : '20px'
    })}
`
const Copyright = styled.p`
    color : black;
    font-size : 18px;
    margin-top : 40px;
    line-height : 20px;
    ${minilap({
        fontSize : '16px',
        marginTop : '30px',
        marginLeft : '20px',
    })}
`
// Animation variant
const boxVariant = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0}
};

const Contact = () => {
    // State and refs for form handling and animation control
    const emailInputRef = useRef(null);
    const [email, setEmail] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerMessage, setCustomerMessage] = useState('');
    emailjs.init('9se214kBr0ctDiO14');

    const [alert,setAlert] = useState(null); 

    // Function to show alerts
    const showAlert = (message, text)=>{
        setAlert({
        msg : message,
        txt : text
        })
        setTimeout(() => {
        setAlert(null);
        }, 5000);
    }

    // Function to send email
    const sendEmail = () => {
        emailjs
          .send('service_mr6l62n', 'template_ymbqur7', {
            customer_email: email,
            from_name : customerName,
            message : customerMessage,
          })
          .then(
            () => { 
              setEmail('');
              setCustomerMessage('');
              setCustomerName('');
              emailInputRef.current.value = '';
              window.location.reload();
            },
          );
      };

    // Function to validate form details
    const validDetails = () => {
        if(email === '' || customerName === '' || customerMessage === '' || email.substring(email.length - 4) !== ".com") {
            showAlert("Please fill the form properly.", "ERROR!");
        }
        else{
            showAlert("Thanks for contacting me.", "SUCCESS!");
            sendEmail();
        }
    };

    // Animation control
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
        <Container id='contact'>
            {/* Alert component */}
            <Alert alert = {alert}/>
            <motion.div 
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                {/* Contact form */}
                <Title >Let's Connect !</Title>
                <Wrapper>
                    <Form ref={emailInputRef}>
                        <FormLeft>
                            {/* Name and email input fields */}
                            <Name placeholder='Your Name' onChange={(e) => setCustomerName(e.target.value)}/>
                            <Email placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}/>
                            {/* Submit button */}
                            <Submit ref={ref} onClick={validDetails}>Connect</Submit>
                        </FormLeft>
                        <FormRight>
                            {/* Message input field */}
                            <Message placeholder='Your Message' onChange={(e) => setCustomerMessage(e.target.value)}/>
                        </FormRight>
                    </Form>
                    {/* Social media links and contact information */}
                    <MySocial>
                        <MyLogo>
                            <Logo src="https://i.ibb.co/Yck1kQ0/graph.png"/>
                            <MyName>
                                <UpperName>Sahil Raza</UpperName>
                                <LowerName>SOFTWARE DEVELOPER</LowerName>
                            </MyName>
                        </MyLogo>
                        <MyDesc1>🪶 MERN and Mobile App Developer. I create and develop efficient as well as good UI/UX design Apps.</MyDesc1>
                        <MyDesc2>🪶 A college student who is very much interested in learning and exploring Software domain.</MyDesc2>
                        {/* Social media icons and contact details */}
                        <Social>
                            <Heading>My Socials :</Heading>
                            <Icons>
                                <Link to="https://github.com/SahillRazaa" target='_blank'><Icon1 src="https://i.ibb.co/yBFGJXm/icons8-github-96.png" alt='No Image'/></Link>
                                <Link to="https://www.linkedin.com/in/sahil-raza-ansari-7b1b98270/" target='_blank'><Icon2 src="https://i.ibb.co/Nsw1ZG4/icons8-linkedin-48.png"/></Link>
                                <Myemail><b style={{opacity : "100%", fontWeight : "bold"}}>Email :- </b> connectwithsahil007@gmail.com</Myemail>
                                <MyNumber><b style={{opacity : "100%", fontWeight : "bold"}}>Number :- </b> +91-7992298128</MyNumber>
                                <Copyright>&copy; 2024 Sahil Raza:
                                All rights reserved.</Copyright>
                            </Icons>
                        </Social>
                    </MySocial>
                </Wrapper>
            </motion.div>
        </Container>
    )
}

export default Contact;