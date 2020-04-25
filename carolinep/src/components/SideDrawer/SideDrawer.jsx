import React from 'react'
import './Styles/SideDrawer.scss'





export const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer'
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
    
    return (
        <div className={drawerClasses}>
            <p>Hi</p>
        </div>

    )
}
