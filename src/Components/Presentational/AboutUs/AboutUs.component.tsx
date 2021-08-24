import React from 'react';

import './AboutUs.component.css';

const AboutUs: React.FC<any> = (props: any) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="box-shadow" style={{ padding: '10px' }}>
                    <div style={{ backgroundColor: '#ffc107', padding: '10px' }}>
                        <h4>About Us</h4>
                    </div>
                    <hr style={{
                        marginTop: '4px',
                        backgroundColor: '#0dcaf0',
                        padding: '1px'
                    }} />
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <div className="about-us-bgc"></div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12" style={{fontStyle: 'oblique'}}>
                            <p>
                                Eastablished in the year 2012 as <b>AK Engineering </b>
                                engaged in manufacturing of <b>Crimpting</b> machines and tools
                                used in manfacturing industries.
                            </p>
                            <p>
                                During these years our efforts have been on continuous imporvements
                                and inovations which has result in development of full range of Press,
                                Applicators and Allied Equipments like Cutting and Stripping machine for
                                Wire Processing, Pull Testers and Crimp Cross Section Laboratory Equipments
                                for checking the quality of Crimp.
                            </p>
                            <p>
                                We have highly experienced and skilled work force who are working
                                with us from 7-10 years for applicators and crimping press manufacturing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;