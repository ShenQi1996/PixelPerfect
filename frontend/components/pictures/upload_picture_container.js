import React from "react";
import { connect } from "react-redux";
import { createPicture } from "../../actions/picture_action";
import UploadPage from "./upload_page";
import { withRouter } from "react-router";

const mSTP = (state = {}) => {
  // console.log(state);
  return {
    picture: state.entities.pictures,
    currentUser: state.session.currentUser.id
      // title: "",
      // description: "",
      // ownerId: state.session.currentUser.id,
    // },
  };
};

const mDTP = dispatch => {
  return {
    createPicture: picture => dispatch(createPicture(picture)),
  };
};

export default withRouter(connect(mSTP, mDTP)(UploadPage));
