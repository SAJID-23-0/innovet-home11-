import React from 'react'

const Feedback = () => {
  return (
    <section id="feedback">
        <div className="container">
            <div className="feedback_headding">
               <div className="about_us_headding"><h3>Client Feedback</h3></div>
               <h2 className="common_headding">Happy Client Says About
                Our Company</h2>
            </div>
            <div className="row feedback_row">
               <div className="feedback_col">
                   <div className="feedback_items">
                     <div className="feedback_img">
                        <img src="/feedback_img.png" alt="feedback_img"/>
                     </div>
                      <h5>Robert Henrich</h5>
                      <p>Chief Executive</p>
                   </div>
               </div>
               <div className="feedback_col">
                   <div className="feedback_review">
                     <div className="feedback_review_img">
                        <img src="/feedback_img2.png" alt="feedback_img2"/>
                     </div>
                     <div className="feedback_review_details">
                        <p className="common_details">Nothing like coming home to clean windows, especially when you have about 48 of them! Don't underestimate the importance of cleaning.</p>

                        <h5>Robert Henrich</h5>
                        <p>Chief Executive</p>
                     </div>
                   </div>
               </div>

               <div className="feedback_col">
                   <div className="feedback_review">
                     <div className="feedback_review_img">
                        <img src="/feedback_img2.png" alt="feedback_img2"/>
                     </div>
                     <div className="feedback_review_details">
                        <p className="common_details">Nothing like coming home to clean windows, especially when you have about 48 of them! Don't underestimate the importance of cleaning.</p>

                        <h5>Robert Henrich</h5>
                        <p>Chief Executive</p>
                     </div>
                   </div>
               </div>
               
            </div>
        </div>
      </section>
  )
}

export default Feedback