import React from 'react'
import './styles/HomeColumns.scss'
import QuotesCarousel from './QuotesCarousel'
import grandpiano from '../../images/grandpiano.jpg'
import  HomeStudentForm  from './HomeStudentForm'
import { Juilliard } from './Juilliard'
import { TeachingPhilosophy } from './TeachingPhilosophy'






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
                        <Juilliard/>
                    </div>
                    <div class="column is-one-third">
                        <div class="topBotPadding">
                        <h1 class="title has-text-centered">See What people are saying</h1>

                        <QuotesCarousel />
                        </div>
                        <TeachingPhilosophy/>
                        
                    </div>
                    <div class="column is-one-third has-padding">
                        <HomeStudentForm />
                    </div>


                </div>

            </>
        )
    }
}

export default HomeColumns



