import React from "react"
import {Link} from "react-router-dom"
import PictureItem from "../pictures/picture_item_page"

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // debugger
        this.props.fetchPictures()
    }

    render(){
        const {pictures, session} = this.props
        const userPic = pictures.filter(picture => picture.ownerId == session.id)
        if(!pictures) return null;
        // console.log("im in the profile page")
        // console.log(userPic)
        return(
            <div className="upload_container">
                <Link to="/homefeed">
                    <i className="fas fa-arrow-left profile_arrow"></i>
                </Link>
                <div className="profile_header" >
                <i className="fas fa-user-circle profile_logo_2"></i>
                    <h1>{session.username}</h1>
                </div>
                <div className="discover_container">
                    <ul className="picture_item_container">
                        {userPic.map((pic, idx) => (
                            <PictureItem key={idx} picture={pic} />
                            ))}            
                    </ul>
                </div>
            </div>
        )
    }

}

export default ProfilePage