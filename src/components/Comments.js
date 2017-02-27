import React from 'react';

class Comments extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    renderComment(comment,i){
        return (
            <div key={i} className="comment"> 
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                </p>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        const { postId } = this.props;
        this.props.addComment(postId, author, comment);
        // reset des champs du formulaire 
        this.refs.commentForm.reset();
    }

    render(){
        return(
            <div className="comments">
               {this.props.commentsPost.map(this.renderComment)}
               <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                   <input type="text" ref="author" placeholder="author"/>
                   <input type="text" ref="comment" placeholder="comment"/>
                   <input type="submit" hidden />
               </form>
            </div>
        )
    }
}

export default Comments;

Comments.proptypes={
    commentsPost : React.PropTypes.array.isRequired,
    addComment : React.PropTypes.func.isRequired,
    postId : React.PropTypes.string.isRequired,
};
