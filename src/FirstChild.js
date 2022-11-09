import React from "react";
import SecondChild from "./SecondChild";

const FirstChild = ({ propValue }) => {
  return (
    <div className="first-child">
      Первый дочерний компонент получил: {propValue}
      <SecondChild propValue={propValue} />
    </div>
  );
};

export default FirstChild;
