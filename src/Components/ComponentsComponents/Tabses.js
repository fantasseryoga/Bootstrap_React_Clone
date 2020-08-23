import React from 'react'
import { Table,Tabs, Tab, Jumbotron } from 'react-bootstrap'

export default class Tabses extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='tabbedcomponents'>
                    <h2>Tabbed components</h2>
                    <h3>Dynamic tabbed interfaces</h3>
                </div>
                <div className='Section' id='examples'>
                    <h2>Examples</h2>
                    <h6>
                        Create dynamic tabbed interfaces, as described in the <span className='text-primary'>WAI ARIA Authoring Practices</span>. <span className='text-danger'>Tabs</span> is a higher-level component for quickly creating a <span className='text-danger'>Nav</span> matched with a set of <span className='text-danger'>TabPanes</span>.
                    </h6>
                    <Jumbotron>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Home">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled>
                            </Tab>
                        </Tabs>
                        <div className='Campil mt-4'>
                            <span className='purple'>
                            &lt;Tabs <span className='green'>defaultActiveKey</span>="profile" <span className='green'>id</span>="uncontrolled-tab-example"&gt;<br/>
                            <span>  </span>&lt;Tab <span className='green'>eventKey</span>="home" <span className='green'>title</span>="Home"&gt;<br/>
                            <span>      </span>&lt;Lorem /&gt;<br/>
                            <span>  </span>&lt;/Tab&gt;<br/>
                            <span>  </span>&lt;Tab <span className='green'>eventKey</span>="profile" <span className='green'>title</span>="Profile"&gt;<br/>
                            <span>      </span>&lt;Lorem /&gt;<br/>
                            <span>  </span>&lt;/Tab&gt;<br/>
                            <span>  </span>&lt;Tab <span className='green'>eventKey</span>="contact" <span className='green'>title</span>="Contact" <span className='green'>disabled</span>&gt;<br/>
                            <span>      </span>&lt;Lorem /&gt;<br/>
                            <span>  </span>&lt;/Tab&gt;<br/>
                            &lt;/Tabs&gt;
                            </span>
                        </div>
                    </Jumbotron>
                </div>
                <div className='Section' id='dropdowns?'>
                    <h2>Dropdowns?</h2>
                    <h6>
                        Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.
                            <br/><br/>
                        That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support.
                    </h6>
                </div>
                <div className='Section' id='api'>
                    <h2>API</h2>
                    <h6><span className='text-danger'>import</span> <span className='text-success'>Modal </span> <span className='text-danger'>from</span> <span className='text-success'>'react-bootstrap/Modal'</span></h6>
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
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>Toggles the active state of the TabPane, this is generally controlled by a TabContainer.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>as</th>
                                <th className='font-weight-light'>elementType</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>You can use a custom element type for this component.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>aria-labelledby</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'></th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>eventKey</th>
                                <th className='font-weight-light'>any</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>A key that associates the <span className='text-danger'>TabPane</span> with it's controlling <span className='text-danger'>NavLink</span>.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>id</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'></th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>mountOnEnter</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>false</th>
                                <th className='font-weight-light'>Wait until the first "enter" transition to mount the tab (add it to the DOM)</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}