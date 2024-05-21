import React from 'react'

const Banner = () => {
  return (
    <section id="banner" style={{background: `url(./banner_img.png) no-repeat center`,backgroundSize:`cover`}}>
        <div className="container">
            <div className="row">
                <div className="banner_col_details">
                    <h1 className="common_headding">Expert cleaning service and affordable price</h1>
                    <p className="common_details">We are a certified company. We provide the best cleaning services for you
                        & your company.</p>
                    <div className="banner_element_img"><img src="/banner_element.png" alt="banner_element"/></div>
                    <div className="banner_buttons">
                        <a  className="common_button">Get started</a>
                        <a  className="banner_service_button"> Watch our service</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner