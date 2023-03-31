import React from "react";

export function Sum(props){
  const sum = (array) =>{
    let somma = 0;
    for (const key in array) {
      somma = somma + array[key];
      }
      return somma;
  }
  return(
      <div>
        <h1>Sum numbers props</h1>
        {props.number && <h2>The sum of the number are: {sum(props.number)}</h2>}
        
      </div>
  )
}
