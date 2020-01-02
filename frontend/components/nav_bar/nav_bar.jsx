import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    render(){

        return(
            <section className="nav-bar-container">
                <div className="nav-left">
                    <div className="nav-left-index">
                        <Link className="nav-icon" to={`/feed`}>
                            <i className='fas fa-camera'></i>
                        </Link>
                    </div>
                    <div className="nav-link-logo animated jackInTheBox">
                        InstaThrones
                    </div>
                </div>
                
                <div className="nav-mid">
                
                </div>

                <div className="nav-right">
                    <div className="nav-right-index">
                        <Link className="nav-icon" to={`/explore`}>
                            <i className='far fa-compass'></i>
                        </Link>
                    </div>
                    <div className="nav-right-profile">
                        <Link className="nav-icon" to={`/my-profile`}>
                            <i className='fas fa-throne'></i>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(NavBar);