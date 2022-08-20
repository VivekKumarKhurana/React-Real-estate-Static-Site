import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { a } from "react-router-dom"
export const Home = () => {
    return (

        <main>
            <HelmetProvider>
                <Helmet>
                    <title>This is a Site Title</title>
                </Helmet>

            <div className="banner-area-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span>WELCOME TO US</span>
                                <h1>Find Your Lovely Home Easily With Us</h1>
                                <p>
                                    We are one of the best service & property provider on
                                    the global market. We are effective.
                                </p>
                                <div className="banner-btn-two">
                                    <a href="/" className="buy-btn">Buy Now</a>
                                </div>
                            </div>
                        </div>
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
                                    <a href="/" className="default-btn btn-bg-2">Read More</a>
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
                                <a href="/" className="read-btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="features-item features-item-style text-center">
                                <i className='flaticon-verified'></i>
                                <h3>High-Level Security</h3>
                                <p>We have a lot of duplex and luxury rooms for you and you can easily buy this. </p>
                                <a href="/" className="read-btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="features-item features-item-style text-center">
                                <i className='flaticon-crown-variant-with-pointed-tips'></i>
                                <h3>Royal Touch Paint</h3>
                                <p>We have a lot of duplex and luxury rooms for you and you can easily buy this. </p>
                                <a href="/" className="read-btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="features-item features-item-style text-center">
                                <i className='flaticon-swings'></i>
                                <h3>Large Playground</h3>
                                <p>We have a lot of duplex and luxury rooms for you and you can easily buy this. </p>
                                <a href="/" className="read-btn">Read More </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="property-area-two bg-color ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-title">
                                <span className="sp-color-2">OUR PROPERTY</span>
                                <h2>Our Property and Its Availabilities and All Other Details</h2>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-6">
                            <div className="property-btn-area">
                                <a className="buy-btn">Buy</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="property-slider-two owl-carousel owl-theme pt-45">
                        <div className="property-item property-item-color">
                            <a href="property-details.html">
                                <img src="assets/img/property/property-img1.jpg" alt="Images" />
                            </a>
                            <div className="content">
                                <h4>Apartment <span>1200 Sq. feet</span> </h4>
                                <h3><a href="property-details.html">Luxury Apartment</a></h3>
                                <div className="price">$1200/m</div>
                                <div className="property-btn">
                                    <a href="/" className="book-btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="property-item property-item-color">
                            <a href="property-details.html">
                                <img src="assets/img/property/property-img2.jpg" alt="Images" />
                            </a>
                            <div className="content">
                                <h4>Apartment <span>1450 Sq. feet</span> </h4>
                                <h3><a href="property-details.html">Renovated Apartment</a></h3>
                                <div className="price">$1400/m</div>
                                <div className="property-btn">
                                    <a href="/" className="book-btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="property-item property-item-color">
                            <a href="property-details.html">
                                <img src="assets/img/property/property-img3.jpg" alt="Images" />
                            </a>
                            <div className="content">
                                <h4>Apartment <span>1250 Sq. feet</span> </h4>
                                <h3><a href="property-details.html"> Night Valley Apartment</a></h3>
                                <div className="price">$1200/m</div>
                                <div className="property-btn">
                                    <a href="/" className="book-btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="property-item property-item-color">
                            <a href="property-details.html">
                                <img src="assets/img/property/property-img4.jpg" alt="Images" />
                            </a>
                            <div className="content">
                                <h4>Apartment <span>1250 Sq. feet</span> </h4>
                                <h3><a href="property-details.html">Luxury Apartment</a></h3>
                                <div className="price">$1000/m</div>
                                <div className="property-btn">
                                    <a href="/" className="book-btn">Book Now</a>
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
                                    <a href="/" className="default-btn btn-bg-2">
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
                                        <img src="/assets/img/gallery/gallery-img1.jpg" alt="Images" />
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
                                                <a >
                                                    <i className="flaticon-pdf"></i>
                                                    Property description.pdf
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="gallery-icon">
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
                                                <a >
                                                    <i className="flaticon-pdf"></i>
                                                    Property description.pdf
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="gallery-icon">
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
                                                <a >
                                                    <i className="flaticon-pdf"></i>
                                                    Property description.pdf
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="gallery-icon">
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


            <div className="team-area pt-100 pb-70">
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
                                            <a className="color-blue"  target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-blue"  target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-red"  target="_blank">
                                                <i className='bx bxl-pinterest-alt'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-dark-red"  target="_blank">
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
                                            <a className="color-blue"  target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-blue"  target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-red"  target="_blank">
                                                <i className='bx bxl-pinterest-alt'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-dark-red"  target="_blank">
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
                                            <a className="color-blue"  target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-blue"  target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-red"  target="_blank">
                                                <i className='bx bxl-pinterest-alt'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="color-dark-red"  target="_blank">
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


            <div className="testimonials-area-two pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sp-color-2">TESTIMONIALS</span>
                        <h2>Our Clients Reviews and All of the Comments</h2>
                    </div>
                    <div className="row pt-45 align-items-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="testimonials-item">
                                        <ul>
                                            <li>
                                                <img src="assets/img/testimonials/testimonials-img1.jpg" alt="Images" />
                                                <div className="content">
                                                    <h3>Anjilina Jolli</h3>
                                                    <span>CEO, Adata Corporation</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <p>
                                            <i className='bx bxs-quote-alt-left'></i>
                                            We will get all of the best facilities. This is one of the best and a
                                            unique company into the whole world. We have 2 flat, one is an
                                            relaxed flat and another is rent flat.
                                            <i className='bx bxs-quote-alt-right'></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="testimonials-item">
                                        <ul>
                                            <li>
                                                <img src="assets/img/testimonials/testimonials-img2.jpg" alt="Images" />
                                                <div className="content">
                                                    <h3>Cristina Frank</h3>
                                                    <span>Manager</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <p>
                                            <i className='bx bxs-quote-alt-left'></i>
                                            We will get all of the best facilities. This is one of the best and a
                                            unique company into the whole world. We have 2 flat, one is an
                                            relaxed flat and another is rent flat.
                                            <i className='bx bxs-quote-alt-right'></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonials-img">
                                <img src="assets/img/testimonials/testimonials-img4.jpg" alt="Images" />
                                <div className="testimonials-shape">
                                    <div className="shape1">
                                        <img src="assets/img/testimonials/testimonials-shape1.png" alt="Images" />
                                    </div>
                                    <div className="shape2">
                                        <img src="assets/img/testimonials/testimonials-shape2.png" alt="Images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="blog-area pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sp-color-2">BLOG</span>
                        <h2>Latest Blog Post</h2>
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-card-color">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img1.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span>August 01, 2020</span>
                                    <h3><a href="blog-details.html">You Can Easily Change and Shift Your Home at Any Time</a>
                                    </h3>
                                    <p>We are one of the best company & you can easily change and shipped to the home at any
                                        time.</p>
                                    <a href="/" className="read-more-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-card-color">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img2.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span>September 09, 2020</span>
                                    <h3><a href="blog-details.html">Global Organization Makes a Bit Safety Issue on Property
                                    </a></h3>
                                    <p>We are one of the best company & you can easily change and shipped to the home at any
                                        time.</p>
                                    <a href="/" className="read-more-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="blog-card blog-card-color">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img3.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span>September 29, 2020</span>
                                    <h3><a href="blog-details.html">Be Safe and Be Happy on the Family Policy and Privacy</a>
                                    </h3>
                                    <p>We are one of the best company & you can easily change and shipped to the home at any
                                        time.</p>
                                    <a href="/" className="read-more-btn">Read More</a>
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

export default Home;