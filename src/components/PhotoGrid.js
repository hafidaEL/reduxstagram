import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
    render(){
        return(
            <div className="photo-grid">
                { this.props.posts.map((post,i) => <Photo key={i} i={i} post={post} increment={this.props.increment} /> ) }
            </div>

        )
    }
}

export default PhotoGrid;

PhotoGrid.proptypes={
    posts : React.PropTypes.array.isRequired,
    comments : React.PropTypes.array.isRequired,
    increment : React.PropTypes.func.isRequired

};