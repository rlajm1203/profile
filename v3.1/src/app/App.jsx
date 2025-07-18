import { useEffect, useRef, useState } from "react";

import './App.css'
import ProfileHeader from '@/header/component/ProfileHeader'
import HeroSection from '@/hero/component/HeroSection'
import AboutSection from '@/about/component/AboutSection'
import EmailModal from '@/email/component/EmailModal'
import Projects from "@/project/component/Projects";


import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import { Modal } from "@/ui/Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const deckDivRef = useRef(null);
  const deckRef = useRef(null);

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
      <Modal>
        <Modal.Content>
          <EmailModal />
        </Modal.Content>
        <div className="reveal" ref={deckDivRef}>
          <div className="slides">
            <section>
              <ProfileHeader className="fixed top-0 w-full z-50" />
              <HeroSection />
            </section>

            <Projects/>

            <section>
              <AboutSection />
            </section>
          </div>
        </div>
      </Modal>

    </>
  );
}



export default App
