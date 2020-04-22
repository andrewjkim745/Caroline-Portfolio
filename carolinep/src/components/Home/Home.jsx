import React, { Component } from 'react'
import pianoHome from '../../images/piano.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <div class="columns has-padding">
                    <div class="column">
                        <figure class="image is-2by3">
                            <img src={pianoHome}/>
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title">Piano Lessons</h1>
                    </div>
                </div>
            </>
        )
    }
}
