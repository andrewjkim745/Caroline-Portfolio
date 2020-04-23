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
            <h1 class='title'>
                What students and parents say:
                <br></br>
                ""
            </h1>
            <Slider {...settings}>
                <div class='container has-text-centered'>
                    <h3>{props.review}</h3>
                </div>
                <div class='container has-text-centered'>
                    <h3>{props.review2}</h3>
                </div>
                <div class='container has-text-centered'>
                    <h3>{props.review3}</h3>
                </div>   
                <div class='container has-text-centered'>
                    <h3>{props.review3}</h3>
                </div>   
            </Slider>
            </>
        )
    }
}