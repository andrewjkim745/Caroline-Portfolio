import React, { Component } from 'react'
import pianoHome from '../../images/piano.jpg'
import './styles/Home.scss'
import EmailIcon from '@material-ui/icons/Email';
import { bullets, secondBullets, thirdBullets } from '../../data'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }



    renderBullets = () => {
        return (
            <>
                {bullets.map(bullet => {
                    return (
                        <div class='columns is-flex'>
                            <div class='column'>
                                <img src={bullet.src} />
                            </div>
                            <div class='column is-three-quarters'>
                                <p class='is-size-5 is-size-7-mobile'>{bullet.bullet}</p>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    renderBullets2 = () => {
        return (
            <>
                {secondBullets.map(bullet => {
                    return (
                        <div class='columns is-flex'>
                            <div class='column'>
                                <img src={bullet.src} />
                            </div>
                            <div class='column is-three-quarters'>
                                <p class='is-size-5 is-size-7-mobile'>{bullet.bullet}</p>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    renderBullets3 = () => {
        return (
            <>
                {thirdBullets.map(bullet => {
                    return (
                        <div class='columns is-flex'>
                            <div class='column'>
                                <img src={bullet.src}/>
                            </div>
                            <div class='column is-three-quarters'>
                            <p class='is-size-5 is-size-7-mobile'>{bullet.bullet}</p>
                            </div>   
                        </div>
                    )
                })}
            </>
        )
    }






    render() {
        return (
            <>
                <div class="columns has-padding">
                    <div class="column">
                        <figure class="image is-2by3">
                            <img src={pianoHome} />
                        </figure>
                        <div class="is-flex">
                            <EmailIcon
                                fontSize="large"
                            />
                            <p class='is-size-5 is-size-7-mobile'>EMAIL WITH ANY QUESTIONS OR TO SET UP YOUR TRIAL LESSONS</p>
                        </div>
                    </div>
                    <div class="column">
                        <h1 class="title">Piano Lessons</h1>
                        <div class="box">
                            <div class="media-content">
                                <h3 class="title is-size-4 is-size-6-mobile">Best for students who</h3>
                                {this.renderBullets()}
                                <h3 class="title is-size-4 is-size-6-mobile">Prepare For</h3>
                                {this.renderBullets2()}
                                <h3 class="title is-size-4 is-size-6-mobile">Locations</h3>
                                {this.renderBullets3()}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
