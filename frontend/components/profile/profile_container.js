import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchlikes } from "../../actions/like_action";
import { fetchPictures } from "../../actions/picture_action";
import {fetchUser} from "../../actions/user_action"
import ProfilePage from "./profile";



const mSTP = (state = {}, ownProps) => {
  return {
    session: state.session,
    pictures: Object.values(state.entities.pictures),
    likes: Object.values(state.entities.likes),
  };
};

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
    fetchLikes: ()=> dispatch(fetchlikes())
  };
};

export default withRouter(connect(mSTP, mDTP)(ProfilePage));
