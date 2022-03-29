import React from "react";
import { Redirect } from 'react-router-dom';

class PictureShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            comment: "",
            showError: false,
        }
        this.handleback = this.handleback.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
        // this.handleprofile = this.handleprofile(this)
    }

    componentDidMount() {
        this.props.fetchPicture(this.props.match.params.pictureId)
        this.props.fetchlikes()
        this.props.fetchComments()
        // this.props.fetchUser(this.props.picture.ownerId)
    }

    handleback() {
        this.props.history.goBack()
    }


    toggleLike() {
        let liked = false
        let pictureLiked = []
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes && this.props.picture.id === this.props.likes[i].pictureId && this.props.session.id == this.props.likes[i].userId) {
                pictureLiked.push(this.props.likes[i].id)
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

    handleInput(type){
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.comment){
            this.setState({showError: true})
        }
       this.props.createComment(this.props.session.id,this.props.picture.id, this.props.session.username,this.state.comment).then(
           this.setState({comment: ""})
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

    filter_comments(){
        let Picture_Comments
        if(this.props.comments.length === 0){
            return (
                <div></div>
            )
        }else{
            Picture_Comments = this.props.comments.filter((comment, idx) => (
                comment.pictureId === this.props.picture.id
            )) 
            return(
                <div>
                    <h1>{Picture_Comments.length} Comments</h1>
                    {Picture_Comments.map((comment, idx) => (
                        <div className="comment_info" key={idx}>
                            <h2>
                                {comment.username}
                            </h2>
                            {comment.comment}
                        </div>
                    ))}
                </div>
            )
        }
        
    }

    handleError(){
        if(this.state.showError){
            return (
            <ul>
                <li className="comment_error">Comment can not be empty</li>
            </ul>
            )
        }else{
            <div></div>
        }
    }

    // handleUser() {
    //     if (this.props.picture === null) {
    //         return null
    //     }

    //     return (
    //         <div>
    //             Username: { }
    //         </div>
    //     )
    // }

    render() {
        const { picture } = this.props

        // let Picture_Comments = comments.filter((comment, idx) => (
        //     comment.pictureId === picture.id
        // )) 
        if (!picture) return null
        // console.log(`I am in the picture show page`)
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
                                {/* {this.handleUser()} */}
                                <i onClick={() => this.props.history.push(`/users/${picture.ownerId}`)} className="fas fa-user-circle profile_logo"></i>
                                <h5>{picture.title}</h5>
                            </div>
                            <p>{picture.description}</p>
                        </div>
                        <form className="user_comment_form">
                            <label htmlFor="comment">comment:</label>
                            {this.handleError()}
                            <textarea name="comment" id="comment" rows="5" value={this.state.comment} onChange={this.handleInput("comment")}></textarea>
                            <button  onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="picture_comments">
                        {this.filter_comments()}
                    </div>
                </div>
            </div>
        )
    }

}

export default PictureShow