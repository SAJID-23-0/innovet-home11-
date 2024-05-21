import React from 'react'

const Choose = () => {
  return (
    <section id="choose">
    <div className="container">
        <div className="row">
            <div className="choose_col_details">
                <div className="choose_details">
                    <div className="about_us_headding">
                        <h3>Why Choose Us</h3>
                    </div>
                    <h2 className="common_headding">Our Expertise
                        Making Your
                        Business Shine</h2>
                    <p className="common_details">At Queak we believe that we have a duty to adhere to good
                        environmental practice, and operate in a sustainable manner. As lovers of plants and the
                    </p>
                    <div className="choose_button">
                        <a className="common_button">More about us</a>
                    </div>
                </div>

            </div>
            <div className="choose_col_img">
                <div className="choose_img">
                    <img src="/choose_img.png" alt="choose_img"/>
                </div>
            </div>
            <div className="choose_col_card">
                <div className="choose_card">
                    <img src="/choose_card.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Choose