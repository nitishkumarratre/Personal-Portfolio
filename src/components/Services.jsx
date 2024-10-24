import React from 'react'

const Services = () => {
    return (
        <>
            <div id="services" className="services-style-one-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Services</h4>
                                <h2 className="title">My Quality Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp">
                            <div className="service-style-one-item">
                                <img src="assets/img/icon/1.png" alt="Image Not Found" />
                                <h4><a href="services-details.html">Digital Marketing</a></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <a href="services-details.html" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </a>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 active wow fadeInUp" data-wow-delay="200ms">
                            <div className="service-style-one-item active">
                                <img src="assets/img/icon/2.png" alt="Image Not Found" />
                                <h4><a href="services-details.html">App Development</a></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <a href="services-details.html" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </a>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp" data-wow-delay="400ms">
                            <div className="service-style-one-item">
                                <img src="assets/img/icon/3.png" alt="Image Not Found" />
                                <h4><a href="services-details.html">UI/UX Design</a></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <a href="services-details.html" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </a>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp" data-wow-delay="600ms">
                            <div className="service-style-one-item">
                                <img src="assets/img/icon/4.png" alt="Image Not Found" />
                                <h4><a href="services-details.html">Web Design</a></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <a href="services-details.html" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </a>
                            </div>
                        </div>
                        {/* End Single Item */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
