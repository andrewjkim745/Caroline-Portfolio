import React from 'react' 





export const BiographyText = (props) => {
    return (
        <div class="has-background-dark">
        <div class="container has-text-centered has-padding-large has-background-white">
            <div>
            <p class="bio is-size-4 is-size-6-mobile">
                <span class="H has-text-weight-bold is-size-1">
                    <span class>K</span>
                </span>
                {props.text}
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <p>{props.text5}</p>
                
            </p>
            </div>
        </div>
        </div>
    )
}