import React from 'react';

import bgc from '../../../asset/bgc.png';
import bgc1 from '../../../asset/bgc1.png';
import machine1 from '../../../asset/machine1.jpg';
import machine2 from '../../../asset/machine2.jpg';

const Home: React.FC<any> = (props: any) => {

    const carouselItem = [
        {
            src: bgc,
            cssClassName: 'carousel-item active',
            databsinterval: '10000',
            id: '0'
        },
        {
            src: bgc1,
            cssClassName: 'carousel-item',
            databsinterval: '2000',
            id: '1'
        }
    ]
    return (
        <div className="row">
            <div className="col-12">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        {
                            carouselItem.map( (itm: any, indx: number) => (
                                <li key={itm.id} data-target="#demo" data-slide-to={itm.id} className={indx === 0 ? 'active' : ''}></li>
                            ))
                        }
                    </ul>
                    <div className="carousel-inner">
                        {
                            carouselItem.map( (itm: any) => (
                                <div className={itm.cssClassName}>
                                <img src={itm.src} alt="" style={{width: '100%'}}/>
                                <div className="carousel-caption">
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;