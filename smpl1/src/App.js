import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
    return ( <
        Router >
        <
        div >
        <
        nav >
        <
        ul >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/about" > About < /Link></li >
        <
        li > < Link to = "/contact" > Contact < /Link></li >
        <
        /ul> < /
        nav >

        <
        Routes >
        <
        Route path = "/"
        element = { < Home key = "home" / > }
        /> <
        Route path = "/about"
        element = { < About key = "about" / > }
        /> <
        Route path = "/contact"
        element = { < Contact key = "contact" / > }
        /> < /
        Routes > <
        /div> < /
        Router >
    );
}
