import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import UserUpdateForm from "./user_update_form";
import { updateUser } from "../../../actions/users_actions";
import {
  getCurrentUser,
  getSessionId
} from "../../../selectors/users_selectors";

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  userId: getSessionId
});

const mapDispatchToProps = {
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm);
