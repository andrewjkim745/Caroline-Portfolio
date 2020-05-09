import React from 'react'
import ysm from '../../images/ysm.jpg'
import juilliard2 from '../../images/juilliard2.jpg'
import msm2 from '../../images/msm2.jpg'
import resume from '../../images/resume.docx'
import Slide from 'react-reveal/Slide'
import { CredentialsText } from './CredentialsText'
import FileViewer from 'react-file-viewer'

const type = 'docx'






export const Credentials = (props) => {
    return (
        <>
        <div class="columns has-padding-larger has-background-dark">
            <div class="column">
                <figure class="image is-1by1">
                    <Slide left duration={2000}>
                        <img src={ysm} />
                    </Slide>
                </figure>
            </div>
            <div class="column">
                <figure class="image is-1by1">
                    <Slide right  duration={2000}>
                        <img src={juilliard2} />
                    </Slide>
                </figure>
            </div>
            <div class="column">
                <figure class="image is-1by1">
                    <Slide left duration={2000}>
                        <img src={msm2}/>
                    </Slide>
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