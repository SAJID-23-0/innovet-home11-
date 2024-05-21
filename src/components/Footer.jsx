import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer