import React from "react"
import { Link } from "react-router-dom"

const PictureItem = (props) => {
    const { likes, session, picture } = props
    if (session.loggedIn == true) {

        const toggleLike = () => {
            let liked = false
            let pictureLiked = []
            for (let i = 0; i < likes.length; i++) {
                if (likes && picture.id === likes[i].pictureId && likes[i].userId === session.currentUser.id) {
                    pictureLiked.push(likes[i].id)
                    liked = true
                }
            }
            return (
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
            if (session.currentUser.id == picture.ownerId) {
                return null
            } else {
                return toggleLike()
            }
        }

        return (
            <li className="picture_item">
                <Link to={`/pictures/${picture.id}`}>
                    <div className="overlay">
                        {isUser()}
                    </div>
                    <img className="picture_img" src={picture.pictureUrl} alt="" />
                </Link>
            </li>

        )
    } else {
        return (
            <li className="picture_item">
                <Link to={`/pictures/${picture.id}`}>
                    <div className="overlay">
                    </div>
                    <img className="picture_img" src={picture.pictureUrl} alt="" />
                </Link>
            </li>
        )
    }
}


export default PictureItem