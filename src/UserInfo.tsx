import React, { useContext } from 'react';
import AppContext, { IAppState } from './AppContext';
import Starts from './Starts';

function getCurrentUser(state: IAppState, currentUser: string) {
  const items = state.repos[currentUser] || null;
  if (!items) {
    return null;
  }
  return [...items].sort((a, b) => b.stargazers_count - a.stargazers_count);
}

const UserInfo: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const currentUser = getCurrentUser(context.state, context.state.currentUser);
  if (!currentUser) return null;
  const [repo] = currentUser;
  if (!repo) return null;
  return (
    <div className={'ghuserinfo'}>
      <ul className={'list-group'}>
        <li className={'list-group-item'}>
          <img
            alt={context.state.currentUser}
            height={50}
            src={repo.owner.avatar_url}
          />
          {repo.owner.login}
        </li>
        {currentUser.map(r => (
          <li className={'list-group-item'} key={r.id}>
            <a href={r.html_url} target={'_blank'}>
              {r.name}
            </a>
            <Starts stars={r.stargazers_count} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
