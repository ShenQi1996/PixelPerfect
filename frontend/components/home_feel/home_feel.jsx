import React from "react";
import PictureItem from "../pictures/picture_item_page";

class HomeFeed extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount(){
    //     debugger
    //     this.props.fetchPictures()
    // }
    componentWillMount() {
        this.props.fetchPictures()
        this.props.fetchlikes()
    }

    render() {
        // console.log("I am in the HomeFeed page")
        // console.log(this.props)
        const { pictures, likes, session, createLike, deleteLike } = this.props
        if (!pictures) {
            return null
            // const img = pictures.filter(picture => picture.ownerId == currentUser)
        } else {
            return (
                <div className="upload_container">
                    <h3>Home Feed</h3>
                    <p className="home_fee_p" >See all arts</p>
                    <div className="discover_container">
                        <ul className="picture_item_container">
                            {pictures.map((picture, idx) => (
                                <PictureItem key={idx} picture={picture} likes={likes} session={session} createLike={createLike} deleteLike={deleteLike} />
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}


export default HomeFeed