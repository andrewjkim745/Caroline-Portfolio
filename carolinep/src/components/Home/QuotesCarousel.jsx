import React from 'react'
import Slider from 'react-slick'






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
            slidesToShow: 5,
            slidesToScroll: 5
        }


        return (
            <>
            <Slider {...settings}>
                {/* <div class='container has-text-centered'>
                    <h3>{props.quote1}</h3>
                    <h3></h3>
                </div>
                <div class='container has-text-centered'>
                    <h3>{props.quote2}</h3>
                </div>
                <div class='container has-text-centered'>
                    <h3>{props.quote3}</h3>
                </div>   
                <div class='container has-text-centered'>
                    <h3>{props.quote4}</h3>
                </div>    */}
                {props.children}
            </Slider>
            </>
        )
    }
}