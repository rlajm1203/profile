import { useState } from 'react'
import './App.css'
import ProfileHeader from '@/components/ProfileHeader'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import AboutSection from '@/components/AboutSection'
import ProfileFooter from '@/components/ProfileFooter'
import EmailModal from '@/components/EmailModal'


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ProfileHeader />
      <main className="container">
        <HeroSection onContactClick={() => setModalOpen(true)} />
        <Projects />
        <AboutSection />
        <EmailModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </main>
      <ProfileFooter />
    </>
  );
}

export default App
