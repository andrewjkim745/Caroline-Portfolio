import React from 'react'



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
            <div>
                <h1 class="title">New Student Form</h1>
                <div className='form-container'>
                    <form name='contact' method="POST" class="contact__form" onSubmit={this.handleSubmit}>
                        <input className="input is-info" type="hidden" name="form-name" value="contact" />
                        <p>
                            <input className="input is-info" type="text" name="name" value={name} onChange={this.handleChange} />
                            <label>
                                Your Name:
                            </label>
                        </p>
                        <p>
                            <input className="input is-info" type="email" name="email" value={email} onChange={this.handleChange} />
                            <label id='id-label'>
                                Your Email:
                            </label>
                        </p>
                        <p>
                            <input className="input is-info" type="Location" name="Location" value={Location} onChange={this.handleChange} />
                            <label id='id-label'>
                                Your Location
                            </label>
                        </p>
                        <p>
                            <textarea className="input is-info messageContainer" name="message" value={message} onChange={this.handleChange} />
                            <label id='text-label'>
                                Your Message:
                            </label>
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