type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div id="hero">
        <div className="left-section">
          <div>
            <h3>Hi, my name is</h3>
            <h1>Derrick Yew</h1>
            <h2>I build things for the web</h2>
          </div>
          <div>
            <h4>
              I am a software engineer specializing in front-end and back-end
              development. I am open to both freelance and fulltime positions
              anywhere. Let's collab and create something incredible together!
            </h4>
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    </>
  );
};

export default Hero;
