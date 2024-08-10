import MyPhoto from "../assets/my-photo.jpg";
import { Button } from "@material-tailwind/react";
type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div id="hero">
        <div className="left-section">
          <div className="flex flex-col justify-between h-full">
            <section className="flex flex-col gap-3">
              <div>
                <h3>Hi, my name is</h3>
                <h1>Derrick Yew</h1>
                <h2>I build things for the web</h2>
              </div>
              <div>
                <h4>
                  I am a software engineer specializing in{" "}
                  <span className="hightlight-text">front-end</span> and{" "}
                  <span className="hightlight-text">back-end</span> development.
                  I am open to both freelance and fulltime positions anywhere.
                  Let's collab and create something incredible together!
                </h4>
              </div>
            </section>
            <section>
              <div className="flex gap-2">
                <Button variant="filled" className="bg-blue-deep">
                  Linkedin
                </Button>
                <Button
                  variant="outlined"
                  className="border-2 border-sands-dark text-blue-deep"
                >
                  Github
                </Button>
              </div>
            </section>
          </div>
        </div>
        <div className="right-section basis-1/2">
          <img id="my-photo" src={MyPhoto}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
