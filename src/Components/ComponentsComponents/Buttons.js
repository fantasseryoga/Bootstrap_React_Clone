import React from 'react'
import { Table, Button, Jumbotron } from 'react-bootstrap'

export default class Buttons extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='buttons'>
                    <h2>Buttons</h2>
                    <h3>
                        Custom button styles for actions in forms, dialogs,
                         and more with support for multiple sizes, states, and more.
                    </h3>
                </div>
                <div className='Section' id='examples'>
                    <h2>Examples</h2>
                    <h6>
                        Use any of the available button style types to quickly create a styled button. Just modify the <span className='text-danger'>variant</span> prop.
                    </h6>
                    <Jumbotron>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                        <Button variant="link">Link</Button>
                        <div className='Campil mt-4'>
                        <span className='text-secondary'>&lt;&gt;</span><br/>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="primary"&gt;<span className='text-light'>Primary</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="secondary"&gt;<span className='text-light'>Secondary</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="success"&gt;<span className='text-light'>Success</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="warning"&gt;<span className='text-light'>Warning</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="danger"&gt;<span className='text-light'>Danger</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="info"&gt;<span className='text-light'>Info</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="light"&gt;<span className='text-light'>Light</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="dark"&gt;<span className='text-light'>Dark</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="link"&gt;<span className='text-light'>Link</span>&lt;/Button&gt;<br/></span>
                        <span className='text-secondary'>&lt;/&gt;</span>
                        </div>
                    </Jumbotron>  
                </div>
                <div className='Section' id='outlinebuttons'> 
                    <h2>Outline buttons</h2>
                    <h6>
                        For a lighter touch, Buttons also come in <span className='text-danger'>outline-*</span> variants with no background color.
                    </h6>
                    <Jumbotron>
                        <Button variant="outline-primary">Primary</Button>{' '}
                        <Button variant="outline-secondary">Secondary</Button>{' '}
                        <Button variant="outline-success">Success</Button>{' '}
                        <Button variant="outline-warning">Warning</Button>{' '}
                        <Button variant="outline-danger">Danger</Button>{' '}
                        <Button variant="outline-info">Info</Button>{' '}
                        <Button variant="outline-light">Light</Button>{' '}
                        <Button variant="outline-dark">Dark</Button>{' '}
                        <Button variant="outline-link">Link</Button>
                        <div className='Campil mt-4'>
                        <span className='text-secondary'>&lt;&gt;</span><br/>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-primary"&gt;<span className='text-light'>Primary</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-secondary"&gt;<span className='text-light'>Secondary</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-success"&gt;<span className='text-light'>Success</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-warning"&gt;<span className='text-light'>Warning</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-danger"&gt;<span className='text-light'>Danger</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-info"&gt;<span className='text-light'>Info</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-light"&gt;<span className='text-light'>Light</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-dark"&gt;<span className='text-light'>Dark</span>&lt;/Button&gt;<br/></span>
                        <span className='purple'>   &lt;Button <span className='green'>variant</span>="outline-link"&gt;<span className='text-light'>Link</span>&lt;/Button&gt;<br/></span>
                        <span className='text-secondary'>&lt;/&gt;</span>
                        </div>
                    </Jumbotron> 
                </div>
                <div className='Section' id='sizes'>
                    <h2>Sizes</h2>
                    <h6>
                        Fancy larger or smaller buttons? Add <span className='text-danger'>size="lg",</span> <span className='text-danger'>size="sm",</span> for additional sizes.
                    </h6>
                    <Jumbotron>
                        <div className="mb-2">
                            <Button variant="primary" size="lg">
                            Large button
                            </Button>{' '}
                            <Button variant="secondary" size="lg">
                            Large button
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" size="sm">
                            Small button
                            </Button>{' '}
                            <Button variant="secondary" size="sm">
                            Small button
                            </Button>
                        </div>
                        <div className='Campil mt-4'>
                            <span className='purple'>
                                &lt;Button <span className='green'>variant=</span>"primary" <span className='green'>size=</span>"lg"&gt;<br/>
                                    <span className='text-light'>   Large button<br/></span>
                                &lt;/Button&gt;<br/>
                            </span>
                            <span className='purple'>
                                &lt;Button <span className='green'>variant=</span>"secondary" <span className='green'>size=</span>"lg"&gt;<br/>
                                    <span className='text-light'>   Large button<br/></span>
                                &lt;/Button&gt;<br/>
                            </span>
                            <span className='purple'>
                                &lt;Button <span className='green'>variant=</span>"primary" <span className='green'>size=</span>"sm"&gt;<br/>
                                    <span className='text-light'>   Small button<br/></span>
                                &lt;/Button&gt;<br/>
                            </span>
                            <span className='purple'>
                                &lt;Button <span className='green'>variant=</span>"secondary" <span className='green'>size=</span>"sm"&gt;<br/>
                                    <span className='text-light'>   Small button<br/></span>
                                &lt;/Button&gt;<br/>
                            </span>
                        </div>
                    </Jumbotron>
                </div>
                <div className='Section' id='api'>
                    <h2>API</h2>
                    <h6><span className='text-danger'>import</span> <span className='text-success'>Button</span> <span className='text-danger'>from</span> <span className='text-success'>'react-bootstrap/Button'</span></h6>
                    <Table striped bordered responsive hover className='mt-5'>
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
                                <th className='font-weight-light'>active</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>false</th>
                                <th className='font-weight-light'>Manually set the visual state of the button to <span className='text-danger'>:active</span></th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>as</th>
                                <th className='font-weight-light'>elementType</th>
                                <th className='font-weight-light'></th>
                                <th className='font-weight-light'>You can use a custom element type for this component.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>block</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light'></th>
                                <th className='font-weight-light'>Spans the full width of the Button parent</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>disabled</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>false</th>
                                <th className='font-weight-light'>Disables the Button, preventing mouse events, even if the underlying component is an <span className='text-danger'>&lt;a&gt;</span> element</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}