import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
type Props = {
  referenceList: {
    hero: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  currentSection: "hero" | "about" | "experience" | "contact";
};

const Header = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClick(link: "hero" | "about" | "experience" | "contact") {
    setIsMobileMenuOpen(false);
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

  const setHeaderColor = () => {
    switch (props.currentSection) {
      case "hero":
        return "whitebg";
      case "about":
        return "bluebg";
      case "experience":
        return "whitebg";
      case "contact":
        return "sandbg";
    }
  };

  return (
    <>
      <div id="header" className={`central-content ${setHeaderColor()}`}>
        <div>
          <a className="home" onClick={() => handleClick("hero")}>
            derrick yew
          </a>
        </div>
        <div className="nav desktop">
          <HeaderNav handleClick={handleClick} />
        </div>
        <div className="nav mobile">
          <Button
            type="text"
            size="large"
            icon={<MenuOutlined className="menu-icon" />}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          />
          <div
            className={`mobile-menu ${isMobileMenuOpen ? "open" : "close"} `}
          >
            <div className="mobile-menu-button-section">
              <Button
                type="text"
                size="large"
                className="mobile-menu-close-button"
                icon={<CloseOutlined className="menu-icon" />}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
            <div className="mobile-menu-content">
              <div className="mobile-menu-content-fixed">
                <HeaderNav handleClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type HeaderNavProps = {
  handleClick: (link: "hero" | "about" | "experience" | "contact") => void;
};
const HeaderNav = ({ handleClick }: HeaderNavProps) => {
  return (
    <>
      <div className="header-links">
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
    </>
  );
};

export default Header;
