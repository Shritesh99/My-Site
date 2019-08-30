import React, { Component } from 'react';

class Connect extends Component{
    render() {
        return(
                <div class="container">
              <div class="row">
                <div class="col-md-5">
                  <h1 class="title">Get in Touch</h1>
                  <h4 class="description text-white">Do you need more information? Please contact us to find more about our products and services.</h4>
                </div>
                <div class="col-md-12 m-auto">
                  <div class="card card-contact card-raised">
                    <div class="row">
                      <div class="col-md-8">
                        <form role="form" class="p-3" id="contact-form" method="post">
                          <div class="card-header">
                            <h4 class="card-title">Send us a message</h4>
                          </div>
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6">
                                <label>First name</label>
                                <div class="input-group">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="tim-icons icon-single-02"></i></span>
                                  </div>
                                  <input type="text" class="form-control" placeholder="First Name..." aria-label="First Name..."/>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label>Last name</label>
                                  <div class="input-group">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text"><i class="tim-icons icon-caps-small"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Last Name..." aria-label="Last Name..."/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label>Email address</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="tim-icons icon-email-85"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Email Here..."/>
                              </div>
                            </div>
                            <div class="form-group">
                              <label>Your message</label>
                              <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-check">
                                  <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox"/>
                                    <span class="form-check-sign"></span>
                                    I'm not a robot
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <button type="submit" class="btn btn-primary btn-round pull-right">Send Message</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-4">
                        <div class="info text-left bg-info">
                          <h4 class="card-title">Contact information</h4>
                          <div class="info info-horizontal mt-5">
                            <div class="icon">
                              <i class="tim-icons icon-square-pin"></i>
                            </div>
                            <div class="description">
                              <h5 class="info-title">
                                345 Street 2
                                <br/> Creative Tim Tour
                              </h5>
                            </div>
                          </div>
                          <div class="info info-horizontal">
                            <div class="icon">
                              <i class="tim-icons icon-mobile"></i>
                            </div>
                            <div class="description">
                              <h5 class="info-title">
                                +16(3412) 421 241
                              </h5>
                            </div>
                          </div>
                          <div class="info info-horizontal">
                            <div class="icon">
                              <i class="tim-icons icon-email-85"></i>
                            </div>
                            <div class="description">
                              <h5 class="info-title">
                                contact@yourwebsite.com
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
        );
    }
}

export default Connect;
