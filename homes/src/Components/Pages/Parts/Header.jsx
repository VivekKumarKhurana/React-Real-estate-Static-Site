import React from 'react'
import {Link,} from 'react-router-dom'
export const Header = () => {
    return (
        <header>
            <div className="navbar-area">

                <div className="mobile-nav">
                    <a href="index.html" className="logo">
                        <img src="assets/img/logo-two.png" className="logo-one" alt="Logo" />
                            <img src="assets/img/logo-white.png" className="logo-two" alt="Logo" />
                            </a>
                        </div>

                        <div className="main-nav nav-bar-two">
                            <div className="container">
                                <nav className="navbar navbar-expand-md navbar-light ">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="assets/img/logo-two.png" className="logo-one" alt="Logo" />
                                            <img src="assets/img/logo-white.png" className="logo-two" alt="Logo" />
                                            </a>
                                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                                <ul className="navbar-nav m-auto">
                                                    <li className="nav-item">
                                                        <Link to="/" className="nav-link active">Home</Link>                                                        
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/about" className="nav-link">About</Link>
                                                    </li>
                                                    
                                                    
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            Blog
                                                        </a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/about" className="nav-link">

                                                            Contact
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="option-item d-line">
                                                    <div className="language-list">
                                                        <select className="language-list-item">
                                                            <option>English</option>
                                                            <option>العربيّة</option>
                                                            <option>Deutsch</option>
                                                            <option>Português</option>
                                                            <option>简体中文</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="nav-btn-area">
                                                    <a href="#" className="nav-btn nav-btn-color">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                            </div>
                        </div>
                    </header>
                    )
}
