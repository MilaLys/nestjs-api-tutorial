import { v4 as uuidv4 } from 'uuid';

export const PAGES = [
  { link: 'Your lists', path: '/words', uid: uuidv4() },
  { link: 'Create list', path: '/', uid: uuidv4() }
];

export const USER_SETTINGS = {
  ACCOUNT: 'Account',
  DASHBOARD: 'Dashboard',
  LOGOUT: 'Logout',
  PROFILE: 'Profile'
};
