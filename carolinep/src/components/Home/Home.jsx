import React, { Component } from 'react'
import pianoHome from '../../images/piano.jpg'
import './styles/Home.scss'
import EmailIcon from '@material-ui/icons/Email';
import { bullets } from '../../data'

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
                            <div class='is-flex'>
                                <img src={bullet.src}/>
                                <p>{bullet.bullet}</p>
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
                            <p class='is-size-5'>EMAIL WITH ANY QUESTIONS OR TO SET UP YOUR TRIAL LESSONS</p>
                        </div>
                    </div>
                    <div class="column">
                        <h1 class="title">Piano Lessons</h1>
                        <div class="box">
                            <div class="media-content">
                                <h3 class="title">Best for students who</h3>
                                {this.renderBullets()}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
