import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { GiStoneThrone } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import NavSearchContainer from "./nav_search_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <section className="nav-bar-container">
        <div className="nav-left">
          <div className="nav-left-index">
            {/* <Link className="nav-icon" to={`/feed`}>
              <AiFillHome />
            </Link> */}
          </div>
          <Link className="nav-link-logo animated jackInTheBox" to={`/feed`}>
            <FaInstagram /> InstaThrones
          </Link>
        </div>

        <div className="nav-mid">
          <NavSearchContainer />
        </div>

        <div className="nav-right">
          <div className="nav-home">
            <Link className="nav-icon" to={`/feed`}>
              <AiFillHome />
            </Link>
          </div>
          <div className="nav-right-index">
            <Link className="nav-icon" to={`/`}>
              {
                /* <i className="far fa-compass"></i> */
                //might need to take it to explore instead
              }
              <FaCompass />
            </Link>
          </div>
          <div className="nav-right-profile">
            <Link className="nav-icon" to={`/my-profile`}>
              {/* <i className='fas fa-'></i> */}
              <GiStoneThrone />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(NavBar);
