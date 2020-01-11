import React from 'react';
import AppContext, { reducer } from './AppContext';
import './styles.scss';
import GhForm from './GhForm';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, reducer());
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <div className={'ghuser'}>
          <h4>Github API</h4>
          <GhForm />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
