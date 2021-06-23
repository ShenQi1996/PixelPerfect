import React from "react"
import { Link } from "react-router-dom"
import PictureItem from "../pictures/picture_item_page"

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     fetch: []
        // }
    }

    componentDidMount() {
        // debugger
        this.props.fetchPictures()
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchLikes()
    }

    render() {
        const { likes, session, users, pictures } = this.props
        // const pictures = users.pictures


        const userPic = pictures.filter(picture => picture.ownerId == this.props.match.params.userId)

        return (
            <div className="upload_container">
                <Link to="/homefeed">
                    <i className="fas fa-arrow-left profile_arrow"></i>
                </Link>
                <div className="profile_header" >
                    <i className="fas fa-user-circle profile_logo_2"></i>
                    <h1>{users.user.username}</h1>
                </div>
                <div className="discover_container">
                    <ul className="picture_item_container">
                        {userPic.map((pic, idx) => (
                            <PictureItem likes={likes} session={session} key={idx} picture={pic} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}

export default UserPage