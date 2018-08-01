import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link, Redirect } from 'react-router-dom';
import {postHome} from './postHome';
import { post1 } from "./post1";
import { post2 } from "./post2";

const User = ({ match }) => {
    console.log(match);
    return <h1>Hello </h1>
}

export default ({ match }) => (
        <div>
            <header>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink exact className="nav-link" to={`${match.url}/postHome`} replace>postHome</NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink className="nav-link" to={`${match.url}/post1`} replace>post1</NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink className="nav-link" to={`${match.url}/post2`} replace>post2</NavLink>
                    </li>
                </ul>
            </header>
            <main>
            <Route exact path={`${match.url}`} render={() => (
                <Redirect to={`${match.url}/postHome`} />
            )} />    
            <Route path={`${match.url}/postHome`} component={postHome} />

            <Route path={`${match.url}/post1`} render={() => <h3>post1</h3>} component={post1} />
            <Route path={`${match.url}/post2`} render={() => <h3>post2</h3>} component={post2} />
                    {/* {RoutesWithSubRoutes(routes)} */}
                
            </main>
        </div>
    
);
