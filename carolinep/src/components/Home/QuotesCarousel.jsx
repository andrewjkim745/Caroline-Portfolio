import React from 'react'
import Slider from 'react-slick'
import { quotes } from '../../data'






class QuotesSlider extends React.Component {
    constructor(props) {
        super(props);



        this.state = {

        }
    }




    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            autoplaySpeed: 3000
        }


        return (
            <div>
            <Slider {...settings}>
            {quotes.map(quote => {
                        return (
                        <div class='container has-text-centered'>
                            <h1 class="title is-size-4">{quote.quote}</h1>
                            <h1 class="subtitle is-size-5">{quote.name}</h1>
                        </div>
                        )
                    })}
            </Slider>
            </div>
        )
    }
}

export default QuotesSlider