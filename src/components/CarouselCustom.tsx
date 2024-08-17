import { useState } from "react";

type Props = {
  data: any[];
  RenderComponent: (props: any) => JSX.Element;
};

const CarouselCustom = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % props.data.length);
  };

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + props.data.length) % props.data.length,
    );
  };
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="carousel-wrapper">
      <button className="button-prev" onClick={handlePrevClick}>
      chevron_left
      </button>
      <button className="button-next" onClick={handleNextClick}>
      chevron_right
      </button>
      <div className="carousel">
        {props.data.map((item, index) => (
          <>
            <props.RenderComponent key={index} {...item} />
          </>
        ))}
      </div>{" "}
      <div className="indicator">
        {props.data.slice(0, props.data.length).map((item, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={index === activeIndex ? "dot active" : "dot"}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselCustom;
