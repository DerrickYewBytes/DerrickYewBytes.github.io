import DWPImg from "../assets/dating-pexels.png";

type Props = {};

type IExperienceItem = {
  id: string;
  image: any;
  category: string;
  title: string;
  description: string;
  techStack: string[];
};

const EXPERIENCE = [
  {
    id: "01",
    image: DWPImg,
    category: "Algorithm Solution",
    title: "Date Well Project Match Making Algo",
    description:
      "Built to streamline matchmaker event procedures. Handles participants registration and matchmaking result generation. Built using Google Forms, Google Sheets and Google Script for ease of use and cost effectiveness.",
    techStack: ["Google Script", "Google Sheets", "Google Forms"],
  },
];

const Experience = (props: Props) => {
  return (
    <>
      <div id="experience" className="central-content">
        <div className="content">
          <h1>Experience</h1>
          <div className="carousel">
            {EXPERIENCE.map((exp) => (
              <>
                <ExperienceItem key={exp.id} {...exp} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ExperienceItem = (props: IExperienceItem) => {
  return (
    <div key={props.id} className="carousel-item">
      <img src={props.image} />
      <div>
        <h2>{props.category}</h2>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="tech-stack">
          {props.techStack.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
