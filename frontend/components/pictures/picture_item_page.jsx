import React from "react"
import {Link} from "react-router-dom"

const PictureItem = (props) => {
    const {picture} = props

     if(props.loggedIn == true){

        const toggleLike = () =>{
            let liked = false
            let pictureLiked = []
            for(let i = 0; i < props.like.length; i++ ){
                if(props.like && props.picture.id === props.like[i].pictureId){
                    pictureLiked.push(props.like[i].id)
                    liked = true
                }
            }
            return(
                <div className="like_button_box_for_index">
                    {
                        liked ? 
                            <button id="heart">
                              <i className="fas fa-heart"></i>
                            </button> :
                            <button id="heart">
                               <i className="far fa-heart"></i>
                            </button>
                    }
                </div>
            )
        }
        const isUser = () => {
            if(props.session.id == props.picture.ownerId){
                return null
            }else{
                return toggleLike()
            }
        }

        return(
            <li className="picture_item">
                <Link  to={`/pictures/${picture.id}`}> 
                    <div className="overlay">
                        {isUser()}
                    </div>
                    <img className="picture_img" src={picture.pictureUrl} alt="" /> 
                </Link>
            </li>
          
        )
     }else{
         return(
            <li className="picture_item">
            <Link  to={`/pictures/${picture.id}`}> 
                <div className="overlay">
                </div>
                <img className="picture_img" src={picture.pictureUrl} alt="" /> 
            </Link>
        </li>
         )
     }
}


export default PictureItem