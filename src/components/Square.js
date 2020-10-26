import "./square.css";
import React from "react";

/* export default function Square(props) {
  return <button className="square">{props.value}</button>;
} */

export default function Square(props) {
  return (
    <button className="square" onClick={() => props.onclick()}>
      {props.value}
    </button>
  );
}
