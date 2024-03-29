import React from 'react' 
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './styles/Footer.css'
import ffacebook from '../images/ffacebook.png'
import play from '../images/play.png'
import fmail from '../images/fmail.png'





export const Footer = (props) => {
    return (
        <div class="footer">
            <div class="columns">
                <div class="column is-one-third">
                <button class="button is-focused is-info has-shadow">
                    <div class="is-flex">
                        <MailOutlineIcon/>
                        <p>Join mailing list</p>
                    </div>
                </button>
                </div>
                <div class="column is-one-third">
                    <p>© 2020 Caroline Park – All Rights reserved</p>
                </div>     
            </div>
        </div>
    )
}