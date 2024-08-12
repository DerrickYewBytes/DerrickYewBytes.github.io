import { IExperienceItem } from "../pages/Experience";

type Props = {
  data: IExperienceItem[];
  RenderComponent: (props: any) => JSX.Element;
};

const Carousel = (props: Props) => {
  return (
    <div className="carousel">
      {props.data.map((item, index) => (
        <>
            <props.RenderComponent key={index} {...item} />
        </>
      ))}
      <div></div>
    </div>
  );
};

const ExperienceItemSmallScreen = (props: IExperienceItem) => {
  return (
    <div key={props.id} className="carousel-item">
      <div></div>
      <img src={props.image} className="carousel-item-photo" />
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

const ExperienceItemLargeScreen = (props: IExperienceItem) => {
  return (
    <div key={props.id} className="carousel-item">
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
      <img src={props.image} className="carousel-item-photo" />
    </div>
  );
};

export default Carousel;
