import { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [data, setData] = useState(null);

  function fetchData() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);

        setData(json);
      });
  }

  useEffect(() => {
    fetchData(username)
  }, [username])

  return (
    <div className="user">
      {data && <img className="userLogo" src={data.avatar_url} />}
      {data && <h1>{data.login}</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}

export default GithubUser;
