import React from 'react';

interface IAppState {
  foo: boolean;
}

interface TAction {
  type: string;
}

const INITIAL_STATE = {
  foo: false
};

export const reducer = (state?: IAppState, action?: TAction): IAppState => {
  if (!state) {
    return { ...INITIAL_STATE };
  }
  return {
    foo: true
  };
};

const AppContext = React.createContext<{
  state: IAppState;
  dispatch: React.DispatchWithoutAction;
} | null>(null);

export default AppContext;
