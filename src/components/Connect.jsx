import React from 'react';
import contactImg from '../assets/images/contact-img.svg'
import EmailForm from './EmailForm';
import { useForm, ValidationError } from '@formspree/react';
const Connect = () => {
    const [state, handleSubmit] = useForm("xldryblj");
    return (
        <section id="connect">
            <div className="connect-section container">
                <div className="row justify-content-center mx-auto">
                    <div className="contact-img col-11 col-lg-6">
                        <img src={contactImg} alt="contact img" />
                    </div>
                    <div className="connect-form col-11 col-lg-6">
                        <h2 className="connect-title w-100 text-center text-lg-start">Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="container-fluid">
                                <div className="row justify-content-center mx-auto">
                                    <div className="input-div col-11 col-lg-6">
                                        <input required type="text" name="firstName" id="firstName" placeholder="First Name" />
                                    </div>
                                    <div className="input-div col-11 col-lg-6">
                                        <input required type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                    </div>
                                    <div className="input-div col-11 col-lg-6">
                                        <input required type="email" name="email" id="email" placeholder="Email Address" />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="input-div col-11 col-lg-6">
                                        <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone No." />
                                    </div>
                                    <div className="input-div col-11 col-lg-12">
                                        <textarea name="message" id="message" placeholder="Message" ></textarea>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <button className="connect-send-btn mx-auto mx-lg-2" type="submit" disabled={state.submitting}><span>Send</span></button>
                            </div>
                        </form>
                            {state.succeeded && (<p>Thanks for joining!</p>)}
                    </div>
                </div>
            </div>
            <EmailForm />
        </section>
    );
}

export default React.memo(Connect);
