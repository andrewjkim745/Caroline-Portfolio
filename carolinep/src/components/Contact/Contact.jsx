import React from 'react'
import emailjs from 'emailjs-com'
import { ContactForm } from './ContactForm'




export default class Contact extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render() {
        return (
            <div class="columns">
                <ContactForm/>
            </div>
        )
    }
}