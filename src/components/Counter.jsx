import React from 'react'

const Counter = () => {
  return (
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
  )
}

export default Counter