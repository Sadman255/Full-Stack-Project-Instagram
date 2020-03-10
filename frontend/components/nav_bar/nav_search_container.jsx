import { fetchUsers } from "../../actions/users_actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import NavSearch from "./nav_search";

import { getUsers } from "../../selectors/users_selectors";

const mapStateToProps = createStructuredSelector({
  users: getUsers
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
