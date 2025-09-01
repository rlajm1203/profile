import { useEffect, useRef, useState } from "react";

import './App.css'
import ProfileHeader from '@/header/ProfileHeader'
import HeroSection from '@/portfolio/hero/component/HeroSection'
import AboutSection from '@/portfolio/about/component/AboutSection'
import EmailModal from '@/portfolio/email/component/EmailModal'
import Projects from "@/portfolio/project/component/Projects";
import Slides from "@/reveal/component/Slides";
import Slide from "@/reveal/component/Slide";


import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import { Modal } from "@/ui/Modal";

function App() {
  return (
    <>
      <Modal>
        <Modal.Content>
          <EmailModal />
        </Modal.Content>

        <Slides>
          <Slide>
            <ProfileHeader className="fixed top-0 w-full z-50" />
            <HeroSection />
          </Slide>

          <Projects />

          <Slide>
            <AboutSection />
          </Slide>
        </Slides>
      </Modal>

    </>
  );
}
export default App
