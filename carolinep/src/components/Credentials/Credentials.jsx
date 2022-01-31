import React from 'react'
import ysm from '../../images/ysm.jpg'
import juilliard2 from '../../images/juilliard2.jpg'
import msm2 from '../../images/msm2.jpg'
import resume from '../../images/resume.docx'
import { CredentialsText } from './CredentialsText'
import FileViewer from 'react-file-viewer'

const type = 'docx'






export const Credentials = (props) => {
    return (
        <>
        <div class="columns has-padding-larger">
            <div class="column">
                <figure data-aos="fade-left" class="image is-1by1">
                        <img src={ysm} />
                </figure>
            </div>
            <div class="column">
                <figure data-aos="fade-down" data-aos-delay='500' class="image is-1by1">
                        <img src={juilliard2} />                 
                </figure>
            </div>
            <div class="column">
                <figure data-aos="fade-right" class="image is-1by1">           
                        <img src={msm2}/>
                </figure>
            </div>
        </div>
        <CredentialsText/>
        <FileViewer
            fileType={type}
            filePath={resume}
        />
        </>
    )
}