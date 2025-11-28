import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyNeed from "./components/WhyNeed";
import Services from "./components/Services";
import Support from "./components/Support";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Areas from "./components/Areas";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyNeed />
      <Services />
      <Support />
      <WhyChoose />
      <Process />
      <Areas />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
