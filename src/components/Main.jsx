import Typewriter from './TypeWriterEffect';
import mainImg from '../assets/images/main-img.svg'
import React from 'react';
const Main = () => {
    return (
        <main id="home">
            <div className="main-section container-fluid">
                <div className="row row-gap-5">
                    <div className="type-writer-container col-12 col-lg-7">
                        <div className='welcome'>Welcome All In My Portifolio</div>
                        <p className='my-type-writer'>Hi! I'm Abdulrahman Mohamed <br /> Keshk,
                            <Typewriter
                                texts={[" FullStack Web Developer", " FrontEnd Developer", " BackEnd Developer"]}
                                speed={200}
                                deleteSpeed={100}
                                delay={1000}
                            />
                        </p>
                        <p className='sup-paragraph'>Hello Everyone I have 8 monthes Of Experience In web Development</p>
                        <a className="main-connect" href="#connect" rel="noopener noreferrer"><span>Let's Connect</span>
                            <svg className='connect-arrow-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30" height="30" fill="currentColor"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" /></svg>
                        </a>
                    </div>
                    <div className="main-img col-12 col-lg-5">
                        <img src={mainImg} alt="img" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default React.memo(Main);
