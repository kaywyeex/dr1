import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

// apps
import Home from './Home';
import Posts from './Posts';
import Todos from './Todos';

export default props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home name="Alligator.io" {...props} />}
        />
        <Route path="/todos" component={Todos} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
};
