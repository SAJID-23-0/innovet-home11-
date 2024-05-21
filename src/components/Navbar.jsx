import React from 'react'

const Navbar = () => {
  return (
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
  )
}

export default Navbar