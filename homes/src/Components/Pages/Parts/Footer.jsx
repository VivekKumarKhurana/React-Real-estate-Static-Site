import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-area bg-color pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.png" className="footer-logo1" alt="Images" />
                                            <img src="assets/img/logo-white.png" className="footer-logo2" alt="Images" />
                                            </a>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris nibh,
                                            fermentum nec lorem sed, venenatis lacinia nunc.
                                        </p>
                                        <ul className="social-link">
                                            <li>
                                                <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank"><i className='bx bxl-pinterest-alt'></i></a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank"><i className='bx bxl-youtube'></i></a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget">
                                    <h3>Useful Links</h3>
                                    <ul className="footer-list">
                                        <li>
                                            <a href="about.html" target="_blank">
                                                <i className='bx bxs-chevron-right'></i>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="services-1.html" target="_blank">
                                                <i className='bx bxs-chevron-right'></i>
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="team.html" target="_blank">
                                                <i className='bx bxs-chevron-right'></i>
                                                Team
                                            </a>
                                        </li>
                                        <li>
                                            <a href="agemt.html" target="_blank">
                                                <i className='bx bxs-chevron-right'></i>
                                                Agents
                                            </a>
                                        </li>
                                        <li>
                                            <a href="gallery.html" target="_blank">
                                                <i className='bx bxs-chevron-right'></i>
                                                Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html" target="_blank">
                                                <i className='bx bxs-chevron-right'></i>
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h3>Address</h3>
                                    <ul className="footer-list-two">
                                        <li>
                                            <i className='bx bx-time'></i>
                                            Sun - Fri: 8.00am - 6.00pm
                                        </li>
                                        <li>
                                            <i className='bx bxs-location-plus'></i>
                                            <a href="#">2459 Autostrad St, London, UK</a>
                                        </li>
                                        <li>
                                            <i className='bx bx-phone'></i>
                                            <a href="tel:+215-123-4567">+215-123-4567</a>
                                        </li>
                                        <li>
                                            <i className='bx bx-phone'></i>
                                            <a href="tel:+215-231-7657">+215-231-7657</a>
                                        </li>
                                        <li>
                                            <i className='bx bxs-envelope'></i>
                                            <a
                                                href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#0a63646c654a626f676524696567"><span
                                                    className="__cf_email__"
                                                    data-cfemail="b3daddd5dcf3dbd6dedc9dd0dcde">[email&#160;protected]</span></a>
                                        </li>
                                        <li>
                                            <i className='bx bxs-envelope'></i>
                                            <a
                                                href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#5f373a3333301f373a3230713c3032"><span
                                                    className="__cf_email__"
                                                    data-cfemail="bbd3ded7d7d4fbd3ded6d495d8d4d6">[email&#160;protected]</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <h3>Newsletter</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris nibh, fermentum nec
                                        lorem sed,
                                        venenatis lacinia nunc. Duis laoreet, odio non ultricies pellentesque.
                                    </p>
                                    <div className="newsletter-area">
                                        <form className="newsletter-form" data-toggle="validator" method="POST">
                                            <input type="email" className="form-control" placeholder="Your Email*" name="EMAIL" required
                                                autoComplete="off" />
                                                <button className="default-btn btn-bg-2 border-radius-50" type="submit">
                                                    Subscribe
                                                </button>
                                                <div id="validator-newsletter" className="form-result"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="copy-right-area">
                    <div className="container">
                        <div className="copy-right-text text-center">
                            <p>
                                Copyright @
                                <script data-cfasync="false"
                                    src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                                <script>document.write(new Date().getFullYear())</script> Hemo. All Rights Reserved by
                                <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a>
                            </p>
                        </div>
                    </div>
                </div>
                
        </footer>
    )
}
