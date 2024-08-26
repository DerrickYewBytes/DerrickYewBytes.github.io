import CTCCMSImg from "../assets/ctc-cms.png";
import CTCImg from "../assets/ctc.png";
import DWPImg from "../assets/dating-pexels.png";
import CarouselCustom from "../components/CarouselCustom";

type Props = {
  screenSize: "small" | "medium" | "large";
  reference: React.RefObject<HTMLDivElement>;
};

export type IExperienceItem = {
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
  {
    id: "02",
    image: CTCImg,
    category: "E-commerce",
    title: "Changi Travel Circle",
    description:
      "Changi Airport Group's B2B program links global travel trade partners with Changi airport, offering features like personalized favorites, easy voucher downloads, and account management, along with a robust global search. Paired with CTC CMS, the content can be dynamically tailored to user preferences and demographics, ensuring an engaging and personalized experience for all.",
    techStack: [
      "NestJs",
      "Typescript",
      "MySql",
      "Redis",
      "TypeORM",
      "AWS Lambda",
      "Mailchimp",
    ],
  },
  {
    id: "03",
    image: CTCCMSImg,
    category: "Content Management System",
    title: "Changi Travel Circle CMS",
    description:
      "Provides administrators with robust tools for secure user data management. Automated scheduling removes expired promotions promptly, keeping user engagement high. The highlight feature is dynamic content segmentation, which delivers personalized content based on user demographics and behavior, setting our CMS apart in the travel industry.",
    techStack: [
      "NestJs",
      "Typescript",
      "MySql",
      "Redis",
      "TypeORM",
      "AWS Lambda",
      "Mailchimp",
    ],
  },
];

const Experience = (props: Props) => {
  return (
    <>
      <div
        id="experience"
        className="page-top-spacing snap-always snap-center"
        ref={props.reference}
      >
        <div>
          <h1 className="title">Experience</h1>
          <CarouselCustom
            data={EXPERIENCE}
            RenderComponent={
              props.screenSize === "large"
                ? ExperienceItemLargeScreen
                : ExperienceItemSmallScreen
            }
          />
        </div>
      </div>
    </>
  );
};

const ExperienceItemSmallScreen = (props: IExperienceItem) => {
  return (
    <div key={props.id} className="experience-item">
      <img src={props.image} className="experience-item-photo" />
      <div className="experience-item-content">
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

const ExperienceItemLargeScreen = (props: IExperienceItem) => {
  return (
    <div key={props.id} className="experience-item">
      <div className="experience-item-content">
        <h2>{props.category}</h2>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="tech-stack">
          {props.techStack.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>
      </div>
      <img src={props.image} className="experience-item-photo basis-6/12" />
    </div>
  );
};

export default Experience;
