import GithubLogo from "../assets/github-filled.png";
import LinkedinLogo from "../assets/linkedin-filled.png";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/links";
import resumePdf from "../../public/derrick-yew-resume.pdf"

type Props = { reference: React.RefObject<HTMLDivElement> };

const ContactMe = (props: Props) => {
  function handleClick(link: string) {
    window.open(link, "_blank");
  }
  return (
    <>
      <div
        id="contact"
        ref={props.reference}
        className="central-content page-top-spacing snap-always snap-end"
      >
        <div className="content">
          <h1>Say Hello</h1>
          <section className="contact-links">
            <div className="row">
              <a href="mailto:derrickyewbytes@gmail.com">
                derrickyewbytes@gmail.com
              </a>
              <a
                href={resumePdf}
                target="_blank"
              >
                Get my resume
              </a>
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
              <img src={GithubLogo} onClick={() => handleClick(GITHUB_URL)} />
              <img
                src={LinkedinLogo}
                onClick={() => handleClick(LINKEDIN_URL)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
