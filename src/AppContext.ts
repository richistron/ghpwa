import React from 'react';
import { IRepos, TAction } from './appReducer';

export interface IAppState {
  repos: { [key: string]: IRepos[] };
  currentUser: string;
}

export type TAppContext = {
  state: IAppState;
  dispatch: (action: TAction) => void;
} | null;

const AppContext = React.createContext<TAppContext>(null);

export default AppContext;
