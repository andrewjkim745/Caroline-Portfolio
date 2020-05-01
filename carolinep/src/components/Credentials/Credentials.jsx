import React from 'react'
import ysm from '../../images/ysm.jpg'
import juilliard2 from '../../images/juilliard2.jpg'
import Slide from 'react-reveal/Slide'






export const Credentials = (props) => {
    return (
        <div class="columns">
            <div class="column has-background-primary">
                <Slide left>
                    <figure class="image is-1by1">
                        <img src={ysm} />
                    </figure>
                </Slide>
            </div>
            <div class="column has-background-primary">
                <Slide right>
                    <figure class="image is-1by1">
                        <img src={juilliard2} />
                    </figure>
                </Slide>
            </div>
        </div>
    )
}