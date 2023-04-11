import { Counter } from "./counter";

export function App() {
  return (
    <div>
      <Counter countValue = {0} intervalValue = {1000} incrementValue = {1} />
    </div>
  );
}
