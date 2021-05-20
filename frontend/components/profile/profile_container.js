import React from "react";
import { connect } from "react-redux";
import { fetchPictures } from "../../actions/picture_action";
import ProfilePage from "./profile";

const mSTP = (state = {}, ownProps) => {
  // debugger;
  return {
    session: state.session.currentUser,
    pictures: Object.values(state.entities.pictures),
  };
};

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default connect(mSTP, mDTP)(ProfilePage);
