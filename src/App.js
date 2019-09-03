import React, { Component } from "react";
import {
    FullPageSections,
    FullpageSection,
    FullpageNavigation,
    Fullpage
} from '@ap.cx/react-fullpage'

import Landing from "./Components/Landing";
import Insights from "./Components/Insights";
import Footer from "./Components/Footer";
import WorkEx from "./Components/WorkEx";
import Testimonials from "./Components/Testimonials";
import Awards from "./Components/Awards";
import Connect from "./Components/Connect";
import Motivation from "./Components/Motivation";
import Project from "./Components/Project";
import Weapons from "./Components/Weapons";


class App extends Component {

render() {
    return ( 
      <div className = "App" >
        <Fullpage>
            <FullPageSections>
                <FullpageSection style = {{padding: '1em'}}>
                    <Landing/>
                </FullpageSection>
                <FullpageSection style = {{padding: '1em',overflow: 'scroll'}}>
                   <WorkEx/>
                </FullpageSection>
                <FullpageSection style = {{padding: '1em',overflow: 'scroll'}}>
                    <Project/>
                </FullpageSection>
                <FullpageSection style = {{padding: '1em',overflow: 'scroll'}}>
                    <Awards/>
                </FullpageSection>
                <FullpageSection style = {{padding: '1em',overflow: 'scroll'}}>
                    <Testimonials/>
                </FullpageSection>
                <FullpageSection style = {{padding: '1em',overflow: 'scroll'}}>
                    <Motivation/>
                </FullpageSection>
                <FullpageSection style = {{padding: '1em',overflow: 'scroll'}}>
                    <Insights/>
                    <Weapons/>
                </FullpageSection>
                <FullpageSection style = {{padding: '1em', overflow: 'scroll'}}>
                    <Connect/>
                    <br/>
                    <Footer/>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
        
      </div>
    );
    }
}

export default App;