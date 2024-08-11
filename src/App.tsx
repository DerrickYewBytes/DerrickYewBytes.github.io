import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import useWindowDimensions from "./util/useWindowDimensions";
import Header from "./layout/Header";

function App() {
  const windowDimension = useWindowDimensions();

  return (
    <>
      <Header />
      <Hero screenSize={windowDimension} />
      <About />
      <Experience screenSize={windowDimension}/>
      <ContactMe />
    </>
  );
}

export default App;
