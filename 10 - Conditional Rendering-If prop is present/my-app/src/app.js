import { Welcome } from "./welcome";

export function App() {
  const name = "Camelia";
  return (
    <div>
      <Welcome name={name}/>
    </div>
  );
}
