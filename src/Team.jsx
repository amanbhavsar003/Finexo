import React from 'react'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/bootstrap.css'
import team1 from './assets/images/team-1.jpg'
import team2 from './assets/images/team-2.jpg'
import team3 from './assets/images/team-3.jpg'
import team4 from './assets/images/team-4.jpg'
import { Link } from 'react-router-dom'

function Team() {
  return (
    <>
         <section className="team_section layout_padding">
    <div className="container-fluid">
      <div className="heading_container heading_center">
        <h2 className="">
          Our <span> Team</span>
        </h2>
      </div>

      <div className="team_container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={team1} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Joseph Brown
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div className="social_box">
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={team2} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Nancy White
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div className="social_box">
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={team3} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Earl Martinez
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div className="social_box">
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={team4} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Josephine Allard
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div className="social_box">
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
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

export default Team