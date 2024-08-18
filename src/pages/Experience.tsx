import DWPImg from "../assets/dating-pexels.png";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import CTCCMSImg from "../assets/ctc-cms.png";
import CTCImg from "../assets/ctc.png";
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
      "Changi Airport Group's B2B program connecting global travel trade partners with Changi Airport. Offering an array of features catering to both B2B and B2C users such as personalized favorites, convenient downloads, and efficient account management, alongside a comprehensive global search function. Leveraging a fully customized CMS, content is dynamically tailored to each user's preferences and demographics, ensuring an engaging and personalized experience for all users.",
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
  // {
  //   id: "03",
  //   image: CTCCMSImg,
  //   category: "Content Management System",
  //   title: "Changi Travel Circle CMS",
  //   description:
  //     "Equips administrators with powerful features for effective user data management while maintaining high security standards. Automated scheduling promptly eliminates expired promotions, ensuring continuous user engagement. A key highlight is dynamic content segmentation, delivering personalized content based on user demographics and behavior, distinguishing our CMS as a pioneer in travel industry content management.",
  //   techStack: [
  //     "NestJs",
  //     "Typescript",
  //     "MySql",
  //     "Redis",
  //     "TypeORM",
  //     "AWS Lambda",
  //     "Mailchimp",
  //   ],
  // },
];

const Experience = (props: Props) => {
  return (
    <>
      <div
        id="experience"
        className="central-content page-top-spacing"
        ref={props.reference}
      >
        <div>
          <h1>Experience</h1>
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
