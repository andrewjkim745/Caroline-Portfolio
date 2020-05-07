import React from 'react'
import './Styles/SideDrawer.scss'
import StraightenIcon from '@material-ui/icons/Straighten'
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BookIcon from '@material-ui/icons/Book';
import { Link } from 'react-router-dom'



export const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer'
    if (props.open) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <div className={drawerClasses}>
                    <div class="columns is-flex has-padding">
                            <div class="icons column is-flex-column">
                            <StraightenIcon/>
                            <InfoIcon/>
                            <ContactMailIcon/>
                            <BookIcon/>
                            </div> 
                        <div class="linksColumn column is-one-third">
                            <Link to="/" class="has-margin-top">Home</Link>
                            <Link to="/Biography" class="has-margin-top">About</Link>
                            <Link to="/Contact" class="has-margin-top">Contact</Link>
                            <Link to="/Credentials" class="has-margin-top">Credits</Link>
                        </div>
                    </div>
        </div>

    )
}
