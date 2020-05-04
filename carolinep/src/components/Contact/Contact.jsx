import React from 'react'
import emailjs from 'emailjs-com'
import { ContactForm } from './ContactForm'
import pianoart from '../../images/pianoart.JPG'



export default class Contact extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            name: '',
            email: '',
            message: '',
            error: false,
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

        if (this.state.email.includes("@")) {
            this.setState({
                error: false
            })
            
        } else {
            this.setState({
                error: true
            })
        }
    }



    render() {
        return (
            <>
            <div class="container has-text-centered has-padding">
                <h1 class="title is-size-1">Contact</h1>
            </div>
            <div class="columns">
                <ContactForm
                onChange={this.handleChange}
                emailClass={this.state.error === true ? "input is-danger" : "input"}
                nameClass="input"
                name={this.state.name}
                email={this.state.email}
                message={this.state.message}
                />
                <div class="column has-padding-large">
                    <figure class="image is-1by1 ">
                        <img src={pianoart}/>
                    </figure>
                </div>
            </div>
            </>
        )
    }
}