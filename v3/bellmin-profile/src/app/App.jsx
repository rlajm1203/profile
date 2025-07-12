import { useEffect, useRef, useState } from "react";

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

  const deckDivRef = useRef(null); // reference to deck container div
  const deckRef = useRef(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
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
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <>
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />

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

function aboutMe() {
  return <div className="container"><AboutSection /></div>
}

function header() {
  return <ProfileHeader className="fixed top-0 w-full z-50" />
}

function heroSection() {
  return (
    <div className="container">
      <HeroSection onContactClick={() => setModalOpen(true)} />
    </div>
  )
}

function projects() {
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

export default App
