import React from 'react'
import juilliard from '../../images/juilliard.jpg'



export const Juilliard = (props) => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src={juilliard} />
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    The Juilliard School is a private performing arts conservatory in New York City. Established in 1905, the school trains about 850 undergraduate and graduate students in dance, drama, and music.
        </div>
            </div>
        </div>
    )
}
