import React from "react";

const EmailForm = () => {
    return (
        <section className="px-3">
            <div className="email-section container p-3">
                <div className="row row-gap-3">
                    <div className="col-12 col-lg-5">
                        <h3 className="fw-bold text-center text-lg-start">See My Projects At Once
                            & leave Here Your E-mail
                            Address
                        </h3>
                    </div>
                    <div className="email-form col-12 col-lg-7 d-flex justify-content-center align-items-center">
                        <form className="w-100">
                            <div className="email-box">
                                <input type="email" name="emailForm" id="emailForm" placeholder="Email Address" required autoComplete="off" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(EmailForm);