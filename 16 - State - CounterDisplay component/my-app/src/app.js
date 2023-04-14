import { Counter } from "./counter";

export function App() {
  return (
    <div>
      <Counter intervalValue = {1000} incrementValue = {1} />
    </div>
  );
}
