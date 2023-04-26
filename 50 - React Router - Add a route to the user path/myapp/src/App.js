import { Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
export function App() {
  return (
    <Routes>
      <Route path="/users" element={<GithubUserList />}>
        <Route index element={<h3>Add a user and select it</h3>}/>
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Route>
    </Routes>
  );
}
