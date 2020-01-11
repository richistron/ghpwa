import { IAppState } from './AppContext';
import superStorage from './superStorage';

export type TAction =
  | {
      type: 'LOAD_REPOS';
      repos: IRepos[];
      username: string;
    }
  | { type: 'LOAD_REPOS_ERROR'; error: string };

export interface IRepos {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  language: string;
  mirror_url: string;
  license: string;
  size: number;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  private: boolean;
  fork: boolean;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  archived: boolean;
  disabled: boolean;
  watchers: boolean;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const INITIAL_STATE = superStorage.get('app') || {
  repos: {},
  currentUser: '',
  error: ''
};

const appReducer = (state?: IAppState, action?: TAction): IAppState => {
  if (!state) {
    return superStorage.set('app', { ...INITIAL_STATE });
  }
  if (!action) {
    return superStorage.set('app', state);
  }

  if (action.type === 'LOAD_REPOS') {
    const newState = { ...state };
    newState.repos[action.username] = action.repos;
    return superStorage.set('app', {
      ...newState,
      currentUser: action.username
    });
  }

  if (action.type === 'LOAD_REPOS_ERROR') {
    return superStorage.set('app', {
      ...state,
      error: action.error,
      currentUser: ''
    });
  }

  return superStorage.set('app', state);
};

export default appReducer;
