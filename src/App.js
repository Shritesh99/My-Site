import React from 'react';
import './Css/App.css';
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import WorkEx from "./Components/WorkEx";
import About from "./Components/About";
import Connect from "./Components/Connect";
import Motivation from "./Components/Motivation";
import Project from "./Components/Project";
import Weapons from "./Components/Weapons";
import {Stickyroll} from '@stickyroll/stickyroll';
const headlines = [
    "Landing",
    "About",
    "Motivation",
    "Work Ex",
    "Project",
    "Weapons",
    "Connect",
]
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Stickyroll pages={headlines} page={headlines} anchors="">
            {({page, pageIndex, pages, progress}) => {
                if(pageIndex === 0)
                return (
                    <div className="section">
                        <Landing/>
                    </div>
                );
                else if(pageIndex === 1)
                return (
                    <div className="section">
                        <About/>
                    </div>
                );
                else if(pageIndex === 2)
                return (
                    <div className="section">
                        <Motivation/>
                    </div>
                );
                else if(pageIndex === 3)
                return (
                    <div className="section">
                        <WorkEx/>
                    </div>
                );
                else if(pageIndex === 4)
                return (
                    <div className="section">
                        <Project/>
                    </div>
                );
                else if(pageIndex === 5)
                return (
                    <div className="section">
                        <h1>{headlines[pageIndex]}</h1>
                        <Weapons/>
                    </div>
                );
                else if(pageIndex === 6)
                return (
                    <div className="section">
                        <Connect/>
                    </div>
                );
            }}
        </Stickyroll>
        <Footer/>
    </div>
  );
}

export default App;
