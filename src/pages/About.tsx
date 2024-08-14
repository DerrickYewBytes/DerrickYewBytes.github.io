import ArdruinoIcon from "../assets/logos/Arduino.png";
import BootstrapIcon from "../assets/logos/Bootstrap.png";
import CplusplusIcon from "../assets/logos/Cplusplus.png";
import CSSIcon from "../assets/logos/CSS3.png";
import ExpressIcon from "../assets/logos/Express.png";
import FigmaIcon from "../assets/logos/Figma.png";
import GitIcon from "../assets/logos/Git.png";
import GitHubIcon from "../assets/logos/GitHub.png";
import GraphQl from "../assets/logos/GraphQL.png";
import HTMLIcon from "../assets/logos/HTML5.png";
import JavaScriptIcon from "../assets/logos/JavaScript.png";
import MaterialUIIcon from "../assets/logos/Material UI.png";
import MySQLIcon from "../assets/logos/MySQL.png";
import NestjsIcon from "../assets/logos/Nestjs.png";
import NextjsIcon from "../assets/logos/Nextjs.png";
import NodejsIcon from "../assets/logos/Nodejs.png";
import PostgresSQlIcon from "../assets/logos/PostgresSQl.png";
import PythonIcon from "../assets/logos/Python.png";
import ReactIcon from "../assets/logos/React.png";
import ReduxIcon from "../assets/logos/Redux.png";
import SassIcon from "../assets/logos/Sass.png";
import TailwindCssIcon from "../assets/logos/Tailwind CSS.png";
import TypeScriptIcon from "../assets/logos/TypeScript.png";
import Vite from "../assets/logos/vite.png";

type Props = { reference: React.RefObject<HTMLDivElement> };

const techstack = [
  { id: "01", name: "JavaScript (ES6+)", icon: JavaScriptIcon },
  { id: "02", name: "TypeScript", icon: TypeScriptIcon },
  { id: "03", name: "React", icon: ReactIcon },
  { id: "04", name: "Nodejs", icon: NodejsIcon },
  { id: "05", name: "Express", icon: ExpressIcon },
  { id: "06", name: "Nestjs", icon: NestjsIcon },
  { id: "07", name: "Nextjs", icon: NextjsIcon },
  { id: "08", name: "GraphQL", icon: GraphQl },
  { id: "09", name: "Redux", icon: ReduxIcon },
  { id: "10", name: "MySQL", icon: MySQLIcon },
  { id: "11", name: "PostgresSQl", icon: PostgresSQlIcon },
  { id: "12", name: "Tailwind CSS", icon: TailwindCssIcon },
  { id: "13", name: "Sass", icon: SassIcon },
  { id: "14", name: "Bootstrap", icon: BootstrapIcon },
  { id: "15", name: "Vite", icon: Vite },
  { id: "16", name: "Material UI", icon: MaterialUIIcon },
  { id: "17", name: "HTML5", icon: HTMLIcon },
  { id: "18", name: "CSS3", icon: CSSIcon },
  { id: "19", name: "Figma", icon: FigmaIcon },
  { id: "20", name: "Python", icon: PythonIcon },
  { id: "21", name: "GitHub", icon: GitHubIcon },
  { id: "22", name: "Git", icon: GitIcon },
  { id: "23", name: "C++", icon: CplusplusIcon },
  { id: "24", name: "Ardruino", icon: ArdruinoIcon },
];

const About = (props: Props) => {
  return (
    <>
      <div id="about" ref={props.reference} className="central-content page-top-spacing">
        <div className="content">
          <h1>About</h1>
          <h2>Who am I?</h2>
          <p>
            Hello there! I’m a Software Engineer who is passionate in creating
            user-centric and visually delightful website and apps that helps my
            client achieve their goals. My background as a former machine design
            engineer allows me to excel in being attentive to details and bring
            about creative problem solving mindset in the process of crafting a
            solution. With strong set of skills in frontend and backend web
            development, I am eager to dive into new challenges and collaborate
            with others to craft outstanding digital experiences.
          </p>
          <div className="logo-display">
            {techstack.map((tech) => (
              <img
                className="tech-logo"
                key={tech.id}
                src={tech.icon}
                alt={tech.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
