import React from "react";
import styled from "styled-components";

const MainCon = styled.section`
   padding: 3rem 0;
   background-color: rgba(90, 92, 92, 0.4);
`;
const TextCon = styled.p`
   margin: 0;
   color: rgba(255, 255, 255, 0.7);
   text-align: center;
`;


const Footer = () => {
    return (
        <MainCon>
            <TextCon>
                Copyright &copy; Shashi Kant
            </TextCon>
        </MainCon>
    )
}

export default Footer;