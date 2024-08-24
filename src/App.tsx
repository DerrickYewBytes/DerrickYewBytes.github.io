import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import useWindowDimensions from "./util/useWindowDimensions";
import Header from "./layout/Header";
import { useEffect, useRef, useState } from "react";

function App() {
  const windowDimension = useWindowDimensions();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<
    "hero" | "about" | "experience" | "contact"
  >("hero");

  useEffect(() => {
    console.log("section:", currentSection);
  }, [currentSection]);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px",
      threshold: 0.3, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "hero") {
            setCurrentSection("hero");
          } else if (entry.target.id === "about") {
            setCurrentSection("about");
          } else if (entry.target.id === "experience") {
            setCurrentSection("experience");
          } else if (entry.target.id === "contact") {
            setCurrentSection("contact");
          }
        }
      });
    }, options);

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroTop = heroRef.current?.getBoundingClientRect().top;
      const aboutTop = aboutRef.current?.getBoundingClientRect().top;
      const experienceTop = experienceRef.current?.getBoundingClientRect().top;
      const contactTop = contactRef.current?.getBoundingClientRect().top;
      if (heroTop && aboutTop && experienceTop && contactTop) {
        if (heroTop < 50) {
          setCurrentSection("hero");
        }
        if (aboutTop < 50) {
          setCurrentSection("about");
        }
        if (experienceTop < 50) {
          setCurrentSection("experience");
        }
        if (contactTop < 50) {
          setCurrentSection("contact");
        }
      }
    };
    window.addEventListener("scroll", () => {
      if (
        heroRef.current &&
        aboutRef.current &&
        experienceRef.current &&
        contactRef.current
      ) {
        handleScroll();
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="max-h-screen overflow-y-scroll snap-y snap-mandatory">
        <Header
          referenceList={{
            hero: heroRef,
            about: aboutRef,
            experience: experienceRef,
            contact: contactRef,
          }}
          currentSection={currentSection}
        />

        <Hero screenSize={windowDimension} reference={heroRef} />
        <About reference={aboutRef} />
        <Experience screenSize={windowDimension} reference={experienceRef} />
        <ContactMe reference={contactRef} />
      </div>
    </>
  );
}

export default App;
