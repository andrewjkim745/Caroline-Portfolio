import React from 'react'
import ysm from '../../images/ysm.jpg'
import juilliard2 from '../../images/juilliard2.jpg'






export const Credentials = (props) => {
    return (
        <div class="columns">
            <div class="column has-background-primary">
                <figure class="image is-1by1">
                    <img src={ysm}/>
                </figure>
            </div>
            <div class="column has-background-primary">
                <figure class="image is-1by1">
                    <img src={juilliard2}/>
                </figure>
            </div>
        </div>
    )
}