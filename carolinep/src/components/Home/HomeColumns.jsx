import React from 'react'
import QuotesCarousel from './QuotesCarousel'
import { quotes } from '../../data'






export default class HomeColumns extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

        }
    }




    renderSlider = () => {
        return (
            <div class='column'>
                <h1 class='title text-is-yellow'>
                    What students and parents say:
                <br></br>
                    ""
                </h1>
                <Slider>
                    {quotes.map(quote => {
                        <div class='container has-text-centered'>
                            <h1>{quote.quote}</h1>
                            <h1>{quote.name}</h1>
                        </div>
                    })}
                </Slider>
            </div>
        )
    }
}



