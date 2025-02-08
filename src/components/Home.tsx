import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import image from '../assets/Home.jpg';

const MainCon = styled.section`
    padding: 10rem 2.5rem;
    display: flex;
    gap: 4rem;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
  }
`
const HeyThereCon = styled.div`
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    gap: 1rem;
`;

const NameCon = styled(motion.h1)`
   font-size: 3.5rem;
   margin: 0;
   color: rgba(255, 255, 255, 0.6);
`;

const NameDiv = styled.span`
    color: #548FBA;
`;

const SubTextCon = styled(motion.p)`
    font-size: 2rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
`;

const LeftCon = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`;
const RightCon = styled.div``;
const ImageCon = styled(motion.img)`
    width: 20rem;
    height: 20rem;
    border-radius: 0.5rem;
    cursor: pointer;
    /* transform: translateY(0rem) rotate(-10.51407deg) translateZ(0px); */
    transform: rotate(-10.51407deg);
`;

const Home = () => {
    return (
        <MainCon>
            <LeftCon>
                <HeyThereCon>
                    Hey, there
                    <motion.div initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: [0.5, 1.2, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}>👐</motion.div>
                </HeyThereCon>
                <NameCon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
                    I'm <NameDiv>Shashi Kant</NameDiv> < br />
                    Frontend Developer
                </NameCon>
                <SubTextCon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
                    dedicated to creating seamless and engaging digital experiences
                </SubTextCon>
            </LeftCon>
            <RightCon>
                <ImageCon src={image}
                   initial={{
                    rotate: -10.51407
                  }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.2 }
                    }}></ImageCon>
            </RightCon>
        </MainCon>
    )
}

export default Home;