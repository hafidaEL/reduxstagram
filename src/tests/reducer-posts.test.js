import posts from '../reducers/posts';

describe('Posts Reducer', () => {
  
  it('should return the initial state', () => {
    expect(  posts(undefined, {}) ).toEqual( [] )
  })

  it('quand on like une photo à 57 likes, on passe à 58 ', () => {
    expect(
      posts(  [
            {
                "code":"BAcyDyQwcXX",
                "caption":"Lunch #hamont",
                "likes":57,
                "id":"1161022966406956503",
                "display_src":"http://toto.jpg"
            }
      ], {  type: 'INCREMENT_LIKES',  index: 0 })).toEqual(
               [  {
                "code":"BAcyDyQwcXX",
                "caption":"Lunch #hamont",
                "likes":58,
                "id":"1161022966406956503",
                "display_src":"http://toto.jpg"
            } ]
    ) })

 it('quand on like une photo au bon index ', () => {
    expect(
      posts(  [
            {
                "code":"BAcyDyQwcXX",
                "caption":"Lunch #hamont",
                "likes":7,
                "id":"1161022966406956503",
                "display_src":"http://toto.jpg"
            },
             {
                "code":"BAcyDyQwcXX",
                "caption":"Lunch #hamont",
                "likes":89,
                "id":"1161022966406956503",
                "display_src":"http://toto.jpg"
            }
      ], {  type: 'INCREMENT_LIKES',  index: 1 })).toEqual(
               [   {
                "code":"BAcyDyQwcXX",
                "caption":"Lunch #hamont",
                "likes":7,
                "id":"1161022966406956503",
                "display_src":"http://toto.jpg"
            },
             {
                "code":"BAcyDyQwcXX",
                "caption":"Lunch #hamont",
                "likes":90,
                "id":"1161022966406956503",
                "display_src":"http://toto.jpg"
            } ]
    ) })


})


