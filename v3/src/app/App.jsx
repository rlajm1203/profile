import { useEffect, useRef, useState } from "react";
import {createPortal} from 'react-dom';

import './App.css'
import ProfileHeader from '@/components/ProfileHeader'
import HeroSection from '@/components/HeroSection'
import Project from '@/components/Project'
import AboutSection from '@/components/AboutSection'
import ProfileFooter from '@/components/ProfileFooter'
import EmailModal from '@/components/EmailModal'
import { PROJECTS } from '@/constants/projects.js'

import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const deckDivRef = useRef(null);
  const deckRef = useRef(null);

  const aboutMe = () => {
    return <div className="container"><AboutSection /></div>
  }

  const header = () => {
    return <ProfileHeader className="fixed top-0 w-full z-50" />
  }

  const heroSection = () => {
    return (
        <div className="container">
          <HeroSection onContactClick={() => setModalOpen(true)} />
        </div>
    )
  }

  const projects = () => {
    return PROJECTS.map((project) => {
      return (
          <section>
            <div className="container">
              <Project project={project} />
            </div>
          </section>
      )
    })
  }

  useEffect(() => {

    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      embedded: true,
      disableLayout: true
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (error) {
        console.log(error);
        console.warn("Reveal.js 종료 실패");
      }
    };
  }, []);

  return (
    <>
      {createPortal(<EmailModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />, document.body)}

      <div className="reveal" ref={deckDivRef}>
        <div className="slides">

          <section>
            {header()}
            {heroSection()}
          </section>

          {projects()}

          <section>
            {aboutMe()}
          </section>

        </div>
      </div>

    </>
  );
}



export default App
