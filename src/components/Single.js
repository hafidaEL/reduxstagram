import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
    render(){
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex(  (post) => post.code  === postId );
        const post = this.props.posts[i];
        const commentsPost = this.props.comments[postId] || [];
        return(
            <div>
                <Photo i={i} post={post} {...this.props} />
                <Comments commentsPost={commentsPost} {...this.props}/>
            </div>
        )
    }
}

export default Single;

Single.proptypes={
    posts : React.PropTypes.array.isRequired,
    comments : React.PropTypes.array.isRequired,
};
