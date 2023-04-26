import { Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
export function App() {
  return (
    <Routes>
      <Route path="/users" element={<GithubUserList />}>
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Route>
    </Routes>
  );
}
