import React from 'react'
import caroline2 from '../../images/caroline2.JPG'
import './Styles/BiographyHero.css'
import Zoom from 'react-reveal/Zoom';
import { BiographyText } from './BiographyText'
import Fade from 'react-reveal/Fade'





export const BiographyHero = (props) => {
    return (
        <>
            <div class="columns borderBottom no-margin-bot">
                <div class="column has-padding-small carolineDiv">
                    <Zoom duration={4000} delay={500}>
                        <figure class="image is-3by3 ">
                            <img class="caroline2" src={caroline2} />
                        </figure>
                    </Zoom>
                </div>
                <Fade right duration={4000} delay={500}>
                    <div class="column carolineRightDiv">

                        <div class="container has-text-centered has-padding-small">
                            <h1 class="title is-size-1">About Caroline</h1>
                            <div class="divider has-padding-small"></div>
                            <div class="has-text-centered">
                                <h1 class="subtitle has-text-primary">"Beethoven interpreter of penetrating insight"</h1>
                            </div>
                            <p class="subtitle">-Fanfare</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <BiographyText
                text='orean-born pianist Caroline Park has established herself in New York and around the world as a performer with brilliant potential.  Praised by the New York Times for her "musical sensitivity, power, and assurance", Ms. Park has performed throughout the United States, Europe, and Asia.  She has performed in New York at Carnegie Weill Recital Hall, Alice Tully Hall, the Metropolitan Museum, Steinway Hall and at Columbia and Yale Universities.'
                text2="Ms. Park earned her Bachelor's and Master's degrees from the Juilliard School, Yale University and Doctoral degree at Manhattan School of Music.  Among her teachers were Martin Canin, Claude Frank, Peter Frankl, and Solomon Mikowsky."
                text3="Park's many awards include top prizes at Ibla International Piano Competition, Keyboard Artist International Competition, Artis International Competition, and the Five Towns Music Competition. 
                She has also received awards such as the Bruce Simmons Award at Yale University, the Willliam Petschek Award, and the L&M Burle Award at The Juilliard School."
                text4="Ms. Park draws from a wide repertoire ranging from Bach to Schoenberg, Messiaen, Ligeti and beyond.  New music is her main focus and her collaboration on new works with many young composers has often lead to premieres."
                text5="Ms. Park has more than 10 years of teaching experience.  She started teaching actively at Manhattan School of Music teaching secondary piano.  After receiving her doctoral degree at Manhattan School of Music she became a faculty member at Concordia Conservatory/College."
            />
        </>
    )
}