import {TAppContext} from '../AppContext';
import {SyntheticEvent} from 'react';
import loadUserData from './loadUserData';

const handleSubmit = (txt: string, context: TAppContext) => (e: SyntheticEvent) => {
  e.preventDefault();
  loadUserData(txt).then(
    response =>
      context &&
      context.dispatch({ type: 'LOAD_REPOS', repos: response, username: txt })
  );
};

export default handleSubmit;
