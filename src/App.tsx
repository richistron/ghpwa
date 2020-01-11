import React from 'react';
import './styles.scss';
import GhForm from './GhForm';
import UserInfo from './UserInfo';
import appReducer from './appReducer';
import AppContext from './AppContext';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(appReducer, appReducer());
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <div className={'ghuser'}>
          <h4>Github API</h4>
          <GhForm />
          <UserInfo />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
