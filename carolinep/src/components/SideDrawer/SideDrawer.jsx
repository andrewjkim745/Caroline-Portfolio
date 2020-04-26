import React from 'react'
import './Styles/SideDrawer.scss'
import StraightenIcon from '@material-ui/icons/Straighten'
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';




export const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer'
    if (props.open) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <div className={drawerClasses}>
                    <div class="columns is-flex has-padding">
                            <div class="column is-flex-column">
                            <StraightenIcon/>
                            <InfoIcon/>
                            <ContactMailIcon/>
                            </div> 
                        <div class="column is-one-third">
                            <p class="has-margin-top">Home</p>
                            <p class="has-margin-top">About</p>
                            <p class="has-margin-top">Contact</p>
                        </div>
                    </div>
        </div>

    )
}
