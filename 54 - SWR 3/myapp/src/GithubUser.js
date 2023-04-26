import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username = "" }) {
  const [user,error, mutate] = useGithubUser(username);
  
  return (
    <div>
      {user && (
        <div>
          <h1>{user.login}</h1>
          <h2>{user.name}</h2>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="300px"
            height="300px"
          />
          <br />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Github link
          </a>
        </div>
      )}
      {error && <h1 className="text-red-500">{error}</h1>}
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
}
