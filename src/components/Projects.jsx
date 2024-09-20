import React, { useState } from 'react';
import img1 from '../assets/images/project-1.jpg'
import img2 from '../assets/images/project-2.jpg'
import img3 from '../assets/images/project-3.jpg'
import img4 from '../assets/images/project-4.jpg' 
import img5 from '../assets/images/project-5.jpg' 
import img6 from '../assets/images/project-6.jpg' 

const projects = [
    {
        id: 1,
        imgUrl: img1,
        title: "Project 1",
        text: "Simple Design With HTML & CSS"
    },
    {
        id: 2,
        imgUrl: img2,
        title: "Techno Market",
        text: "Online Store HTML & CSS3 Design"
    },
    {
        id: 3,
        imgUrl: img3,
        title: "EduPlatform",
        text: "Design With Bootstrap 5"
    },
    {
        id: 4,
        imgUrl: img4,
        title: "Online Shopping",
        text: "Project On JavaScript"
    },
    {
        id: 5,
        imgUrl: img5,
        title: "My Portifolio",
        text: "Portifolio with React"
    },
    {
        id: 6,
        imgUrl: img6,
        title: "Password Generator",
        text: "Generate Random Passwords"
    },
]

const Tab1 = () => {
    return (
        <>
            <div className="project-cards container w-100">
                <div className="row justify-content-center row-gap-4 w-100 mx-auto">
                    {projects.map((item) => {
                        return (
                            <div key={item.id} className='card-spacing col-11 col-md-6 col-lg-4'>
                                <div className="project-card card text-bg-dark ">
                                    <img src={item.imgUrl} className="card-img" alt={item.title} />
                                    <div className="card-img-overlay">
                                        <h3 className="card-title">{item.title}</h3>
                                        <i className="card-text">{item.text}</i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const Tab3 = () => {
    return (
        <>
            <p className="text-light fs-5 w-75 mx-auto">
                My name is Abdulrahman, I live in El-Mahalla El-Kubra, I am 16 years old, These are some of my projects
            </p>
        </>
    )
}

const Projects = () => {
    const [activeTab, setActiveTab] = useState("tab1")
    const activeClass = (tabName) => {
        return activeTab === tabName ? "active " : ""
    }
    return (
        <>
            <section id="projects">
                <div className="projects-section">
                    <h2 className="section-title text-light mb-3 fs-1">My Projects</h2>
                    <p className='sup-paragraph w-50 mb-5'>My name is Abulrahman, I live in Gharbia, El Mahalla El Kubra Center, These are some of my projects.</p>
                    <div style={{ padding: "0 8.5%" }} className="container">
                        <ul className='projects-nav row'>
                            <li className={`${activeClass("tab1")}col-4`}><button onClick={() => setActiveTab("tab1")}>1st Section</button></li>
                            <li className={`${activeClass("tab2")}col-4`}><button onClick={() => setActiveTab("tab2")}>2nd Section</button></li>
                            <li className={`${activeClass("tab3")}col-4`}><button onClick={() => setActiveTab("tab3")}>3rd Section</button></li>
                        </ul>
                    </div>
                    <div className='w-100 mt-4'>
                        {activeTab === 'tab1' && <Tab1 />}
                        {activeTab === 'tab2' && null}
                        {activeTab === 'tab3' && <Tab3 />}
                    </div>
                </div>
            </section>
        </>
    );
}

export default React.memo(Projects);
