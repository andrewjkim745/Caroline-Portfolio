import React from 'react'






export const ContactForm = (props) => {
    return (
        <div class="column has-padding-large">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input name='name' value={props.name} onChange={props.onChange} class={props.nameClass} type="text" placeholder="Name" />
                </div>
                {/* {this.props.renderNameError} */}
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input name='email' value={props.email} onChange={props.onChange} class={props.emailClass} type="email" placeholder="Email" />
                </div>
                {/* {this.props.renderEmailError} */}
            </div>
            <div class="field">
            <label class="label">Subject</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>Lessons</option>
                    <option>Personal</option>
                </select>
                </div>
            </div>
            </div>
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea name='message' value={props.message} onChange={props.onChange} class="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>
            <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            </div>
        </div>
    )
}