function postComments(state=[], action) {
 switch (action.type) {
        case 'ADD_COMMENT':
           return [   ...state, { text: action.comment , user : action.author } ];
        case 'REMOVE_COMMENT':
            return state;
        default:
            return state;
    }
}

function comments(state=[], action) {
    return { ...state,  [action.postId] : postComments(state[action.postId], action) }
}
export default comments;

