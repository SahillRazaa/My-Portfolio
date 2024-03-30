import React from 'react';
import { styled } from 'styled-components';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Styled components for styling the UI elements
const Container = styled.div`
    width: 99vw;
    height: auto;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.p`
    color: white;
    font-size: 6vw;
    font-weight: bold;
`;

// Variants for animation
const boxVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 }
};

const ProjectHead = () => {
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
        <Container id='projectHead'>
            {/* Apply animation to the entire component */}
            <motion.div
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                {/* Title with animation */}
                <Title ref={ref}>{'My Latest Projects.'}</Title>
            </motion.div>
        </Container>
    );
}

export default ProjectHead;
