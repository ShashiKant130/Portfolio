import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "motion/react";

const MainCon = styled.section`
    padding: 2rem 9rem;
`;

const ProjectsTitleCon = styled.h2`
    margin: 0;
    font-size: 2rem;
    padding: 2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
`;

const ProjectCon = styled.div`
    display: flex;
    gap: 3rem;
    justify-content: center;  
`;

const ImgCon = styled(motion.div)`
   width: 10rem;
   height: 10rem;
   border: 1px solid grey;
   box-shadow: 1px 1px 1px white;
`;

const DescriptionCon = styled(motion.p)`
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
`;


const Projects = () => {
    const imgRef = useRef(null);
    const descRef = useRef(null);
    const isImgInView = useInView(imgRef, { once: true });
    const isDescInView = useInView(descRef, { once: true });

    return (
        <MainCon>
            <ProjectsTitleCon>Projects</ProjectsTitleCon>
            <ProjectCon>
            <ImgCon ref={imgRef} initial={{ translateX: -1000 }} animate={{ translateX: isImgInView ? 0 : -100 }} transition={{ duration: 2 }}></ImgCon>
            <DescriptionCon ref={descRef} initial={{ translateX: 1000 }} animate={{ translateX: isDescInView ? 0 : 100 }} transition={{ duration: 2 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam consequuntur obcaecati eius repudiandae odit ab itaque at pariatur voluptatem laudantium ratione voluptatum eaque rerum non quaerat vero possimus, sint porro excepturi dignissimos voluptatibus minus. Nam reiciendis voluptas illum ipsum culpa, quasi ea rerum ut ex harum corrupti temporibus vitae!</DescriptionCon>
            </ProjectCon>
        </MainCon>
    )
}

export default Projects;