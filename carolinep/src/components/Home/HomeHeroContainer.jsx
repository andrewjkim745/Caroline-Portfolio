import React from "react";
import "./styles/HomeHeroContainer.scss";


const HomeHeroContainer = props => {
    return (
    <section className="hero is-small home-hero-image">
        <div className="hero-body">
        <div className="container has-text-centered has-padding">
            <div class="opacityContainer">

            
            <h1 className="title is-size-1-fullhd is-size-2-tablet is-primary">{props.title}</h1>
            <h2 className="subtitle is-size-2-fullhd is-size-4-tablet">{props.description}</h2>
            </div>
        </div>
        </div>
    </section>
    );
};


export default HomeHeroContainer;