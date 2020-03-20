import React from "react";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCriteria: ""
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    const { searchCriteria } = this.state;
    // debugger;
    const matches = users
      .filter(user => user.username.toLowerCase().startsWith(searchCriteria))
      .map(user => {
        return (
          <li
            className="search-result-li"
            key={user.id}
            onClick={() => this.setState({ searchCriteria: "" })}
          >
            <Link className="search-result-user" to={`/users/${user.id}`}>
              <img className="search-result-image" src={user.photoUrl} />
              <div className="search-result-username">{user.username}</div>
            </Link>
          </li>
        );
      });

    return (
      <div className="search-with-results-wrap">
        <input
          className="user-search"
          type="text"
          placeholder="Search Users"
          onChange={e =>
            this.setState({
              searchCriteria: (e.target.value || "").toLowerCase()
            })
          }
          value={searchCriteria}
        />

        <div className="outer-results-wrap">
          {searchCriteria.length > 0 && matches.length > 0 ? (
            <div className="search-results-container">
              <div id="arrow"> </div>
              <ul className="search-results-list">{matches}</ul>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(NavSearch);
