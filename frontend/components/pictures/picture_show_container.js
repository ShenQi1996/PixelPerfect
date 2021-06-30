import React from "react";
import { connect } from "react-redux";
import { fetchPicture } from "../../actions/picture_action";
import { fetchlikes, createLike, deleteLike } from "../../actions/like_action";
import PictureShow from "./picture_show";
import {fetchUser} from "../../actions/user_action";


const mSTP = (state, ownProps) => {
  // console.log("I am in the show page container");
  // // console.log(state);
  // console.log(ownProps);

  return {
    picture: state.entities.pictures[ownProps.match.params.pictureId],
    likes: Object.values(state.entities.likes),
    session: state.session.currentUser,
    users: state.entities.users,
  };
};

const mDTP = dispatch => {
  return {
    fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
    fetchlikes: () => dispatch(fetchlikes()),
    createLike: (userId, pictureId) => dispatch(createLike(userId, pictureId)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchUser: (userId)=> dispatch(fetchUser(userId)),
  };
};

export default connect(mSTP, mDTP)(PictureShow);
