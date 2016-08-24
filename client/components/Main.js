import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>
                    <Link to="/"> Reduxuxstagram </Link>
                </h1>
                /**
                *  To enable pass this.props to the children
                *  We need to use React.cloneElement()
                * */
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}