import { Welcome } from "./welcome";

export function App() {
  const name = "Camelia";
  const age = 25;
  return (
    <div>
      <Welcome name={name} age={age} />
    </div>
  );
}
