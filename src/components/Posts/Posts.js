


import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink, Prompt } from 'react-router-dom';
import  PostHome  from './postHome';
import  Post1  from "./post1";
import  Post2  from "./post2";

export default class Posts extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        let match = this.props.match;
        console.log(this.props.location.state.type);
        return (

             <div>
                <div>
                    <header>
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink exact className="nav-link" to={`${match.url}`} replace>postHome</NavLink>
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
                        
                        <Route exact path={`${match.url}`} component={PostHome} />

                        <Route path={`${match.url}/post1`} component={Post1} />
                        <Route path={`${match.url}/post2`} component={Post2} />

                    </main>
                </div>
            </div> 
        )
    }
}
