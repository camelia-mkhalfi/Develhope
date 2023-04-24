import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ShowGithubUser } from "./showGithubUser";
import { GitHubUser } from "./GitHubUser";

export function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users/:username">
          <ShowGithubUser>
            <GitHubUser />
          </ShowGithubUser>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
