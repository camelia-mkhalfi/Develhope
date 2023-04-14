import React from "react";
import { ClickCounter } from "./ClickCounter";

export function Counter() {
  function handleCounterChange(newCount) {
    console.log(`Il valore del contatore è cambiato: ${newCount}`);
  }
    return (
      <div>
      <ClickCounter onCounterChange={handleCounterChange} />
      </div>
    );
  }

