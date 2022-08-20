import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
export const About = () => {
  return (
    <main>
        <HelmetProvider>
                <Helmet>
                    <title>This is a About Title</title>
                </Helmet>
    <div className="inner-banner inner-bg1">
        <div className="container">
            <div className="inner-title">
                <h3>About Us</h3>
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    </div>


    <div className="about-area pt-100 pb-70">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-img-2">
                        <img src="assets/img/about-img/about-img2.png" alt="Images" />
                        <div className="about-shape">
                            <img src="assets/img/about-img/bg-shape.png" alt="Images" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-title">
                            <span className="sp-color-2">ABOUT US</span>
                            <h2>We Are the Best Service Provider All Over the World</h2>
                            <p>
                                We are one of the best service provider & this will help you make a good property in the
                                easiest way and this is one of the best and a
                                proper way to buy of rent your suitable flat.
                            </p>
                        </div>
                        <div className="about-btn">
                            <a href="#" className="default-btn btn-bg-2">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="features-area pb-70">
        <div className="container">
            <div className="section-title text-center">
                <span className="sp-color-2">FEATURES</span>
                <h2>Our Property Features</h2>
            </div>
            <div className="row pt-45">
                <div className="col-lg-3 col-sm-6">
                    <div className="features-item features-item-style text-center">
                        <i className='flaticon-duplex'></i>
                        <h3>Duplex Layout</h3>
                        <p>We have a lot of duplex and luxury rooms for you and you can easily buy this. </p>
                        <a href="#" className="read-btn">Read More</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="features-item features-item-style text-center">
                        <i className='flaticon-verified'></i>
                        <h3>High-Level Security</h3>
                        <p>We have a lot of duplex and luxury rooms for you and you can easily buy this. </p>
                        <a href="#" className="read-btn">Read More</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="features-item features-item-style text-center">
                        <i className='flaticon-crown-variant-with-pointed-tips'></i>
                        <h3>Royal Touch Paint</h3>
                        <p>We have a lot of duplex and luxury rooms for you and you can easily buy this. </p>
                        <a href="#" className="read-btn">Read More</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="features-item features-item-style text-center">
                        <i className='flaticon-swings'></i>
                        <h3>Large Playground</h3>
                        <p>We have a lot of duplex and luxury rooms for you and you can easily buy this. </p>
                        <a href="#" className="read-btn">Read More </a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="gallery-area bg-color pt-100 pb-70">
        <div className="container">
            <div className="section-title text-center">
                <span className="sp-color-2">PREVIEW GALLERY</span>
                <h2>Let's See All of Our Resources at a Glance</h2>
            </div>
            <div className="gallery-slider owl-carousel owl-theme pt-45">
                <div className="gallery-item">
                    <div className="row">
                        <div className="col-lg-7 pe-0">
                            <div className="gallery-item-img">
                                <img src="assets/img/gallery/gallery-img1.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className="col-lg-5 ps-0">
                            <div className="gallery-item-content">
                                <h2>Royal Triplex House and It's All Details at a Glance</h2>
                                <p>
                                    We have a lot of good property and one of that
                                    is this property and for that we have arranged a
                                    catalogue for your. Please click on below!
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="flaticon-pdf"></i>
                                            Property description.pdf
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="gallery-icon">
                                            <i className="flaticon-file icon-ml"></i>
                                            Energetic certificate. pdf
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery-item">
                    <div className="row">
                        <div className="col-lg-7 pe-0">
                            <div className="gallery-item-img">
                                <img src="assets/img/gallery/gallery-img2.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className="col-lg-5 ps-0">
                            <div className="gallery-item-content">
                                <h2>Royal Duplex House and It's All Details at a Glance</h2>
                                <p>
                                    We have a lot of good property and one of that
                                    is this property and for that we have arranged a
                                    catalogue for your. Please click on below!
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="flaticon-pdf"></i>
                                            Property description.pdf
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="gallery-icon">
                                            <i className="flaticon-file icon-ml"></i>
                                            Energetic certificate. pdf
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery-item">
                    <div className="row">
                        <div className="col-lg-7 pe-0">
                            <div className="gallery-item-img">
                                <img src="assets/img/gallery/gallery-img3.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className="col-lg-5 ps-0">
                            <div className="gallery-item-content">
                                <h2>Multiplex House and It's All Details at a Glance</h2>
                                <p>
                                    We have a lot of good property and one of that
                                    is this property and for that we have arranged a
                                    catalogue for your. Please click on below!
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="flaticon-pdf"></i>
                                            Property description.pdf
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="gallery-icon">
                                            <i className="flaticon-file icon-ml"></i>
                                            Energetic certificate. pdf
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="innovation-area pt-100 pb-70">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="innovation-content">
                        <div className="section-title">
                            <span className="sp-color-2">INNOVATION</span>
                            <h2>Minimalism in Every Detail in an at a Glance</h2>
                            <p>
                                Interior of volumes, space, air, proportion, with certain light and mood. These
                                interiors are meant to last forever. This is really effective and we
                                can easily manage this for our clients.
                            </p>
                        </div>
                        <ul>
                            <li>
                                <i className="flaticon-checkbox"></i>
                                Offers You the Best Category Home and Service
                            </li>
                            <li>
                                <i className="flaticon-checkbox"></i>
                                Offers You Buy One Get One in Lottery Service.
                            </li>
                            <li>
                                <i className="flaticon-checkbox"></i>
                                Primary in All and Whole Lottery Service.
                            </li>
                        </ul>
                        <div className="innovation-btn">
                            <a href="#" className="default-btn btn-bg-2">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="innovation-img-two">
                        <img src="assets/img/innovation-img/innovation-img2.png" alt="Images" />
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="team-area pb-70">
        <div className="container">
            <div className="section-title text-center">
                <span className="sp-color-2">OUR TEAM</span>
                <h2>Let's Meet Our Expert Team</h2>
            </div>
            <div className="row pt-45">
                <div className="col-lg-4 col-md-6">
                    <div className="team-card">
                        <div className="team-img">
                            <a href="team.html">
                                <img src="assets/img/team/team-img1.jpg" alt="Images" />
                            </a>
                            <ul className="team-social">
                                <li>
                                    <a className="color-blue" href="#" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-blue" href="#" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-red" href="#" target="_blank">
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-dark-red" href="#" target="_blank">
                                        <i className='bx bxl-youtube'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h3><a href="team.html">Kilin Ward</a></h3>
                            <span>Manager</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-card">
                        <div className="team-img">
                            <a href="team.html">
                                <img src="assets/img/team/team-img4.jpg" alt="Images" />
                            </a>
                            <ul className="team-social">
                                <li>
                                    <a className="color-blue" href="#" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-blue" href="#" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-red" href="#" target="_blank">
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-dark-red" href="#" target="_blank">
                                        <i className='bx bxl-youtube'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h3><a href="team.html">Jenifar Ambrina</a></h3>
                            <span>Chief Executive</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div className="team-card">
                        <div className="team-img">
                            <a href="team.html">
                                <img src="assets/img/team/team-img3.jpg" alt="Images" />
                            </a>
                            <ul className="team-social">
                                <li>
                                    <a className="color-blue" href="#" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-blue" href="#" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-red" href="#" target="_blank">
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-dark-red" href="#" target="_blank">
                                        <i className='bx bxl-youtube'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h3><a href="team.html">Johan Henry</a></h3>
                            <span>Managing Director</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </HelmetProvider>
    </main>
  )
}
