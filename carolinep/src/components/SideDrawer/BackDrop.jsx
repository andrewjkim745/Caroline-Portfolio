import React from 'react'
import './Styles/BackDrop.css'



export const BackDrop = (props) => {
    return (
        <div className='backdrop' onClick={props.onClick}/>
    )
}

