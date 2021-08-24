import React from 'react';

import rtm4 from '../../../asset/rtm2.png';
import rtm2 from '../../../asset/rtm4.png';
import side from '../../../asset/side.png';
import endFeed from '../../../asset/endFeed.png';
import joint from '../../../asset/joint.png';
import pullTester from '../../../asset/pullTester.png';

const Products: React.FC<any> = (props: any) => {
    const productsList: Array<any> = [
        {
            name: 'Digital Crimping Press RTF-2M',
            id: 1,
            description: 'Digital crimping machine RTF-2M is a bench type semi automatic' +
                'crimping machine suitable for crimping reeled terminals with' +
                'stripped wires and operated by a foot switch. The machine is' +
                'micro processor controlled for reliability in operation. Mechanical' +
                'design is built on steel plates and not on casting. Due to less' +
                'wearing parts it has the least down time. The control panel has' +
                'been re-designed with soft touch button commands for all the' +
                'operations. It is most user friendly, safe& simple in operation.',
            othersFeatures: [
                'Option of 30mm & 40mm stroke as per customer’s request is available',
                'Has standard quick change applicator fixing arrangement with accepts all standard mini applicators',
                'Machine has enough space to accommodate applicators of more shut height than mini applicators',
                'Machine has unique slow motion feature which is helpful in setting terminals & applicators in the “SET MODE”.',
                'ThreeSpeed option available for the operator',
                'Repeatedly of shut height is assured within few microns.'
            ],
            src: rtm2
        },
        {
            name: 'Digital Crimping Press RTF-4M',
            id: 2,
            description: 'Digital crimping machine RTF-4M is a bench typr semi automatic crimping' +
                'machine suitable for crimping reeled terminals with stripped wires &' +
                'operated by a foot switch. The machine is micro processor controlled' +
                'for reliability in operation. Mechanical design is built on Steel Plates and' +
                'not on casting. This makes the product more reliable and long lasting.' +
                'Due to less wearing parts it has least down time. The control panel has' +
                'been re-desingned with soft touch button commands for all the' +
                'operations. It is the most user friendly, safe & simple in operation. Some' +
                'of the special features of machine are given below.',
            othersFeatures: [
                'Option 30mm or 40mm stroke as per the request of customer.',
                'Has standard quick change applicator fixing arrangement which accepts' +
                'all standard mini applicators.',
                'Machine has enough space to accommodate applicators of more shut' +
                'height like 190mm or 212mm.',
                'Machine has a unique slow motion feature in “SET MODE”.',
                'Three speed option available for the operator.',
                'Repeatedly of shut height 135.8mm is assured within few microns.'
            ],
            src: rtm4
        },
        {
            name: 'Side Feed Applicator(Standard)',
            id: 3,
            description: 'Side Feed Applicator (Standard) is designed to crimp reeled' +
                'terminals with feeding from left to right. The feeding is' +
                'mechanical by use of a cam arrangement . The applicator parts' +
                'are made from high quality tool steel using the best practices in' +
                'machining. The parts are made duly hardened and ground to' +
                'give a long life. Some of the special feature which make this' +
                'applicator unique and maintenance friendly are given below.',
            othersFeatures: [
                'The applicator can be run on 30mm or 40mm stroke press without changing any parts.',
                'Tooling is split type so that only worn tools need to be replaced.',
                'Shank has enclosed pocket to hold crimpers so that we get minimum misalignment between crimper & anvil.',
                'Anvils & crimpers can be replaced without removing the applicator from the press.',
                'All the perishable tools are permanently marked to help recording.'
            ],
            src: side
        },
        {
            name: 'End Feed Applicator(Standard)',
            id: 4,
            description: 'End feed applicator (standard) is designed to crimp chained' +
                'terminals with feeding from rear to front. The feeding is' +
                'mechanical by use of cam arrangement. The applicator parts are' +
                'made from highly quality tool steel using the best practices in' +
                'machining. The parts are duly hardened and ground to give a long' +
                'life. The micro setting for crimp height is done by a dial fitted on' +
                'the head of shank. For thicker terminals this adjustments is done' +
                'by a screw and nut',
            othersFeatures: [
                'The applicator can run 30mm or 40mm stroke press without any change of parts.',
                'Shank has enclosed pocket to hold crimpers so that we get' +
                'minimum misalignment between the crimpers and anvils.',
                'Crimpers can be replaced without removing the applicator from the press.',
                'The applicator base plate has as standard three point tightening' +
                'provision which fits in most of the common quick change' +
                'arrangement given in the presses.',
                'All the perishable parts are permanently marked to help reordering.'
            ],
            src: endFeed
        },
        {
            name: 'Joint Terminal Applicator',
            id: 5,
            description: 'Joint terminal applicator is used in special application for joint crimping. The feed of' +
                'the reeled terminal is from rear to front . Adequate space has been provided so' +
                'that wires can be held in both the hands. As terminal feed comes from rear side we' +
                'must be informed whether the carrier is on the right side or thr left side seeing' +
                'from the front so that cutting arrangement could be made accordingly. The micro' +
                'adjustment for crimp height is done by dial or screw and nut provided on the' +
                'shank head. The applicator parts are made from high quality steel using the best' +
                'practice in machining . The parts are duly hardened and ground to give long life.',
            othersFeatures: [
                'The applicator runs on 30mm or 40mm stroke press.',
                'The shank has enclosed pocket to hold crimpers so that we get minimum misalignment between crimpers & anvils.',
                'The conductor crimp height micro adjustment is continuous.',
                'Anvil & crimpers can be replaced without removing the applicator from the press',
                'All the perishable parts are permanently marked to help recording.'
            ],
            src: joint
        },
        {
            name: 'Digital Cutting & Stripping Machine',
            id: 6,
            description: 'The Cutting and stripping machine model CS-01 is a' +
                'computerized machine for fast processing of wires. Two' +
                'wires can be run at a time. Desired cutting & stripping length' +
                'can be programmed. One can select the batch quantity also.' +
                'Just before completion of the batch the machine gives a' +
                'distinctive alarm. The lengths are controlled by stepper' +
                'motors, which gives constant torque. The setting of the wires' +
                'is easy. The O.D. & wires should be uniform to get better' +
                'accuracy. Normal accuracy given by machine is +_' +
                '0.2+0.002x length of wire cut. The machine has a protection' +
                'against high voltage which is very advantageous for Indian conditions.'
        },
        {
            name: 'Manual Pull Tester',
            id: 7,
            description: 'Manual Pull Tester is a fixture wherein you' +
                'can check the pull strength og crimped' +
                'terminal with wire. We manufacture this' +
                'fixture at our works and purchase some' +
                'of the standard push-pull gauges available' +
                'in the market to fit in our fixture. A' +
                'unique disc arrangement makes the' +
                'terminal holding very accurate and' +
                'reliable. Screw type arrangement makes' +
                'the pulling gradual and smooth.' +
                'We supply this product complete ready' +
                'to use along with gauge. We give our' +
                'customers an option of using digital' +
                'push-pull gauge or analogue push-pull' +
                'gauge in various capacities.',
            src: pullTester
        }
    ]
    return (
        <div className="row">
            <div className="col-12">
                <div className="" style={{ padding: '10px' }}>
                    <div style={{ backgroundColor: '#ffc107', padding: '10px' }}>
                        <h4>Our Products</h4>
                    </div>
                    <hr style={{
                        marginTop: '4px',
                        backgroundColor: '#0dcaf0',
                        padding: '1px'
                    }} />
                    <div className="row">
                        {
                            productsList.map((it: any) => (
                                <div className="col-lg-6 col-md-6 col-12" style={{ marginBottom: '10px' }}>
                                    <div className="box-shadow" style={{ padding: '10px' }}>
                                        <h6>{it.name}</h6>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div
                                                    style={
                                                        {
                                                            height: '100%',
                                                            backgroundImage: `url(${it.src})`,
                                                            backgroundRepeat: 'no-repeat'
                                                        }
                                                    }>

                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12" style={{ fontStyle: 'oblique' }}>
                                                <p>
                                                    {it.description}
                                                </p>
                                                {
                                                    it.othersFeatures &&
                                                    <p>
                                                        <ul>
                                                            {
                                                                it.othersFeatures.map((feature: string) => (
                                                                    <li>{feature}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;