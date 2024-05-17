
function App() {

  return (
  
   <>
   <nav id="navbar">
        <div className="container">
            <div className="row">
                <div className="nav_col_logo">
                    <img src="/Logo.png" alt="Logo.png"/>
                </div>
                <div className="nav_col_menu">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Service</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Price</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="nav_col_button">
                    <a className="common_button">Contact Us</a>
                </div>
            </div>
        </div>
    </nav>
    {/* <!-- ==================================== NAV PART END  ===================================== --> */}

    {/* <!-- ==================================== BANNER PART START ===================================== --> */}
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
    {/* <!-- ==================================== BANNER PART END  ===================================== --> */}

    {/* <!-- ==================================== ABOUT US PART START ===================================== --> */}
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

    {/* <!-- ==================================== ABOUT US PART END  ===================================== --> */}

    {/* <!-- ==================================== COUNTER PART START ===================================== --> */}
    <section id="counter">
        <div className="container">
            <div className="row">
                <div className="counter_col">
                    <div className="counter_details">
                        <h3 className="common_headding">12,000+</h3>
                        <p className="common_details">Project Done</p>
                    </div>
                </div>
                <div className="counter_col">
                    <div className="counter_details">
                        <h3 className="common_headding">11,500+</h3>
                        <p className="common_details">Happy Clients</p>
                    </div>
                </div>
                <div className="counter_col">
                    <div className="counter_details">
                        <h3 className="common_headding">18+</h3>
                        <p className="common_details">Award Winner</p>
                    </div>
                </div>
                <div className="counter_col">
                    <div className="counter_details">
                        <h3 className="common_headding">650+</h3>
                        <p className="common_details">Team Member </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==================================== COUNTER PART END  ===================================== --> */}

    {/* <!-- ==================================== SERVICE PART START ===================================== --> */}
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
    {/* <!-- ==================================== SERVICE PART END  ===================================== --> */}

    {/* <!-- ==================================== CHOOSE PART START ===================================== --> */}
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
    {/* <!-- ==================================== CHOOSE PART END  ===================================== --> */}

    {/* <!-- ==================================== SUCCESS PART START ===================================== --> */}
      <section id="success">
        <div className="container">
            <div className="success_details">
                <div className="success_details_left">
                    <div className="about_us_headding"><h3>Our Successful Project</h3></div>
                    <h2 className="common_headding">Keep your vision to our latest projects.</h2>
                </div>
                <div className="success_details_right">
                    <p className="common_details">Now you can host more parties and rely on our cleaners to do all the hard work for you. At Denver Cleaning Service Company we show your home some TLC because we care!</p>
                </div>
            </div>
            <div className="row success_row">
               <div className="success_col">
                   <div className="success_items">
                      <div className="success_img">
                        <img src="/success_img.png" alt="success_img"/>
                      </div>
                      <div className="success_items_details">
                         <h4>Furniture Cleaning</h4>
                         <p>Office cleaning</p>
                      </div>
                   </div>
               </div>
               <div className="success_col">
                   <div className="success_items">
                      <div className="success_img">
                        <img src="/success_img.png" alt="success_img"/>
                      </div>
                      <div className="success_items_details">
                         <h4>Furniture Cleaning</h4>
                         <p>Office cleaning</p>
                      </div>
                   </div>
               </div>
               <div className="success_col">
                   <div className="success_items">
                      <div className="success_img">
                        <img src="/success_img.png" alt="success_img"/>
                      </div>
                      <div className="success_items_details">
                         <h4>Furniture Cleaning</h4>
                         <p>Office cleaning</p>
                      </div>
                   </div>
               </div>
               <div className="success_col">
                   <div className="success_items">
                      <div className="success_img">
                        <img src="/success_img.png" alt="success_img"/>
                      </div>
                      <div className="success_items_details">
                         <h4>Furniture Cleaning</h4>
                         <p>Office cleaning</p>
                      </div>
                   </div>
               </div>
            </div>
        </div>
      </section>
    {/* <!-- ==================================== SUCCESS PART END  ===================================== --> */}

    {/* <!-- ==================================== FEEDBACK PART START ===================================== --> */}
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
    {/* <!-- ==================================== FEEDBACK PART END  ===================================== --> */}

    {/* <!-- ==================================== BLOG PART START ===================================== --> */}
     <section id="blog">
        <div className="container">
            <div className="blog_headding">
                <div className="about_us_headding"><h3>Latest News</h3></div>
                <h2 className="common_headding">We work many fields to clean your surrounding area</h2>
            </div>
            <div className="row blog_row">
                <div className="blog_col">
                    <div className="blog_img">
                        <img src="/blog_img.png" alt="blog_img"/>
                    </div>
                    <div className="blog_details">
                        <div className="blog_date">
                            <h3>20</h3>
                           <div className="blog_ym">
                            <p>AUGUST</p>
                            <p>2020</p>
                           </div>
                        </div>

                        <div className="blog_tag">
                            <p>CASETHEMES</p>
                            <p>OFFICE</p>
                        </div>
                        <div className="blog_text">
                            <h2>How stay calm from the first.</h2>
                        <p>Quality service begins with quality people. Each CleanNet® certified.</p>
                        </div>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_img">
                        <img src="/blog_img.png" alt="blog_img"/>
                    </div>
                    <div className="blog_details">
                        <div className="blog_date">
                            <h3>20</h3>
                           <div className="blog_ym">
                            <p>AUGUST</p>
                            <p>2020</p>
                           </div>
                        </div>

                        <div className="blog_tag">
                            <p>CASETHEMES</p>
                            <p>OFFICE</p>
                        </div>
                        <div className="blog_text">
                            <h2>How stay calm from the first.</h2>
                        <p>Quality service begins with quality people. Each CleanNet® certified.</p>
                        </div>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_img">
                        <img src="/blog_img.png" alt="blog_img"/>
                    </div>
                    <div className="blog_details">
                        <div className="blog_date">
                            <h3>20</h3>
                           <div className="blog_ym">
                            <p>AUGUST</p>
                            <p>2020</p>
                           </div>
                        </div>

                        <div className="blog_tag">
                            <p>CASETHEMES</p>
                            <p>OFFICE</p>
                        </div>
                        <div className="blog_text">
                            <h2>How stay calm from the first.</h2>
                        <p>Quality service begins with quality people. Each CleanNet® certified.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    {/* <!-- ==================================== BLOG PART END  ===================================== --> */}

    {/* <!-- ==================================== FOOTER PART START ===================================== --> */}
      <footer id="footer">
        <div className="container">
            <div className="row">
                <div className="footer_col_1">
                    <div className="footer_description">
                        <div className="footer_logo">
                            <img src="/footer_logo.png" alt="footer_logo"/>
                        </div>
                        <p className="common_details">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    </div>
                </div>
                <div className="footer_col">
                    <div className="footer_feature">
                        <h3>Features</h3>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Benifit</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_col">
                    <div className="footer_feature">
                        <h3>Products</h3>
                        <ul>
                            <li><a >Task Management</a></li>
                            <li><a >Company growth</a></li>
                            <li><a >Time tracking</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_col">
                    <div className="footer_feature">
                        <h3>Support</h3>
                        <ul>
                            <li><a>Customer service</a></li>
                            <li><a>Accessibility</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="copyright">
                <p>@20201 Innovate.All rights reserved.</p>
                <p>Privacy policy</p>
                <p>Terms & condition</p>
            </div>
        </div>
      </footer>
   </>
  
  )
}

export default App
