import App from './App';
import Home from './Home';
import Posts from './Posts';
import Todos from './Todos';

const Routes = [
  {
    path: '/',
    exact: true,
    bundle: 'home',
    component: Home,
  },
  {
    path: '/posts',
    bundle: 'posts',
    component: Posts,
  },
  {
    path: '/todos',
    bundle: 'todos',
    component: Todos,
  },
];

export default Routes;
