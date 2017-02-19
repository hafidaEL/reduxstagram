function posts(state=[], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
          const i = action.index;

           return [ 
                ...state.slice(0,i),
              {  ...state[i], likes : state[i].likes +1 },
              ...state.slice(i+1)
           ]
           
    
        default:
            return state;
    }
    
}

export default posts;



// INCREMENT_LIKES 7      50  => 51
// INCREMENT_LIKES 6      4 => 5



