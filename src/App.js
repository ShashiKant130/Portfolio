import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Footer from './components/Footer.tsx';
import { useRef } from 'react';

const MainCon = styled.div`
  background-color: rgb(18, 23, 22);
`



function App() {




  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar onTabClick={scrollToSection} />
      <div ref={homeRef} id="home">
        <Home />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>
      <Footer />
    </div>
  );






  // return (
  //   <MainCon>
  //     <Navbar />
  //     <Home />
  //     <Skills />
  //     <Projects />
  //     <Experience />
  //     <Footer />
  //   </MainCon>
  // );
}

export default App;
