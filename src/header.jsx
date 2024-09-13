import React from 'react'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/bootstrap.css'
// import './assets/css/ont-awesome.min.css'
import hero from './assets/images/hero-bg.png'
import slider from './assets/images/slider-img.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <div className="hero_area">

        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src={hero} alt="" />
          </div>
        </div>

        {/* <!-- header section strats --> */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link className="navbar-brand" to="index.html">
                <span>
                  Finexo
                </span>
              </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about"> About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/why">Why Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team">Team</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</Link>
                  </li>
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* <!-- end header section -->
<!-- slider section --> */}
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link to="" className="btn1">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={slider} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link to="" className="btn1">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={slider} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link to="" className="btn1">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={slider} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>

        </section>
        {/* <!-- end slider section --> */}
      </div>
    </>
  )
}

export default Header