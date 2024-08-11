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
      <div
        id="main-container"
        className={
          windowDimension === "large"
            ? "large"
            : windowDimension === "medium"
              ? "medium"
              : "small"
        }
      >
        <Hero screenSize={windowDimension} />
        {/* <About />
      <Experience />
      <ContactMe /> */}
      </div>
    </>
  );
}

export default App;
