import React from 'react'
import './styles/HomeColumns.scss'
import QuotesCarousel from './QuotesCarousel'
import grandpiano from '../../images/grandpiano.jpg'






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
                <div class="column is-one-third has-padding">
                <h1 class="title has-text-centered">See What people are saying</h1>
                <QuotesCarousel/>
                </div>
            
            </div>
            
            </>
        )
    }
}

export default HomeColumns



