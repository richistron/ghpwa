import {TAppContext} from '../AppContext';
import {SyntheticEvent} from 'react';
import loadUserData from './loadUserData';

const handleSubmit = (txt: string, context: TAppContext) => async (e: SyntheticEvent) => {
  e.preventDefault();
  const response = await loadUserData(txt);
  if (response.status === 404) {
    context &&
    context.dispatch({ type: 'LOAD_REPOS_ERROR', error: 'User not found'})
  }
  else {
    const repos = await response.json();
    context &&
    context.dispatch({ type: 'LOAD_REPOS', repos, username: txt })
  }
};

export default handleSubmit;
