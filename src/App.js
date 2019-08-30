import React from "react";
import {
    FullPageSections,
    FullpageSection,
    FullpageNavigation,
    Fullpage
} from '@ap.cx/react-fullpage'

import "./Css/App.css";
import Landing from "./Components/Landing";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import WorkEx from "./Components/WorkEx";
import About from "./Components/About";
import Connect from "./Components/Connect";
import Motivation from "./Components/Motivation";
import Project from "./Components/Project";
import Weapons from "./Components/Weapons";


function App() {


    return ( < div className = "App" >
        <
        Fullpage >
        <
        FullpageNavigation / >
        <
        FullPageSections >
        <
        FullpageSection style = {
            {
                padding: '1em',
            }
        } > < Landing / > < /FullpageSection> <
        FullpageSection style = {
            {
                padding: '1em',
                overflow: 'scroll'
            }
        } > 2 < /FullpageSection> <
        FullpageSection style = {
            {
                padding: '1em',
                overflow: 'scroll'
            }
        } > < /FullpageSection > < /
        FullPageSections > < /
        Fullpage > <
        /div>);
    }

    export default App;