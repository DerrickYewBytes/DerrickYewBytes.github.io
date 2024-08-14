import { redirect } from "react-router-dom";
type Props = {
  referenceList: {
    hero: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
};

const Header = (props: Props) => {
  function handleClick(link: "hero" | "about" | "experience" | "contact") {
    switch (link) {
      case "hero":
        props.referenceList.hero.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "about":

        props.referenceList.about.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "experience":
        props.referenceList.experience.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "contact":
        props.referenceList.contact.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
    }
  }

  return (
    <>
      <div id="header" className="central-content">
        <div>
          <a className="home" onClick={() => handleClick("hero")}>
            derrick yew
          </a>
        </div>
        <div className="flex gap-10">
          <a className="link" onClick={() => handleClick("about")}>
            about
          </a>
          <a className="link" onClick={() => handleClick("experience")}>
            experience
          </a>
          <a className="link" onClick={() => handleClick("contact")}>
            contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
