import React from "react";
import PictureItem from "./picture_item_page";

class PictureIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPictures()
        this.props.fetchlikes()
    }

    render(){
        const {pictures, loggedIn, like, session, createLike, deleteLike} = this.props
        if(!pictures) return null;
        // console.log("I am in the index page")
        return(
            <div className="upload_container">
                <h3>Discover</h3>
                <div className="discover_container">
                    <ul className="picture_item_container">
                        {pictures.map((picture, idx) =>( 
                            <PictureItem  key={idx} picture={picture} loggedIn={loggedIn} like={like} session={session} createLike={createLike} deleteLike={deleteLike} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}

export default PictureIndex