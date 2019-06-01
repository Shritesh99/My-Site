import React, { Component } from 'react';
import '../Js/Navbar'
class Navbar extends Component{
    render() {
        return(
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src={require("../img/logo.png")} />
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">
                            Work Ex
                        </a>

                        <a className="navbar-item">
                            Motivation
                        </a>
                        <a className="navbar-item">
                            Weapons
                        </a>
                        <a className="navbar-item">
                            Connect
                        </a>
                        <a className="navbar-item">
                            Projects
                        </a>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>About Me</strong>
                                </a>
                                <a className="button is-light">
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
