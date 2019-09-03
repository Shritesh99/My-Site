import React, { Component } from 'react';
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

class Connect extends Component{
    render() {
        return(
          <div className="contactus-4" style={{minHeight: "calc(100vh - 100px)"}}>
            <div class="map">
              <div className="row justify-content-end">
              <img className="col-md-6" src={require("../img/contact.svg")}></img>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <h1 className="title">Let's Have a Talk.</h1>
                  <h4 className="description text-white">Do you have a big idea?<br/>Let's have a talk and make it real.</h4>
                </div>
                <div className="col-md-12 m-auto">
                  <div className="card card-contact card-raised">
                    <div className="row" style={{marginLeft: "0px", marginRight: "0px"}}>
                      <div className="col-md-8">
                        <form role="form" className="p-3" id="contact-form" method="post">
                          <div className="card-header">
                            <h3 className="card-title">Give it a Shot.</h3>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-12">
                                <h4>Name</h4>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser} color="#fff"/>
                                    </span>
                                  </div>
                                  <input type="text"  style={{fontSize: "1em"}} className="form-control" placeholder="Your Name Here..." aria-label="Name..."/>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <h4>Email Address</h4>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} color="#fff"/></span>
                                </div>
                                <input type="text" style={{fontSize: "1em"}} className="form-control" placeholder="Your Email Here..."/>
                              </div>
                            </div>
                            <div className="form-group">
                              <h4>Your Message</h4>
                              <textarea name="message" style={{fontSize: "1em"}} className="form-control" id="message" rows="6"></textarea>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <button type="submit" className="btn btn-primary pull-right">SEND MESSAGE</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-4 bg-info" style={{borderRadius: "7px"}}>
                        <div className="info text-center">
                          <h3 className="card-title">Contact Me</h3>
                          <div className="info info-horizontal">
                            <div className="icon">
                              <FontAwesomeIcon icon={faPhoneAlt} color="#fff"/>
                            </div>
                            <div className="description">
                              <h4 className="info-title" style={{fontWeight: 600}}>
                                +91 8770493694
                              </h4>
                            </div>
                          </div>
                          <div className="info info-horizontal">
                            <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} color="#fff"/>
                            </div>
                            <div className="description">
                                <h4 href="mailto:shritesh.sj@gmail.com" className="info-title" style={{fontWeight: 600}}>shritesh.sj@gmail.com</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <br/>
          </div>
        );
    }
}

export default Connect;
