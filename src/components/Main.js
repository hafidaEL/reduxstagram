import React from 'react';
import { Link } from 'react-router';


class Main extends React.Component {
    render(){
        return(
            <div>
                <h1><Link to='/'>Reduxstagram</Link></h1>
                {React.cloneElement({...this.props.children}, {...this.props})}
            </div>
        )
    }
}

export default Main;

Main.proptypes={
    posts : React.PropTypes.array.isRequired,
    comments : React.PropTypes.array.isRequired,
    dispatch : React.PropTypes.func.isRequired
};