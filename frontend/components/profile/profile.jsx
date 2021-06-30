import React from "react"
import { Link } from "react-router-dom"
import PictureItem from "../pictures/picture_item_page"

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: this.props.session.currentUser,
            loggedIn: this.props.session.loggedIn,
            NextTap: false
        }
        this.handleNext = this.handleNext.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchPictures()
        // this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchLikes()
        this.setState({ loggedIn: false })
    }
    handleNext() {
        if (this.state.NextTap) {
            this.setState({ NextTap: false })
        } else {
            this.setState({ NextTap: true })
        }
    }

    render() {
        const { likes, pictures } = this.props
        // const pictures = users.pictures

        // console.log(this.props)

        if (!this.state.NextTap) {
            const userPic = pictures.filter(picture => picture.ownerId == this.props.session.currentUser.id)
            return (
                <div className="upload_container">
                    <Link to="/homefeed">
                        <i className="fas fa-arrow-left profile_arrow"></i>
                    </Link>
                    <div className="profile_header" >
                        <i className="fas fa-user-circle profile_logo_2"></i>
                        <h1>{this.props.session.currentUser.username}</h1>
                        <h1 className="profile_header_h1">All your pictures</h1>
                        <button className="profile_header_button nav_border" onClick={this.handleNext}>Liked pictures</button>
                    </div>
                    <div className="discover_container">
                        <ul className="picture_item_container">
                            {userPic.map((pic, idx) => (
                                <PictureItem likes={likes} session={this.state} key={idx} picture={pic} />
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
        if (this.state.NextTap) {
            if (this.props.likes.length < 0) {
                return null
            }
            const userPic = likes.filter(like => like.userId == this.props.session.currentUser.id)
            let likePic = [];
            for (let i = 0; i < userPic.length; i++) {
                for (let j = 0; j < pictures.length; j++) {
                    if (userPic[i].pictureId == pictures[j].id) {
                        likePic.push(pictures[j])
                    }
                }
            }

            // console.log(likePic)
            return (
                <div className="upload_container">
                    <Link to="/homefeed">
                        <i className="fas fa-arrow-left profile_arrow"></i>
                    </Link>
                    <div className="profile_header" >
                        <i className="fas fa-user-circle profile_logo_2"></i>
                        <h1>{this.props.session.currentUser.username}</h1>
                        <h1 className="profile_header_h1">All your liked pictures</h1>
                        <button className="profile_header_button nav_border" onClick={this.handleNext}>My own pictures</button>
                    </div>
                    <div className="discover_container">
                        <ul className="picture_item_container">
                            {likePic.map((pic, idx) => (
                                <PictureItem likes={likes} session={this.state} key={idx} picture={pic} />
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }

}

export default ProfilePage