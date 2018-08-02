import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Home from './components/Home/home.js';
import Users from './components/Users/users.js';
import Posts from './components/Posts/posts.js';
import ErrorPage from './components/Error/error.js';
// import routes from './Posts/routes';

// import '../../styles/react-router-tabs.css';
import './styles.css';
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let islogin = true;
    console.log(this.props);
    
    return (
      <BrowserRouter>
        <div>

          <header>
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink exact className="nav-link" to="/" replace>Home</NavLink>|
              </li>
              <li className="nav-list__item">
                <NavLink className="nav-link" to="/users" replace>Users</NavLink>|
              </li>
              <li className="nav-list__item">
                <NavLink className="nav-link" to={{pathname:"/posts/web", state: {type: islogin ? 1 : 0}}} replace>Blog posts</NavLink>|
              </li>
              <li className="nav-list__item">
                <NavLink className="nav-link" to="/error" replace>Redirect to Home</NavLink>|
              </li>
              <li className="nav-list__item">
                <NavLink className="nav-link" to="/react" replace>error page</NavLink>
              </li>
            </ul>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/posts/:param" component={Posts} />
              <Redirect from='/error' to='/' />
              <Route component={ErrorPage} />
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
