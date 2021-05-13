import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import { clearErrors } from "../../actions/session";
import Signup from "./signup";

const mSTP = state => {
  return {
    errors: Object.values(state.errors.session),
  };
};

const mDTP = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(Signup);
