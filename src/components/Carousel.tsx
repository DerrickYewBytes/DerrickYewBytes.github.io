import { IExperienceItem } from "../pages/Experience";

type Props = {
  data: any[];
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
      <div className="indicator"></div>
    </div>
  );
};


export default Carousel;
