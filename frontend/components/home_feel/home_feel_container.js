import React from "react";
import { connect } from "react-redux";
import { fetchPictures } from "../../actions/picture_action";
import { fetchlikes, createLike, deleteLike } from "..//../actions/like_action";
import HomeFeed from "./home_feel";

const mSTP = state => {
  // console.log("I am in the home feel container");
  // console.log(state);
  return {
    pictures: Object.values(state.entities.pictures),
    likes: Object.values(state.entities.likes),
    session: state.session,
  };
};

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
    fetchlikes: () => dispatch(fetchlikes()),
    createLike: (userId, pictureId) => dispatch(createLike(userId, pictureId)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
  };
};

export default connect(mSTP, mDTP)(HomeFeed);
