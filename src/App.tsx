import { useState } from "react";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import useWindowDimensions from "./util/useWindowDimensions";

function App() {
  const windowDimension = useWindowDimensions();

  return (
    <>
      <Hero screenSize={windowDimension} />
      <About />
      {/* <Experience /> */}
      <ContactMe />
    </>
  );
}

export default App;
