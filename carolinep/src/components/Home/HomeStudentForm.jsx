import React from 'react'
import './styles/HomeStudentForm.css'



export default class HomeStudentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            Location: '',
            message: ''
        }
    }

    // handleSubmit = (e) => {
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({ "form-name": "contact", ...this.state })
    //     })
    //         .then(() => alert('Thanks for sending a message! I will respond as soon as I can.'))
    //         .catch(error => alert(error));
    //     console.log(this.state)
    //     e.preventDefault();
    // }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        const { name, email, message, Location } = this.state;


        return (
            <div class="has-padding-small">
                <h1 class="title">New Student Form</h1>
                <div className='form-container'>
                    <form name='contact' method="POST" class="contact__form" onSubmit={this.handleSubmit}>
                        <input className="input is-info" type="hidden" name="form-name" value="contact" />
                        <p>
                            <input className="input is-info" type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name"/>
                            
                        </p>
                        <p>
                            <input className="input is-info" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email"/>
                            
                        </p>
                        <p>
                            <input className="input is-info" type="Location" name="Location" value={Location} onChange={this.handleChange} placeholder="Location"/>
                            
                        </p>
                        <p>
                            <textarea className="input is-info messageContainer" name="message" value={message} onChange={this.handleChange} placeholder="Message"/>
                            
                        </p>
                        <p>
                            <button type="submit" className='send-button'>Send</button>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}