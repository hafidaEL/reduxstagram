import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
    render(){
        const { postId } = this.props.params;
        // trouver le bon post
        const i = this.props.posts.findIndex(  (post) => post.code  === postId );
        const post = this.props.posts[i];

        // les commentaires du post
        const commentsPost = this.props.comments[postId] || [];
        return(
            <div>
                <Photo i={i} post={post} increment={this.props.increment} />
                <Comments commentsPost={commentsPost} addComment={this.props.addComment} postId={postId} />
            </div>
        )
    }
}

export default Single;

Single.proptypes={
    posts : React.PropTypes.array.isRequired,
    comments : React.PropTypes.array.isRequired,
    increment : React.PropTypes.func.isRequired,
    addComment : React.PropTypes.func.isRequired,

};
