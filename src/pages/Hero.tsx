import { Button } from "antd";
import MyPhoto from "../assets/my-photo.jpg";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/links";

type Props = {
  screenSize: "large" | "medium" | "small";
  reference: React.RefObject<HTMLDivElement>;
};

const Hero = (props: Props) => {
  return (
    <div
      id="hero"
      ref={props.reference}
      className="central-content snap-always snap-start"
    >
      {props.screenSize === "large" ? (
        <>
          <HeroSection />
          <PhotoSection />
        </>
      ) : props.screenSize === "medium" || props.screenSize === "small" ? (
        <>
          <PhotoSection />
          <HeroSection />
        </>
      ) : null}
    </div>
  );
};

const HeroSection = () => {
  function handleClick(link: string) {
    window.open(link, "_blank");
  }
  return (
    <section className="greet-section">
      <div className="greet-header">
        <div>
          <h3>Hi, my name is</h3>
          <h1>Derrick Yew</h1>
          <h2>I build things for the web</h2>
        </div>
        <div>
          <h4>
            I am a software engineer specializing in{" "}
            <span className="hightlight-text">front-end</span> and{" "}
            <span className="hightlight-text">back-end</span> development. I am
            open to both freelance and fulltime positions anywhere. Let's collab
            and create something incredible together!
          </h4>
        </div>
      </div>
      <div className="greet-buttons">
        <Button
          type="primary"
          size="large"
          className="px-8 py-4 bg-blue-deep"
          onClick={() => {
            handleClick(LINKEDIN_URL);
          }}
        >
          Linkedin
        </Button>
        <Button
          className="px-8 py-4 border-2 border-sands-dark text-blue-deep"
          size="large"
          onClick={() => handleClick(GITHUB_URL)}
        >
          Github
        </Button>
      </div>
    </section>
  );
};

const PhotoSection = () => {
  return (
    <section className="photo-section">
      <img id="my-photo" src={MyPhoto} />
    </section>
  );
};

export default Hero;
