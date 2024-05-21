import React from 'react'

const About_us = () => {
  return (
    <section id="about_us">
    <div className="container">
        <div className="row">
            <div className="about_us_col_left">
                <div className="about_us_img">
                    <img src="/aboutus_img.png" alt="aboutus_img"/>
                    <div className="about_us_element">
                        <img src="/aboutus_element.png" alt="aboutus_element"/>
                    </div>
                </div>
                <div className="about_us_cart">
                    <div className="about_us_cart_hedding">
                        <h4>25+</h4>
                        <p>Years</p>
                    </div>
                    <p>Experience</p>
                </div>
            </div>
            <div className="about_us_col_right">
                <div className="about_us_headding">
                    <h3>About Company</h3>
                    <h2 className="common_headding">One Stop Commercial
                        Cleaning Company</h2>
                </div>
                <div className="about_us_details common_details">
                    <p>Our mission is not only to meet your expectations but to exceed them, we also provide many
                        more like condos and apartment cleaning. Our unique 22-Step Healthy Touch Deep</p>

                    <p>We also provide many more like condos and apartment cleaning. Our unique 22-Step Healthy
                        Touch Deep Cleaning System will ensure you’ll receive a healthy,</p>
                </div>
                <div className="about_us_button">
                    <a href="#" className="common_button">More about us</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About_us