import React from 'react'




const homeBullets = (props) => {
    return (
        <div>
            <img src={props.src}/>
            <p class='subtitle'>{props.bullet}</p>
        </div>
    )
}

export default homeBullets