import React from 'react'
import emailjs from 'emailjs-com'
import { ContactForm } from './ContactForm'
import pianoart from '../../images/pianoart.JPG'
import { BackDrop } from '../SideDrawer/BackDrop'
import { ContactModal } from './ContactModal'



export default class Contact extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            from_name: '',
            message_html: '',
            error: false,
            open: false,
        }
    }


    submitClick = () => {
        this.setState({
            open: !this.state.open
        })
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    resetForm = () => {
        this.setState({
            from_name: '',
            message_html: ''
        })
    }

    renderModal = () => {
        if (this.state.open) {
        return (
            <>
            <BackDrop onClick={this.submitClick}/>
            <ContactModal/>
            </>
        )
        }
    }

    sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_yiUMpon4', e.target, 'user_bM1dxDmRUANzqK4E9XAWk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          this.resetForm()
      }



    render() {
        return (
            <>
            <div class="container has-text-centered has-padding-top">
                <h1 class="title is-size-1">Contact</h1>
                <h1>Please fill out your information below and include your Phone Number/Email</h1>
            </div>
            <div class="columns botMargin">
                <ContactForm
                onSubmit={this.sendEmail}
                onChange={this.handleChange}
                emailClass={this.state.error === true ? "input is-danger" : "input"}
                nameClass="input"
                name={this.state.from_name}
                message={this.state.message_html}
                onClick={this.submitClick}
                />
                <div class="column has-padding-large">
                    <figure class="image is-1by1 ">
                        <img src={pianoart}/>
                    </figure>
                </div>
            </div>
            {this.renderModal()}
            </>
        )
    }
}