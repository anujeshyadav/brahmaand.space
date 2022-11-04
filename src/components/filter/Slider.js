import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import ReactSlider from "react-slider";

import "./slider.css";

const Slider = ({ onChange, currentIndex }) => {
  // const [value, setValue] = useState();

  return (
    <ReactSlider
      className="horizontal-slider"
      markClassName="example-mark"
      onChange={onChange}
      trackClassName="example-track"
      defaultValue={0}
      value={currentIndex}
      min={0}
      max={5}
      marks
      renderMark={(props) => {
        if (props.key < currentIndex) {
          props.className = "example-mark example-mark-completed";
        } else if (props.key === currentIndex) {
          props.className = "example-mark example-mark-active";
        }
        return <span {...props} />;
      }}
      orientation="horizontal"
    />
    // <RangeSlider
    //   value={value}
    //   className="ftr-range"
    //   onChange={(changeEvent) => setValue(changeEvent.target.value)}
    // />
  );
};
export default Slider;
