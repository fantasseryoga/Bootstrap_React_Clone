import React from 'react'
import { Jumbotron, Table, Accordion, Card, Button } from 'react-bootstrap'

export default class Acordion extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='accordion'>
                    <h2>Accordion</h2>
                    <h3>Accordions provide a way to restrict Card components to only open one at a time.</h3>
                </div>
            <div className='Section' id='examples'>
                <h2>Examples</h2>
                <h6>
                    Accordions use Card components to provide styling of the Accordion components.
                        Use AccordionToggle to provide a button that switches between each AccordionCollapse component.
                </h6>
            </div>
                <div className='Section' id='basicexample'>
                    <h2>Basic Example</h2>
                    <Jumbotron>
                        <Accordion defaultActiveKey='0'>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Click me!
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey='0'>
                                    <Card.Body>
                                        Hello! I'm the body
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Click me!
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey='1'>
                                    <Card.Body>
                                        Hello! I'm the body
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <div className='Campil mt-4'>
                            <span className='purple'>
                            &lt;Card&gt;<br/>
                            <span>  &lt;Card.Header&gt;<br/></span>
                            <span>      &lt;Accordion.Toggle <span className='green'>as</span>={'{'}Button{'}'} <span className='green'>variant</span>="link" <span className='green'>eventKey</span>="0"&gt;<br/></span>
                            <span className='text-light'>           Click me!<br/></span>
                            <span>      &lt;Accordion.Toggle&gt;<br/></span>
                            <span>  &lt;Card.Header&gt;<br/></span>
                            <span>  &lt;Accordion.Collapse <span className='green'>eventKey</span>="0"&gt;<br/></span>
                            <span>  &lt;Card.Body&gt;<span className='text-light'>Hello! I'm the body</span>&lt;Card.Body&gt;<br/></span>
                            <span>  &lt;Accordion.Collapse&gt;<br/></span>
                            &lt;Card&gt;<br/>
                            </span>
                        </div>
                    </Jumbotron>
                </div>
                <div className='Section' id='api'>
                    <h2>API</h2>
                    <h6><span className='text-danger'>import</span> <span className='text-success'>Acoordion</span> <span className='text-danger'>from</span> <span className='text-success'>'react-bootstrap/Accordion'</span></h6>
                    <Table responsive striped bordered hover className='mt-5'>
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
                                <th className='font-weight-light'>activeKey</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light'></th>
                                <th className='font-weight-light'>The current active key that corresponds to the currently expanded card</th>
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
                                <th className='font-weight-light'></th>
                                <th className='font-weight-light'>Set a custom element for this component</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>onSelect</th>
                                <th className='font-weight-light'>SelectCallback</th>
                                <th className='font-weight-light'></th>
                                <th className='font-weight-light'>Set a custom element for this component</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>bsPrefix</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light text-danger'>'accordion'</th>
                                <th className='font-weight-light'>Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        )
    }
}