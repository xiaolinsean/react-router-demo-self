import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home/home.js';
import Users from './components/Users/users.js';
import Posts from './components/Posts/posts.js';
// import routes from './Posts/routes';

// import '../../styles/react-router-tabs.css';
import './styles.css';
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <BrowserRouter>
        <div>

          <header>
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink exact className="nav-link" to="/" replace>Home</NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink className="nav-link" to="/users" replace>Users</NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink className="nav-link" to="/posts" replace>Blog posts</NavLink>
              </li>
            </ul>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/posts" component={Posts} />
            </Switch>
          </main>

        </div>
      </BrowserRouter>
    )
  }
}

/**
 * Render our Routes from a central config, passing each routes' nested routes as as its own `routes` prop. 
 * See: https://reacttraining.com/react-router/web/example/route-config
 * @param {Object[]} routes
 * @returns {Object[]} Array of <Routes />
 */
// const RoutesWithSubRoutes = routes =>
//   routes.map((route, i) => (
//     <Route
//       key={i}
//       exact={route.exact || false}
//       path={route.path}
//       render={props => <route.component {...props} routes={route.routes} />}
//     />
//   ));

render(<App />, document.getElementById('app'));
