import React from 'react';
import { render } from 'react-dom';

export default class PostHome extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <h2>PostHome</h2>
            </div>
        )
    }
}