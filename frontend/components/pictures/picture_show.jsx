import React from "react";
import { Link } from "react-router-dom"

class PictureShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleback = this.handleback.bind(this)
    }

    componentDidMount() {
        this.props.fetchPicture(this.props.match.params.pictureId)
        this.props.fetchlikes()
    }

    handleback() {
        this.props.history.goBack()
    }

    toggleLike() {
        let liked = false
        let pictureLiked = []
        for (let i = 0; i < this.props.like.length; i++) {
            if (this.props.like && this.props.picture.id === this.props.like[i].pictureId) {
                pictureLiked.push(this.props.like[i].id)
                liked = true
            }
        }
        return (
            <div className="like_button_box">
                {
                    liked ?
                        <button className="like_button" onClick={() => this.props.deleteLike(pictureLiked[0])}>
                            <i className="fas fa-heart"></i>
                        </button> :
                        <button className="like_button" onClick={() => this.props.createLike(this.props.session.id, this.props.picture.id)}>
                            <i className="far fa-heart"></i>
                        </button>
                }
            </div>
        )
    }

    isUser() {
        // debugger
        if (this.props.session === null) {
            return null
        } else if (this.props.session.id === this.props.picture.ownerId) {
            return null
        } else {
            return this.toggleLike()
        }
    }

    render() {
        const { picture } = this.props
        if (!picture) return null
        // console.log(`I am in the picture show page`)
        // console.log(this.props)
        // debugger

        return (
            <div>
                <div className="picture_show_container">
                    <div className="picture_show_box1">
                        <i className="fas fa-arrow-left" onClick={this.handleback}></i>
                    </div>
                    <div className="picture_show_box2">
                        <div>
                            <img className="picture_show_img" src={picture.pictureUrl} alt="" />
                        </div>
                    </div>
                </div>
                <div className="picture_show_info">
                    <div className="picture_info">
                        {this.isUser()}
                        <div className="picture_info_box1">
                            <div className="picture_info_box2">
                                <i className="fas fa-user-circle profile_logo"></i>
                                <h5>{picture.title}</h5>
                            </div>
                            <p>{picture.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PictureShow