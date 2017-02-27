/* Reducer pour les commentaires */

function postComments(state=[], action) {
 switch (action.type) {
        case 'ADD_COMMENT':
           // etat avec le commentaire en plus
           return [  ...state, { text: action.comment , user : action.author } ];
        default:
            return state;
    }
}

function comments(state=[], action) {
  // let newState = Object.assign({}, state);
  //  newState[action.postId] = postComments(state[action.postId], action);
  //  return newState;

 return  { ...state, 
      [action.postId] : postComments(state[action.postId], action)
 } 
}
    

export default comments;

