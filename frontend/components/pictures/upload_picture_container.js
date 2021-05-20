import React from "react";
import { connect } from "react-redux";
import { createPicture } from "../../actions/picture_action";
import UploadPage from "./upload_page";

const mSTP = (state = {}) => {
  // console.log(state);
  return {
    picture: {
      title: "",
      description: "",
      ownerId: state.session.currentUser.id,
    },
  };
};

const mDTP = dispatch => {
  return {
    createPicture: picture => dispatch(createPicture(picture)),
  };
};

export default connect(mSTP, mDTP)(UploadPage);
