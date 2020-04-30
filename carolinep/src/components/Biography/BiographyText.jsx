import React from 'react' 





export const BiographyText = (props) => {
    return (
        <div class="has-background-dark">
        <div class="container has-text-centered has-padding-large has-background-white">
            <div>
            <p class="is-size-4 is-size-6-mobile">
                <span class="H has-text-weight-bold is-size-1">
                    <span class>H</span>
                </span>
                {props.text}
                
            </p>
            </div>
        </div>
        </div>
    )
}