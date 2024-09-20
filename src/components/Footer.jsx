import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content container">
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <a className="navbar-brand text-light" href="#home">Portifolio</a>
                    <div className="link-icons">
                        <li className="nav-item icon-link">
                            <a className="nav-link" href="#linkedin"><i className="fa-brands fa-linkedin-in" /></a>
                        </li>
                        <li className="nav-item icon-link">
                            <a className="nav-link" href="#facebook"><i className="fa-brands fa-facebook-f" /></a>
                        </li>
                        <li className="nav-item icon-link">
                            <a className="nav-link" href="#instagram"><i className="fa-brands fa-instagram" /></a>
                        </li>
                        <li className="nav-item icon-link">
                            <a className="nav-link" href="https://github.com/Abdelrhman-Keshk" rel="noreferrer" target="_blank">
                                <i className="fa-brands fa-github" />
                            </a>
                        </li>
                    </div>
                </div>
                <p className="sup-paragraph fs-5 fw-normal text-center text-lg-end w-100 ">
                    --&copy; Copyrights 2024-- All Rights Reserved here By Abdelrhman Mohamed Keshk
                </p>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
