import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { skills } from '../constant.ts';

const MainCon = styled.section`
    padding: 4rem 8rem;
`;

const SkillTitleCon = styled.h2`
    margin: 0;
    font-size: 2rem;
    padding: 2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
`;

const AllSkillsCon = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-content: center;
   align-items: center;
   gap: 2rem;
`;

const InnerCon = styled.div`
    padding: 0.5rem;
    text-align: center;
`;

const SkillImgCon = styled(motion.img)`
   width: 5.2rem;
   height: 5.5rem;
`;

const ImgCon = styled.div`
    height: 14rem;
    border: 0.0625rem solid green;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SkillNameCon = styled.h3`
    margin: 0;
    padding: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    background-color: green;
`;

const Skills = () => {
    return (
        <MainCon>
            <SkillTitleCon>Skills <br /> What I have worked on</SkillTitleCon>
            <AllSkillsCon>
                {skills?.map((ele) => {
                    return (
                        <InnerCon>
                            <ImgCon><SkillImgCon src={ele?.src} initial={{ translateY: 10 }} animate={{ translateY: -10 }} transition={{
                                duration: 1, delay: 2, repeat: Infinity,
                                repeatType: "reverse",
                            }} /></ImgCon>
                            <SkillNameCon>{ele?.title}</SkillNameCon>
                        </InnerCon>
                    )
                })}
            </AllSkillsCon>
        </MainCon>
    )
}

export default Skills;