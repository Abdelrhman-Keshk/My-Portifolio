import SkillProgressBar from './skillProgressbar';
import Carousel from 'react-multi-carousel';
import '../assets/carousel.css';
import React from 'react';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1250, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 830, min: 0 },
        items: 1,
    },
};


const Skill = () => {
    return (
        <section id="skills">
            <div className="skill-section">
                <div className="skills-container">
                    <h2 className='Section-title'>Skills</h2>
                    <h5>You Can See My Skills Here</h5>
                    <Carousel className="custom-carousel" responsive={responsive} infinite={true}>
                        <SkillProgressBar percentage={90} label={"FrontEnd Development"} />
                        <SkillProgressBar percentage={50} label={"BackEnd Development"} />
                        <SkillProgressBar percentage={80} label={"UI/UX Design"} />
                        <SkillProgressBar percentage={60} label={"Cyber Securety"} />
                        <SkillProgressBar percentage={85} label={"Data science"} />
                        <SkillProgressBar percentage={75} label={"Node JS"} />
                        <SkillProgressBar percentage={65} label={"Graphic Design"} />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Skill);
