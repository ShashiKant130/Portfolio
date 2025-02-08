import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { sections } from "../constant.ts";
import { Link } from "react-router-dom";

const NavbarCon = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    background: rgb(90, 92, 92, 0.6);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(10px);
`;

const NavCon = styled(motion.nav)`
   font-size: 1.5rem;
   color: rgb(255, 255, 255, 0.6);
   cursor: pointer;
`;

const NameCon = styled.div`
  font-size: 1.5rem;
   color: rgb(187, 234, 222);
   text-shadow: 3px 3px 3px rgb(88, 152, 136);
`;

const AllSectionCon = styled.div`
   display: flex;
   gap: 1.5rem;
`;


const Navbar = () => {
    return (
        <NavbarCon>
            <NameCon>{`< Shashi Kant />`}</NameCon>
            {/* <AllSectionCon>
                {sections?.map((ele) => {
                    return (
                        <NavCon whileHover={{ scale: 1.2 }}>
                            {ele}
                        </NavCon>
                    )
                })}
            </AllSectionCon> */}

<AllSectionCon>
        <NavCon>
          <Link to="/home">Home</Link>
        </NavCon>
        <NavCon>
          <Link to="/skills">Skills</Link>
        </NavCon>
        <NavCon>
          <Link to="/projects">Projects</Link>
        </NavCon>
        <NavCon>
          <Link to="/experience">Experience</Link>
        </NavCon>
      </AllSectionCon>

        </NavbarCon>
    )
}

export default Navbar;