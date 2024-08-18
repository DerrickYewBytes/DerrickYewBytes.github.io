import { useEffect, useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

type Props = {
  data: any[];
  RenderComponent: (props: any) => JSX.Element;
};

const CarouselCustom = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right"| "">("");

  const handleNextClick = () => {
    setDirection("right");
    setActiveIndex((prevIndex) => (prevIndex + 1) % props.data.length);
  };
  
  

  const handlePrevClick = () => {
    setDirection("left");
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + props.data.length) % props.data.length,
    );
  };
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setDirection(index > activeIndex ? "right" : "left");
  };
  return (
    <div className="carousel-wrapper">
      <div className="ui">
        <Button
          icon={<LeftOutlined />}
          className="button-prev"
          type="text"
          onClick={handlePrevClick}
        ></Button>
        <div className="indicator">
          {props.data.slice(0, props.data.length).map((item, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={index === activeIndex ? "dot active" : "dot"}
            ></button>
          ))}
        </div>
        <Button
          icon={<RightOutlined />}
          className="button-next"
          type="text"
          onClick={handleNextClick}
        ></Button>{" "}
      </div>
      <div className={`carousel ${direction}`}>
        {props.data.map((item, index) => (
          <>
            <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <props.RenderComponent key={index} {...item} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CarouselCustom;
