import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/session";
import Login from "./login";

const mDTP = dispatch => ({
  loginUser: formUser => dispatch(loginUser(formUser)),
});

export default connect(null, mDTP)(Login);
