import React, { Component } from 'react'
import caroline from '../../images/caroline.jpeg'
import './styles/Home.css'
import EmailIcon from '@material-ui/icons/Email';
import { bullets, secondBullets, thirdBullets } from '../../data'
import HomeHeroContainer from './HomeHeroContainer'
import HomeColumns from './HomeColumns'
import HomeStudentForm from './HomeStudentForm'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
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
                <div class="columns has-padding-small">
                    <div class="column">
                         <figure  data-aos='fade-in' data-aos-once='true' class="image is-2by2">
                             <Skeleton width={400} height={550} style={this.state.loaded ? {display: 'none'} : {}}/>
                            <img  style={this.state.loaded ? null : {display: 'none'}} onLoad={() => this.setState({loaded: true})} data-aos='fade-in' class="carolineHome" src={caroline}/>
                        </figure>
                        {this.state.loaded === false ? <Skeleton/> : <div data-aos='fade-in' data-aos-once='true' class="is-flex has-margin-top">
                        
                        <EmailIcon
                            fontSize="large"
                        />
                        <p  class='is-size-5 is-size-7-mobile'>EMAIL WITH ANY QUESTIONS OR TO SET UP YOUR LESSONS</p>
                    </div>}
             
                    </div>
                    <div class="column">
                        <h1 class="title is-size-2 is-size-4-mobile">Piano Lessons</h1>
                        <div class="box has-background-lightBlue">
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
                <HomeHeroContainer
                    title='About'
                    description='Renowned soloist, chamber musician, and educator, Caroline Park teaches a large number of students at Concordia College, and in her private studio, where she also offers lessons for Conservatory level pianists and college students. Caroline graduated from The Juilliard School of Music, Yale University, and Manhattan School of Music.'
                    />
                <HomeColumns/>
            </>
        )
    }
}
