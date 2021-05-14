import React from "react";
import { connect } from "react-redux";
import { fetchPicture } from "../../actions/picture_action";
import PictureShow from "./picture_show";

const mSTP = (state = {}, ownsProps) => {
  console.log(`this is the state`);
  console.log(state);
  return {
    picture: state.entities.pictures[1],
  };
};

const mDTP = dispatch => ({
  fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
});

export default connect(mSTP, mDTP)(PictureShow);
console;
