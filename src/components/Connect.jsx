import React, { useRef } from 'react';
import contactImg from '../assets/images/contact-img.svg'
import EmailForm from './EmailForm';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import successAnim from '../assets/Animations/successAnim2.json'
const Connect = () => {
    const [state, handleSubmit] = useForm("xldryblj");
    const mainForm = useRef(null)
    const restForm = () => {
        setTimeout(() => { mainForm.current.reset() }, 1500)
    }
    return (
        <section id="connect">
            <div className="connect-section container">
                <div className="row justify-content-center mx-auto">
                    <div className="contact-img col-11 col-lg-6">
                        <img src={contactImg} alt="contact img" />
                    </div>
                    <div className="connect-form p-0 col-11 col-lg-6">
                        <h2 className="connect-title w-100 text-center text-lg-start">Get In Touch</h2>
                        <form ref={mainForm} onSubmit={handleSubmit}>
                            <div className="container-fluid">
                                <div className="row justify-content-center mx-auto">
                                    <div className="input-div col-12 col-lg-6">
                                        <input required type="text" name="firstName" id="firstName" placeholder="First Name" />
                                    </div>
                                    <div className="input-div col-12 col-lg-6">
                                        <input required type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                    </div>
                                    <div className="input-div col-12 col-lg-6">
                                        <input required type="email" name="email" id="email" placeholder="Email Address" />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="input-div col-12 col-lg-6">
                                        <input required type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone No." />
                                    </div>
                                    <div className="input-div col-12 col-lg-12">
                                        <textarea name="message" id="message" placeholder="Message" ></textarea>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <button onClick={restForm} className="connect-send-btn mx-auto mx-lg-2" type="submit" disabled={state.submitting}><span>{state.submitting ? "Sending..." : "Send"}</span></button>
                            </div>
                        </form>
                        {state.succeeded && (<div className="connect-send-success d-flex align-items-center">
                            <Lottie style={{ width: "55px", height: "55px" }} loop={false} animationData={successAnim} />
                            <p className="d-flex align-items-center m-0">Your message has been sent successfully 👌</p>
                        </div>)}
                    </div>
                </div>
            </div>
            <EmailForm />
        </section>
    );
}

export default React.memo(Connect);
