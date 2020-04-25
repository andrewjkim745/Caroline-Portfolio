import React from 'react'
import './Styles/BackDrop.scss'



export const BackDrop = (props) => {
    return (
        <div className='backdrop' onClick={props.onClick}/>
    )
}

