import { IRepos } from "../appReducer";

const loadUserData = async (username: string): Promise<IRepos[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {method: 'GET'});
  const json = await response.json();
  return json;
};

export default loadUserData;