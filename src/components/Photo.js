import React from 'react';

class Photo extends React.Component {

 render(){
       const { post , i } = this.props ; 
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <img src={post.display_src} className="grid-photo" />
                    <span className="likes-heart">{post.likes}</span>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes">&hearts; {post.likes}</button>
                    </div>
                </figcaption>
            </figure>

        )
    }

}

export default Photo;

Photo.propTypes = {
    post : React.PropTypes.object.isRequired,
    i : React.PropTypes.number.isRequired
};

/*
{
      "code":"BAcyDyQwcXX",
      "caption":"Lunch #hamont",
      "likes":56,
      "id":"1161022966406956503",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
   }
*/