import React from 'react';
import footerimage from '../images/footerimage.png';


const Footer = () => {
    return (
        <div>
                <footer className="text-center text-lg-start bg-black text-muted">
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span className="" id ="card-title">SH LOGO</span>
                        </div>
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-white text-uppercase fw-bold mb-4">
                                        ADDRESS
                                    </h6>
                                    <p className="text-white">
                                        570 8th Ave, <br/>
                                        New York, NY 10018 <br />
                                        United States
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-white text-uppercase fw-bold mb-4">
                                        BOOKING
                                    </h6>
                                    <p className="text-white">
                                        Dogfood och Sliders foodtruck. <br />
                                        Under Om oss kan ni läsa
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-white text-uppercase fw-bold mb-4">
                                        OPENING HOURS
                                    </h6>
                                    <p className="text-white">
                                        Monday – Friday: <span className="text-white text-bold">8AM - 4PM</span>
                                    </p>
                                    <p className="text-white">
                                        Saturday: <span className="text-bold text-white">9AM - 5PM</span>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-white text-uppercase fw-bold mb-4">
                                        FOLLOW US
                                    </h6>
                                    <div>
                                        <a href="/" className="me-4 text-reset">
                                            <i className="ln bi bi-linkedin"></i>
                                        </a>
                                        <a href="/" className="me-4 text-reset">
                                            <i className="fb bi bi-facebook"></i>
                                        </a>
                                        <a href="/" className="me-4 text-reset">
                                            <i className="tw bi bi-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    

                        
                        <div className="d-flex p-4" style= {{backgroundColor: '#00A850'}}>
                        <h6 className="text-white">
                                Copyright © 2021 <span className="logo">SH FOOD</span> | All Right Reserved
                            </h6>  
                            
                            <a className=" ms-auto text-reset fw-bold" href="/"><img className="footerVisa" src={ footerimage } alt="sponsors" /></a>
                        </div>
                    
                </footer>
        </div>
   
   );
}


export default Footer;