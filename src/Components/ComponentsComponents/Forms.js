import React from 'react'
import { Table, Form, Button, Jumbotron } from 'react-bootstrap'

export default class Forms extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='forms'>
                    <h2>Forms</h2>
                    <h6>
                        The <span className='text-danger'>&lt;FormControl&gt;</span> component renders a form control with Bootstrap styling.
                        The <span className='text-danger'>&lt;FormGroup&gt;</span> component wraps a form control with proper spacing, along with support for a label,
                        help text, and validation state.
                        To ensure accessibility, set controlId on <span className='text-danger'>&lt;FormGroup&gt;</span>, and use <span className='text-danger'>&lt;FormLabel&gt;</span> for the label.
                    </h6>
                    <Jumbotron>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <div className='Campil mt-4'>
                            <span className='purple'>
                            &lt;Form&gt;<br/>
                                <span>   </span>&lt;Form.Group <span className='green'>controlId=</span>"formBasicEmail"&gt;<br/>
                                <span>      </span>&lt;Form.Label&gt;<span className='text-light'>Email address</span>&lt;/Form.Label&gt;<br/>
                                <span>      </span>&lt;Form.Control <span className='green'>type=</span>"email" <span className='green'>placeholder=</span>"Enter email" /&gt;<br/>
                                <span>      </span>&lt;Form.Text <span className='green'>className=</span>"text-muted"&gt;<br/>
                                <span>        </span><span className='text-light'>We'll never share your email with anyone else.</span><br/>
                                <span>      </span>&lt;/Form.Text&gt;<br/>
                                <span>  </span>&lt;/Form.Group&gt;<br/>

                                <span>  </span>&lt;Form.Group <span className='green'>controlId=</span>"formBasicPassword"&gt;<br/>
                                <span>      </span>&lt;Form.Label&gt;<span className='text-light'>Password</span>&lt;/Form.Label&gt;<br/>
                                <span>      </span>&lt;Form.Control <span className='green'>type=</span>"password" <span className='green'>placeholder=</span>"Password" /&gt;<br/>
                                <span>  </span>&lt;/Form.Group&gt;<br/>
                                <span>  </span>&lt;Form.Group<span className='green'> controlId=</span>"formBasicCheckbox"&gt;<br/>
                                <span>      </span>&lt;Form.Check <span className='green'>type=</span>"checkbox" <span className='green'>label=</span>"Check me out" /&gt;<br/>
                                <span>  </span>&lt;/Form.Group&gt;<br/>
                                <span>  </span>&lt;Button <span className='green'>variant=</span>"primary" <span className='green'>type=</span>"submit"&gt;<br/>
                                <span>      </span><span className='text-light'>Submit</span><br/>
                                <span>  </span>&lt;/Button&gt;<br/>
                            &lt;/Form&gt;<br/>
                            </span>
                        </div>
                    </Jumbotron>
                    <h6>
                        The <span className='text-danger'>&lt;FormControl&gt;</span> component directly renders the  <span className='text-danger'>&lt;input&gt;</span> or other specified component.
                         If you need to access the value of an uncontrolled  <span className='text-danger'>&lt;FormControl&gt;</span>, attach a  <span className='text-danger'>ref</span> to it as
                              you would with an uncontrolled input, then call <span className='text-danger'>ReactDOM.findDOMNode(ref)</span> to get the DOM node.
                               You can then interact with that node as you would with any other uncontrolled input.<br/><br/>

                        If your application contains a large number of form groups, we recommend building
                         a higher-level component encapsulating a complete field group that renders the label
                         , the control, and any other necessary components. We don't provide this out-of-the-box    
                         , because the composition of those field groups is too specific to an individual application
                          to admit a good one-size-fits-all solution.
                    </h6>
                </div>
                <div className='Section' id='api'>
                    <h2>API</h2>
                    <h6><span className='text-danger'>import</span> <span className='text-success'>Acoordion</span> <span className='text-danger'>from</span> <span className='text-success'>'react-bootstrap/Accordion'</span></h6>
                    <Table striped bordered hover responsive className='mt-5'>
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
                                <th className='font-weight-light'>ReactRef</th>
                                <th className='font-weight-light'>ref</th>
                                <th className='font-weight-light'></th>
                                <th className='font-weight-light'>The Form <span className='text-danger'>ref</span> will be forwarded to the underlying element, which means, unless it's rendered <span className='text-danger'>as</span> a composite component, it will be a DOM node, when resolved.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>defaultActiveKey</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light'></th>
                                <th className='font-weight-light'>The default active key that is expanded on start</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>as</th>
                                <th className='font-weight-light'>elementType</th>
                                <th className='font-weight-light text-danger'>&lt;form&gt;</th>
                                <th className='font-weight-light'>You can use a custom element type for this component.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>inline</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>false</th>
                                <th className='font-weight-light'>Display the series of labels, form controls, and buttons on a single horizontal row</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>validated</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>Mark a form as having been validated. Setting it to true will toggle any validation styles on the forms elements.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>bsPrefix</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light text-danger'>{'{'}'form'{'}'}</th>
                                <th className='font-weight-light'>Change the underlying component CSS base class name and modifier class names prefix.<b>This is an escape hatch</b> for working with heavily customized bootstrap css.</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
          
            </div>
        )
    }
}