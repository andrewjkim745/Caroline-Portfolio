import React from "react";
import { Route, Switch } from "react-router-dom";
import  Home from '../components/Home/Home.jsx'
import   { BiographyHero } from '../components/Biography/Biography'


export const Routes = props => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Biography" component={BiographyHero}/>
        </Switch>
        </>
    )
}