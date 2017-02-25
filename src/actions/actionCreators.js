export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index 
    }
}

export function addComment(postID, author, comment) {
    return {
        type : 'ADD_COMMENT',
        postID, 
        author, 
        comment
    }
}