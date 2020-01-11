const loadUserData = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {method: 'GET'});
  return response;
};

export default loadUserData;