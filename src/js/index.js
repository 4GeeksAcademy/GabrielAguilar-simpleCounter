//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/home.jsx";

let counter = 0;
setInterval(() => {
  const sixthDigit = Math.floor(counter / 100000);
  const fifthDigit = Math.floor(counter / 10000);
  const fourthDigit = Math.floor(counter / 1000);
  const thirdDigit = Math.floor(counter / 100);
  const secondDigit = Math.floor(counter / 10);
  const firstDigit = Math.floor(counter / 1);
  counter++;

  //render your react application
  ReactDOM.render(
    <SecondsCounter
      firstCounter={firstDigit}
      secondCounter={secondDigit}
      thirdCounter={thirdDigit}
      fourthCounter={fourthDigit}
      fifthCounter={fifthDigit}
      sixthCounter={sixthDigit}
    />,
    document.querySelector("#app")
  );
}, 1000);