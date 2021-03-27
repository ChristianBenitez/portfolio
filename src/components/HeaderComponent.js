import React, { Component }  from 'react';
import { Nav, Navbar, NavItem, NavLink, Jumbotron} from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Christian Benitez</h1>
                                <h2>Web Developer</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/directory">
                                    <i className="fa fa-list fa-lg" /> Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Me
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;