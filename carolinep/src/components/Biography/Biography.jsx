import React from 'react'
import caroline2 from '../../images/caroline2.JPG'
import './Styles/BiographyHero.scss'
import Zoom from 'react-reveal/Zoom';
import { BiographyText } from './BiographyText'





export const BiographyHero = (props) => {
    return (
        <>
        <div class="columns borderBottom">
            <div class="column has-padding-small carolineDiv">
                <Zoom duration={4000} delay={2000}>
                    <figure class="image is-3by3">
                        <img class="caroline2" src={caroline2} />
                    </figure>
                </Zoom>
            </div>
            <div class="column carolineRightDiv">
                <div class="container has-text-centered has-padding-small">
                    <h1 class="title is-size-1">About Caroline</h1>
                    <div class="has-text-centered">
                        <h1 class="subtitle">"Beethoven interpreter of penetrating insight"</h1>
                    </div>
                </div>
            </div>
        </div>
        <BiographyText
        text='Win­ner of the Grand Prix at the Mendelssohn Cup Piano Com­pe­ti­tion in Italy, Rasa Vitkauskaite has won top prizes at nu­mer­ous pres­ti­gious in­ter­na­tional piano com­pe­ti­tions in­clud­ing First Prizes at Les Ren­con­tres In­ter­na­tionales des Je­unes Pi­anistes (Bel­gium), the com­pe­ti­tion in Tau­risano (Italy), and the Ru­bin­stein Piano Com­pe­ti­tion (Paris). Other awards in­clude the West­mont Fel­low­ship at the Mon­tecito In­ter­na­tional Music Fes­ti­val in Santa Bar­bara, Cal­i­for­nia, and a Kathryn Wasser­man Davis $10,000 grant sup­port­ing a con­cert tour of Is­rael. Ms. Vitkauskaite has also won top prizes at six na­tional com­pe­ti­tions in her na­tive coun­try of Lithua­nia.'
        />
        </>
    )
}