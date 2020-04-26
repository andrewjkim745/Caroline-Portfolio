import React from 'react'
import juilliard from '../../images/juilliard.jpg'



export const Juilliard = (props) => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src={props.src} />
                </figure>
            </div>
            <div class="card-content">
                <div class="content is-size-4">
                    {props.content}
                </div>
            </div>
        </div>
    )
}
