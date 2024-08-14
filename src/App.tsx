import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import useWindowDimensions from "./util/useWindowDimensions";
import Header from "./layout/Header";
import { useRef } from "react";

function App() {
  const windowDimension = useWindowDimensions();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        referenceList={{
          hero: heroRef,
          about: aboutRef,
          experience: experienceRef,
          contact: contactRef,
        }}
      />
      <Hero screenSize={windowDimension} reference={heroRef} />
      <About reference={aboutRef} />
      <Experience screenSize={windowDimension} reference={experienceRef} />
      <ContactMe reference={contactRef} />
    </>
  );
}

export default App;
