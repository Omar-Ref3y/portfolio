import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
`;

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();

    // Add data-scroll attributes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.setAttribute('data-scroll', '');
      section.setAttribute('data-scroll-speed', index % 2 === 0 ? '1' : '-1');
      section.setAttribute('data-scroll-position', 'center');
    });
  }, []);

  return (
    <AppWrapper>
      <Navbar />
      <SmoothScroll>
        <MainContent>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer>
            {new Date().getFullYear()} | Crafted with passion
          </Footer>
        </MainContent>
      </SmoothScroll>
    </AppWrapper>
  );
}

export default App;
