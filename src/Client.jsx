import React from 'react'
import client from './assets/images/client1.jpg'
import client2 from './assets/images/client2.jpg'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/bootstrap.css'

function Client() {
  return (
    <>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel client_owl-carousel row">
              <div className="item col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={client} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>
                          LusDen
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
              <div className="item col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={client2} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>
                          Zen Court
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
              <div className="item col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={client} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>
                          LusDen
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
              <div className="item col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={client2} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>
                          Zen Court
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Client