import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'




export const Navbar = (props) => {
    return (
        <nav className={props.className}>
            <div class="navbar-brand">
                <a class="navbar-item">
                    <div class='column'>
                        <h1 class='title is-size-2 is-size-4-mobile'>
                            Caroline Park
                    </h1>
                        <h3 class='subtitle is-size-3 is-size-5-mobile'>
                            Pianist
                    </h3>
                    </div>
                </a>
                <a
                    onClick={props.toggleHamburger}
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarNavigation"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarNavigation" class="navbar-menu">
                <div class="navbar-start">
                    <Link to="/" class="navbar-item is-size-3-fullhd is-size-4-desktop">
                        Home
                     </Link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link is-size-3-fullhd is-size-4-desktop is-dark">About</a>
                        <div class="navbar-dropdown is-boxed">
                        <Link to="/Biography" className="navbar-item">
                                
                                <p>Biography</p>
                        </Link>
                            <Link to="/Credentials" class="navbar-item" >
                                <p>Credentials</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <Link to='/Contact' class='navbar-item is-size-3-fullhd is-size-4-desktop'>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}