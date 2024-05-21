import React from 'react'

const Service = () => {
  return (
    <section id="service">
    <div className="container">
        <div className="service_details">
            <div className="about_us_headding">
                <h3>What we do?</h3>
            </div>
            <h2 className="common_headding">We work many fields to clean your surrounding area</h2>
            <p className="common_details">We understand your busy schedule and we are just a phone call away. Let our
                experienced cleaners do the cleaning.</p>
        </div>
        <div className="row">
            <div className="service_col">
                <div className="service_slider">
                    <div className="service_slider_icon">
                        <img src="/service_icon1.png" alt="service_icon1"/>
                    </div>
                    <div className="service_slider_details">
                        <h4>House Cleaning</h4>
                        <p>Imagine coming home to a completely clean, fresh smelling home after a long day of work.
                            If you need our help, </p>
                    </div>
                </div>
            </div>
            <div className="service_col">
                <div className="service_slider">
                    <div className="service_slider_icon">
                        <img src="/service_icon2.png" alt="service_icon2"/>
                    </div>
                    <div className="service_slider_details">
                        <h4>Kitchen Cleaning</h4>
                        <p>Busy schedules make it difficult to find time to maintain a proper home. Our team help
                            you when you don't</p>
                    </div>
                </div>
            </div>
            <div className="service_col">
                <div className="service_slider">
                    <div className="service_slider_icon">
                        <img src="/service_icon3.png" alt="service_icon3"/>
                    </div>
                    <div className="service_slider_details">
                        <h4>Glass Cleaning</h4>
                        <p>Our cleaning services and we can make sure your building is always sparkling whatever the
                            weather. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
  )
}

export default Service