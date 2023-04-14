import { Welcome } from "./welcome";

export function App() {
  const name = "John";
  return (
    <div>
      {name === "John" && <Welcome name={name}/>}
    </div>
  );
}
