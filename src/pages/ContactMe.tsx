import GithubLogo from "../assets/github-filled.png";
import LinkedinLogo from "../assets/linkedin-filled.png";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/links";

type Props = {};

const ContactMe = (props: Props) => {
  function handleClick(link: string) {
    window.open(link, "_blank");
  }
  return (
    <>
      <div id="contact" className="central-content">
        <div className="content">
          <h1>Say Hello</h1>
          <section className="contact-links">
            <div className="row">
              <a onClick={() => handleClick("www.google.com")}>
                yewcm123@gmail.com
              </a>
              <a onClick={() => handleClick("www.google.com")}>Get my resume</a>
            </div>
            <div className="row">
              <a onClick={() => handleClick(LINKEDIN_URL)}>LinkedIn</a>
              <a onClick={() => handleClick(GITHUB_URL)}>Github</a>
            </div>
            <div />
          </section>
          <hr />
          <div className="footer">
            <p>© Derrick Yew Choon Min 2024.</p>
            <div className="footer-social">
              <img src={GithubLogo} />
              <img src={LinkedinLogo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
