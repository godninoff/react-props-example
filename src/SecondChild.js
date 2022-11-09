import React from "react";

const SecondChild = (props) => {
  return (
    <div className="second-child">
      Дочерний компонент от первого дочернего компонента получил:{" "}
      {props.propValue}
    </div>
  );
};

export default SecondChild;
