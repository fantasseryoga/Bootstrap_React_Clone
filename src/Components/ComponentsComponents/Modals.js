import React from 'react'
import { Table, Jumbotron, Modal, Button } from 'react-bootstrap'

export default class Modals extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='modals'>
                    <h2>Modals</h2>
                    <h3>
                        Add dialogs to your site for lightboxes, user notifications, or completely custom content.
                    </h3>
                </div>
                <div className='Section' id='overview'>
                    <h2>Overview</h2>
                    <h6>
                        <ul>
                            <li>
                                Modals are positioned over everything else in the document and remove scroll from the {'<body>'} so that modal content scrolls instead.
                            </li>
                            <li>
                                Modals are <i>unmounted</i> when closed.
                            </li>
                            <li>
                                Bootstrap only supports <b>one</b> modal window at a time. Nested modals aren’t supported, but if you really need them the underlying <span className='text-danger'>react-overlays</span> can support them if you're willing.
                            </li>
                            <li>
                                Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.
                            </li>
                            <li>
                                Unlike vanilla Bootstrap, <span className='text-danger'>autoFocus</span> works in Modals because React handles the implementation.
                            </li>
                        </ul>
                    </h6>
                </div>
                <div className='Section' id='example'>
                    <h2>Example</h2>                    
                </div>
                <div className='Section' id='staticmarkup'>
                    <h2>Static Markup</h2>   
                    <h6>
                        Below is a <i>static</i> modal dialog (without the positioning) to demonstrate the look and feel of the Modal
                    </h6>
                    <Jumbotron>
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Modal body text goes here.</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary">Close</Button>
                                <Button variant="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        <div className='Campil'>
                            <span className='purple'>
                            &lt;Modal.Dialog&gt;<br/>
                            <span>  </span>&lt;Modal.Header <span className='green'>closeButton</span>&gt;<br/>
                            <span>      </span>&lt;<span className='text-light'>Modal.Title</span>&gt;Modal title&lt;/Modal.Title&gt;<br/>
                            <span>  </span>&lt;/Modal.Header&gt;<br/>
                            <span>  </span>&lt;Modal.Body&gt;<br/>
                            <span>      </span>&lt;p&gt;<span className='text-light'>Modal body text goes here.</span>&lt;/p&gt;<br/>
                            <span>  </span>&lt;/Modal.Body&gt;<br/>
                            <span>  </span>&lt;Modal.Footer&gt;<br/>
                            <span>      </span>&lt;Button <span className='green'>variant</span>="secondary"&gt;<span className='text-light'>Close</span>&lt;/Button&gt;<br/>
                            <span>      </span>&lt;Button <span className='green'>variant</span>="primary"&gt;<span className='text-light'>Save changes</span>&lt;/Button&gt;<br/>
                            <span>  </span>&lt;/Modal.Footer&gt;<br/>
                            &lt;/Modal.Dialog&gt;<br/>
                            </span>
                        </div>
                    </Jumbotron>
                </div>
                <div className='Section' id='livedemo'>
                    <h2>Live demo</h2>
                    <h6>
                        A modal with header, body, and set of actions in the footer. Use <span className='text-danger'>{'<Modal/>'}
                        </span> in combination with other components to show or hide your Modal. The <span className='text-danger'>
                        {'<Modal/>'}</span> Component comes with a few convenient "sub components": <span className='text-danger'>
                        {'<Modal.Header/>'}</span>, <span className='text-danger'>{'<Modal.Title/>'}</span>, 
                        <span className='text-danger'>{'<Modal.Body/>'}</span>, and <span className='text-danger'>{'<Modal.Footer/>'}
                        </span>, which you can use to build the Modal content.
                    </h6>
                </div>
                <div className='Section' id='api'>
                    <h2>API</h2>
                    <h6><span className='text-danger'>import</span> <span className='text-success'>Modal </span> <span className='text-danger'>from</span> <span className='text-success'>'react-bootstrap/Modal'</span></h6>
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
                                <th className='font-weight-light'>animation</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>true</th>
                                <th className='font-weight-light'>Open and close the Modal with a slide and fade animation.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>aria-labelledby</th>
                                <th className='font-weight-light'>none</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'></th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>autoFocus</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>true</th>
                                <th className='font-weight-light'>When  <span className='text-danger'>true</span> The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>backdropClassName</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>dialogAs</th>
                                <th className='font-weight-light'>elementType</th>
                                <th className='font-weight-light text-danger'>{'<ModalDialog>'}</th>
                                <th className='font-weight-light'>A Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>onEscapeKeyDown</th>
                                <th className='font-weight-light'>function</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>A callback fired when the escape key, if specified in <span className='text-danger'>keyboard</span>, is pressed.</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}