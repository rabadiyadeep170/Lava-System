import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import "../index.css"


const IndexFile = () => {
  return (
    <>
        


    <div id="preloader">
      <div className="jumper">
        <div />
        <div />
        <div />
      </div>
    </div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                
                <a href="/" className="logo">
                  Lava
                </a>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#welcome" className="menu-item">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about" className="menu-item">
                      About
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#testimonials" className="menu-item">
                      speakers
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript;">Drop Down</a>
                    <ul>
                      <li>
                      <NavLink to='#about' activeStyle>About Us</NavLink>
                      </li>
                      <li>
                      <NavLink to='/features' activeStyle> Features </NavLink>
                      </li>
                      <li>
                      <NavLink to='/userpannel' activeStyle>User Pannel</NavLink>
                      </li>
                      <li>
                       <NavLink to='/adminpannel' activeStyle>Admin Pannel</NavLink>
                      </li>
                
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact-us" className="menu-item">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="menu-trigger">
                  <span>Menu</span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div
              className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <h1>
                Simple App that <br />we <em>CREATE</em>
              </h1>
              <p>
                It sounds like you might be referring to a system for managing
                lines or blocks of text, possibly in a coding or development
                context. If you can provide more details about what you're
                working on, I'd be happy to help!
              </p>
              <a href="#about" className="main-button-slider">
                KNOW US BETTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="section" id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <div className="features-item">
              <div className="features-icon">
                <h2>01</h2>
                <img src="assets/images/features-icon-1.png" alt="" />
                <h4>Trend Analysis</h4>
                <p>
                  Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                  diam, nec consectetur diam.
                </p>
                <a href="#testimonials" className="main-button">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
          >
            <div className="features-item">
              <div className="features-icon">
                <h2>02</h2>
                <img src="assets/images/features-icon-2.png" alt="" />
                <h4>Site Optimization</h4>
                <p>
                  Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                  diam, nec consectetur diam.
                </p>
                <a href="#testimonials" className="main-button">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <div className="features-item">
              <div className="features-icon">
                <h2>03</h2>
                <img src="/assets/images/features-icon-3.png" alt="" />
                <h4>Email Design</h4>
                <p>
                  Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                  diam, nec consectetur diam.
                </p>
                <a href="#testimonials" className="main-button">
                  More Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Features Big Item End ***** */}
    <div className="left-image-decor" />
    {/* ***** Features Big Item Start ***** */}
    <section className="section" id="promotion">
      <div className="container">
        <div className="row">
          <div
            className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src="assets/images/left-image.png"
              className="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
            <ul>
              <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                <img src="assets/images/about-icon-01.png" alt="" />
                <div className="text">
                  <h4>Trend Analysis</h4>
                  <p>
                  Trend analysis is the practice of collecting information and analyzing it to identify patterns or trends over time.
                  </p>
                </div>
              </li>
              <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                <img src="assets/images/about-icon-02.png" alt="" />
                <div className="text">
                  <h4>Site Optimization</h4>
                  <p>
                  Site optimization refers to the process of improving various aspects of a website to enhance its performance.
                  </p>
                </div>
              </li>
              <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                <img src="assets/images/about-icon-03.png" alt="" />
                <div className="text">
                  <h4>Email Design</h4>
                  <p>
                  Designing an effective email requires a balance between aesthetics, functionality, and usability. 
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div className="right-image-decor" />

    <section className="section" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="center-heading">
              <h2>
                What They Think <em>About Us</em>
              </h2>
              <p>
                Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                euismod purus non, convallis odio. Donec vitae magna ornare,
                pellentesque ex vitae, aliquet urna.
              </p>
            </div>
          </div>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="card-container">
                <span className="pro">PRO</span>
                <img
                  className="round"
                  src="https://cdn.prod.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg"
                  alt="user"
                  height={"140px"}
                  width={"140px"}
                />
                <h3>Morgan Hils.</h3>
                <h6>Gujrat (jnd)</h6>
                <p className="subTag">
                  <br /> DEVELOPER
                </p>
              </div>
            </Col>
            <Col>
              <div className="card-container">
                <span className="pro">PRO</span>
                <img
                  className="round"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nSSaTFoCb00SrVJykPWQiy7dPGJ-AdDQeQ6x5J6hSgFholkgNbcx-bjgxPHwkE6mcC8&usqp=CAU"
                  alt="user"
                  height={"140px"}
                  width={"140px"}
                />
                <h3>Kelly Morgan</h3>
                <h6>Gujrat (Srt) </h6>
                <p className="subTag">
                  <br /> CEO
                </p>
              </div>
            </Col>
            <Col>
              <div className="card-container">
                <span className="pro">PRO</span>
                <img
                  className="round"
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="user"
                  height={"140px"}
                  width={"140px"}
                />
                <h3>Ricky Park</h3>
                <h6>New York</h6>
                <p className="subTag">
                  <br /> MANAGER
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

    <footer id="contact-us">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-form">
                <form id="contact">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                          required=""
                          style={{ backgroundColor: "rgba(250,250,250,0.3)" }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                          style={{ backgroundColor: "rgba(250,250,250,0.3)" }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows={6}
                          id="message"
                          placeholder="Your Message"
                          required=""
                          style={{ backgroundColor: "rgba(250,250,250,0.3)" }}
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="right-content col-lg-6 col-md-12 col-sm-12">
              <h2>
                More About <em>Lava</em>
              </h2>
              <p>
                Phasellus dapibus urna vel lacus accumsan, iaculis eleifend
                leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in
                porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                <br />
                <br />
                If you need this contact form to send email to your inbox, you
                may follow our{" "}
                <a
                  rel="nofollow"
                  href="/"
                  target="_parent"
                >
                  contact
                </a>{" "}
                page for more detail.
              </p>
              <ul className="social">
                <li>
                  <a href="https://fb.com/">
                  <span><CiFacebook /></span>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/">
                   <span><CiTwitter /></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                  <span><CiLinkedin /></span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/">
                    <span><FaGithub /></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <span><CiInstagram /></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="sub-footer">
              <p>
                Copyright © 2024 Lava Landing Page | Designed by{" "}
                <strong>Deep R.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <Helmet>
    <script src="./assets/js/jquery-2.1.0.min.js"></script>

    <script src="./assets/js/popper.js"></script>
    <script src="./assets/js/bootstrap.min.js"></script>

    <script src="./assets/js/owl-carousel.js"></script>
    <script src="./assets/js/scrollreveal.min.js"></script>
    <script src="./assets/js/waypoints.min.js"></script>
    <script src="./assets/js/jquery.counterup.min.js"></script>
    <script src="./assets/js/imgfix.min.js"></script>

    <script src="./assets/js/custom.js"></script>
    </Helmet>
  </>
  )
}

export default IndexFile;