import React from 'react'
import { Table, Jumbotron, Button } from 'react-bootstrap'

export default class Jumbotrons extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='jumbotron'>
                    <h2>Jumbotron</h2>
                    <h3>
                        A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
                    </h3>
                    <Jumbotron>
                        <h2>Hello, world!</h2>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                    <div className='Campil'>
                        <span className='purple'>
                        &lt;Jumbotron&gt;<br/>
                        <span>  </span>&lt;h1&gt;<span className='text-light'>Hello, world!</span>&lt;/h1&gt;<br/>
                        <span>  </span>&lt;p&gt;<br/>
                        <span>      </span><span className='text-light'>This is a simple hero unit, a simple jumbotron-style component for calling<br/>
                        <span>      </span>extra attention to featured content or information.<br/></span>
                        <span>  </span>&lt;/p&gt;<br/>
                        <span>  </span>&lt;p&gt;<br/>
                        <span>      </span>&lt;Button <span className='green'>variant</span>="primary"&gt;<span className='text-light'>Learn More</span>&lt;/Button&gt;<br/>
                        <span>  </span>&lt;/p&gt;<br/>
                        &lt;/Jumbotron&gt;<br/>
                        </span>
                    </div>
                </div>
                <div className='Section' id='api'>
                    <h2>API</h2>
                    <h6><span className='text-danger'>import</span> <span className='text-success'>Jumbotron </span> <span className='text-danger'>from</span> <span className='text-success'>'react-bootstrap/Jumbotron'</span></h6>
                    <Table striped responsive bordered hover className='mt-5'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='font-weight-light'>as</th>
                                <th className='font-weight-light'>elementType</th>
                                <th className='font-weight-light text-danger'>&lt;div&gt;</th>
                                <th className='font-weight-light'>You can use a custom element type for this component.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>fluid</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>false</th>
                                <th className='font-weight-light'>Make the jumbotron full width, and without rounded corners</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>bsPrefix</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light text-danger'>'jumbotron'</th>
                                <th className='font-weight-light'>Change the underlying component CSS base class name and modifier class names prefix. <b>This is an escape hatch</b> for working with heavily customized bootstrap css.</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}