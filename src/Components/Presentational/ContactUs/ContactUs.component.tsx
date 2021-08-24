import React from 'react';

import './ContactUs.component.css';

const ContactUs: React.FC<any> = (props: any) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="box-shadow contact-us">
                    <div style={{    backgroundColor: '#ffc107', padding: '10px'}}>
                        <h3>Contact Us</h3>
                    </div>
                    <hr style={{
                        marginTop: '4px',
                        backgroundColor: '#0dcaf0',
                        padding: '1px'
                    }}/>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <h4>We are located at:</h4>
                            <hr />
                            <h5>PSAK Engineering (India) Pvt. Ltd.</h5>
                            <p>B-92, Sector 10, Noida <br />
                                Gautambdh Nagar, UP - 201301
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <h4>You may reach us at:</h4>
                            <hr />
                            <p><b>Email: </b>akengineering51@gmail.com<br />
                            <b>Mobile: </b>+919911386615
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;