import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function SecondsCounter(props) {
  return (
    <div className="boxContainer text-center align-items-center">
      <div className="clock">
        <i className="fas fa-clock"></i>
      </div>
      <div className="sixth-counter">{props.sixthCounter % 10}</div>
      <div className="fifth-counter">{props.fifthCounter % 10}</div>
      <div className="fourth-counter">{props.fourthCounter % 10}</div>
      <div className="third-counter">{props.thirdCounter % 10}</div>
      <div className="second-counter">{props.secondCounter % 10}</div>
      <div className="first-counter">{props.firstCounter % 10}</div>
    </div>
  );
}

SecondsCounter.propTypes = {
  sixthCounter: PropTypes.number,
  fifthCounter: PropTypes.number,
  fourthCounter: PropTypes.number,
  thirdCounter: PropTypes.number,
  secondCounter: PropTypes.number,
  firstCounter: PropTypes.number,
};

export default SecondsCounter;