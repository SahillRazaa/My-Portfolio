import React from 'react'
import { styled } from 'styled-components'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Container = styled.div`
    width : 99vw;
    height : auto;
    background-color : black;
    display : flex;
    align-items : center;
    justify-content : center;
    
`

const Title = styled.p`
  color : white;
  font-size : 6vw;
  font-weight : bold;
`

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0}
};

const ProjectHead = () => {

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
    <Container id='projectHead'>
      <motion.div 
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
       <Title ref={ref}>{'My Latest Projects.'}</Title>
       </motion.div>
    </Container>
  )
}

export default ProjectHead
