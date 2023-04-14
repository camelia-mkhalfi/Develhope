import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./paginator.css";

export default function Paginator(props) {
  const highlited = {
    backgroundColor: "green",
  };

  return (
    <center>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <button  class="btn btn-light"
          style={props.highlited === el ? highlited : {}}
          onClick={() => props.handleClick(el)}>
          {el}
        </button>
      ))}
    </center>
  );
}
