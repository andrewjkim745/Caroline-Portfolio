import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
// import { ProductProvider } from "./context";

ReactDOM.render(
        <Router>
            <App />
        </Router>,
    document.getElementById('root')
);

//"react-scripts --openssl-legacy-provider start"