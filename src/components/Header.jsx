
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
    const [isScroll, setIsScroll] = useState(false)
    const navbarCollapsedRef = useRef(null)
    const [navbarCollapsedValue, setNavbarCollapsedValue] = useState(false);

    const handleCollpaseValue = () => {
        if (navbarCollapsedRef.current) {
            const value = Boolean(navbarCollapsedRef.current.getAttribute("aria-expanded") === "true")
            setNavbarCollapsedValue(value);
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            setIsScroll(true)
            if (window.scrollY === 0 && navbarCollapsedValue !== true) {
                setIsScroll(false)
            }
        })
    }, [isScroll, navbarCollapsedValue])
    const [active, setActive] = useState("home")
    const activeLink = (link) => {
        setActive(link)
    }
    const activeClass = (link) => {
        return active === link ? "active " : ""
    }
    return (
        <>
            <header>
                <nav style={{
                    backgroundColor: isScroll ? "#121212" : "transparent",
                    top: isScroll ? 0 : "10px",
                }} className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="#home">Portifolio</a>
                        <button ref={navbarCollapsedRef} onClick={() => {
                            setIsScroll(window.scrollY !== 0 ? true : !isScroll); handleCollpaseValue()
                        }}
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa-solid fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                                <li className="nav-item">
                                    <a onClick={() => activeLink("home")} className={`${activeClass("home")}nav-link`} aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => activeLink("skills")} className={`${activeClass("skills")}nav-link`} href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => activeLink("projects")} className={`${activeClass("projects")}nav-link`} href="#projects">Projects</a>
                                </li>
                                <div className="d-flex align-items-center gap-3 w-100">
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
                                    <li className="nav-item">
                                        <a className="nav-link connect-link" href="#connect">Let's Connect</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default React.memo(Header);
