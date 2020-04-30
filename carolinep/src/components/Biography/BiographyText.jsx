import React from 'react' 





export const BiographyText = (props) => {
    return (
        <div class="container has-text-centered has-padding-large">
            <div>
            <p class="is-size-4 is-size-6-mobile">
                <span class="H has-text-weight-bold is-size-1">
                    <span class>H</span>
                </span>
                {props.text}
                
            </p>
            </div>
        </div>
    )
}