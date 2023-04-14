import React from "react";

export default function Paginator(props) {
  const highlited = {
    backgroundColor: "red",
  };

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <button
          style={props.highlited === el ? highlited : {}}
          onClick={() => props.handleClick(el)}>
          {el}
        </button>
      ))}
    </>
  );
}
