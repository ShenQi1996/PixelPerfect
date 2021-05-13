import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/session";
import Login from "./login";
import { clearErrors } from "../../actions/session";

const mSTP = state => {
  return {
    errors: Object.values(state.errors.session),
  };
};

const mDTP = dispatch => ({
  loginUser: formUser => dispatch(loginUser(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(Login);
