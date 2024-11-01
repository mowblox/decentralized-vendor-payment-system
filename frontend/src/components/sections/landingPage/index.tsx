'use client'

import React, { useState, useEffect } from 'react';
import ChoosePayFlow from "@/components/sections/landingPage/ChoosePayFlow";
import Empowering from "@/components/sections/landingPage/Empowering";
import GetStarted from "@/components/sections/landingPage/GetStarted";
import Information from "@/components/sections/landingPage/Information";
import MoveUp from "@/components/sections/landingPage/MoveUp";
import PayFlow from "@/components/sections/landingPage/PayFlow";
import SpiralImage from "@/components/sections/landingPage/SpiralImage";
import Header from "@/components/shared/Header";
import Footer from '@/components/shared/Footer';



export default function LandingPage() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === 'dark') setDarkMode(true);
    else setDarkMode(false);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <main>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Information />
      <PayFlow />
      <ChoosePayFlow />
      <Empowering />
      <GetStarted />
      <SpiralImage />
      <MoveUp darkMode={darkMode} />
      <Footer/>
    </main>
  );
}
