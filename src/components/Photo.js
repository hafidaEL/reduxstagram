import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Photo extends React.Component {

 render(){
       const { post , i } = this.props ; 
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <img alt="toto" src={post.display_src} className="grid-photo" />
                        <CSSTransitionGroup
                           transitionName="like"
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={500}>
                             <span key={post.likes} className="likes-heart">{post.likes}</span>
                         </CSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.props.increment.bind(null,i)} className="likes">&hearts; {post.likes}</button>
                    </div>
                </figcaption>
            </figure>

        )
    }

}

export default Photo;

Photo.propTypes = {
    post : React.PropTypes.object.isRequired,
    i : React.PropTypes.number.isRequired,
    increment : React.PropTypes.func.isRequired
};

 // <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>