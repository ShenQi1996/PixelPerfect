import React from "react";
import PictureItem from "../pictures/picture_item_page";

class HomeFeed extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     debugger
    //     this.props.fetchPictures()
    // }
    componentWillMount(){
        this.props.fetchPictures()
        this.props.fetchlikes()
    }

    render(){
        // console.log("I am in the HomeFeed page")
        // console.log(this.props)
        const {pictures, loggedIn, like, session, createLike, deleteLike} = this.props
        if(!pictures) return null
        // const img = pictures.filter(picture => picture.ownerId == currentUser)
        // console.log(img)
        return(
            <div className="upload_container">
                <h3>Home Feed</h3>
                <p className="home_fee_p" >See arts from other people</p>
                <div className="discover_container">
                    <ul className="picture_item_container">
                        {pictures.map((picture, idx) => (
                             <PictureItem  key={idx} picture={picture} loggedIn={loggedIn} like={like} session={session} createLike={createLike} deleteLike={deleteLike} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}


export default HomeFeed