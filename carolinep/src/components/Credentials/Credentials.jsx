import React from 'react'
import ysm from '../../images/ysm.jpg'
import juilliard2 from '../../images/juilliard2.jpg'
import Slide from 'react-reveal/Slide'






export const Credentials = (props) => {
    return (
        <div class="columns">
            <div class="column has-background-primary">
                
                    <figure class="image is-1by1">
                    <Slide left>
                        <img src={ysm} />
                        </Slide>
                    </figure>

                
            </div>
            <div class="column has-background-primary">
                
                    <figure class="image is-1by1">
                    <Slide right>
                        <img src={juilliard2} />
                        </Slide>
                    </figure>
                
            </div>
        </div>
    )
}