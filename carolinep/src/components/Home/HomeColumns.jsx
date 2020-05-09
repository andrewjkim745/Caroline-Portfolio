import React from 'react'
import './styles/HomeColumns.scss'
import QuotesCarousel from './QuotesCarousel'
import grandpiano from '../../images/grandpiano.jpg'
import HomeStudentForm from './HomeStudentForm'
import { Juilliard } from './Juilliard'
import { TeachingPhilosophy } from './TeachingPhilosophy'
import juilliard from '../../images/juilliard.jpeg'
import yale from '../../images/yale.jpg'
import msm from '../../images/msm.png'






class HomeColumns extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

        }
    }





    render() {
        return (
            <>
                <div class="columns">
                    <div class="column is-one-third">
                        <img src={grandpiano} />
                    </div>
                    <div class="column is-one-third">
                        <div class="topBotPadding">
                            <h1 class="title has-text-centered">See What people are saying</h1>
                            <QuotesCarousel />
                        </div>
                    </div>
                    <div class="column is-one-third">
                        <TeachingPhilosophy />
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-third">
                        <Juilliard
                            src={juilliard}
                            content='The Juilliard School is a private performing arts conservatory in New York City. Established in 1905, the school trains about 850 undergraduate and graduate students in dance, drama, and music.'
                        />
                    </div>
                    <div class="column is-one-third">
                        <Juilliard
                            src={yale}
                            content="Yale University is one the most selective prestigious universities in the country! Caroline not only previously attended The Juilliard School of Music but, also graduated from Yale University."
                        />
                    </div>
                    <div class="column is-one-third">
                        <Juilliard
                            src={msm}
                            content="Manhattan School of Music is a private music conservatory in New York City. The school offers bachelor's, master's, and doctoral degrees in the areas of classical and jazz performance and composition, as well as a bachelor's in musical theatre."
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default HomeColumns



