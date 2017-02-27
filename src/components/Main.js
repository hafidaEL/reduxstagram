import React from 'react';
import { Link } from 'react-router';
import MonFooter from './MonFooter';


class Main extends React.Component {
    render(){
        return(
            <div>
                <h1><Link to='/'>Reduxstagram</Link></h1>
                {React.cloneElement({...this.props.children}, {...this.props})}
                <MonFooter />
            </div>
        )
    }
}

export default Main;

Main.proptypes={
    posts : React.PropTypes.array.isRequired,
    comments : React.PropTypes.array.isRequired,
    dispatch : React.PropTypes.func.isRequired,
    addComment : React.PropTypes.func.isRequired,
    increment : React.PropTypes.func.isRequired,
};