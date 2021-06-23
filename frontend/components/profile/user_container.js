import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchlikes } from "../../actions/like_action";
import { fetchPictures } from "../../actions/picture_action";
import {fetchUser} from "../../actions/user_action"
import UserPage from "./user";



const mSTP = (state = {}, ownProps) => {
  return {
    session: state.session,
    pictures: Object.values(state.entities.pictures),
    users: state.entities.users,
    likes: Object.values(state.entities.likes),
  };
};

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
    fetchUser: (userId)=> dispatch(fetchUser(userId)),
    fetchLikes: ()=> dispatch(fetchlikes())
  };
};

export default withRouter(connect(mSTP, mDTP)(UserPage));
