import React from 'react'
import { Table, Card, Jumbotron, Nav } from 'react-bootstrap'

export default class Navs extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='basenav'>
                    <h2>Base Nav</h2>
                    <h6>
                        Navigation bits in Bootstrap all share a general <span className='text-danger'>Nav</span> component and styles
                        . Swap <span className='text-danger'>variants</span> to switch between each style
                        . The base <span className='text-danger'>Nav</span> component is built with flexbox and provide a strong foundation for building all types of navigation components
                    </h6>
                    <Card border='warning'>
                        <Card.Header><Card.Text>The basic, variant-less, <span className='text-danger'>Nav</span> component does not include any <span className='text-danger'>active</span> prop styling!</Card.Text></Card.Header>
                    </Card>
                    <Jumbotron className='mt-5'>
                        <Nav
                            activeKey="#"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                            >
                            <Nav.Item>
                                <Nav.Link href="#">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div class='Campil'>
                            <span className='purple'>
                            &lt;Nav<br/>
                                <span>  </span><span className='green'>activeKey</span>="/home"<br/>
                                <span>  </span><span className='green'>onSelect</span>={'{'}(selectedKey) <span className='red'>=&gt;</span> {'alert'}(<span className='red'>`selected</span> ${'{'}selectedKey{'}'}`){'}'}<br/>
                            &gt;<br/>
                                <span>  </span>&lt;Nav.Item&gt;<br/>
                                <span>      </span>&lt;Nav.Link <span className='green'>href</span>="/home"&gt;<span className='text-light'>Active</span>&lt;/Nav.Link&gt;<br/>
                                <span>  </span>&lt;/Nav.Item&gt;<br/>
                                <span>  </span>&lt;Nav.Item&gt;<br/>
                                <span>      </span>&lt;Nav.Link <span className='green'>eventKey</span>="link-1"&gt;<span className='text-light'>Link</span>&lt;/Nav.Link&gt;<br/>
                                <span>  </span>&lt;/Nav.Item&gt;<br/>
                                <span>  </span>&lt;Nav.Item&gt;<br/>
                                <span>      </span>&lt;Nav.Link <span className='green'>eventKey</span>="link-2"&gt;<span className='text-light'>Link</span>&lt;/Nav.Link&gt;<br/>
                                <span>  </span>&lt;/Nav.Item&gt;<br/>
                                <span>  </span>&lt;Nav.Item&gt;<br/>
                                <span>      </span>&lt;Nav.Link <span className='green'>eventKey</span>="disabled" <span className='green'>disabled</span>&gt;<br/>
                                <span className='text-light'>          Disabled</span><br/>
                                <span>      </span>&lt;/Nav.Link&gt; <br/>
                                <span>  </span>&lt;/Nav.Item&gt;<br/>
                            </span>
                        </div>                        
                    </Jumbotron>
                    <h6>
                        <span className='text-danger'>&lt;Nav&gt;</span> markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default <span className='text-danger'>&lt;Nav&gt;</span> and <span className='text-danger'>&lt;Nav.Item&gt;</span> both render <span className='text-danger'>&lt;div&gt;</span>s instead of <span className='text-danger'>&lt;ul&gt;</span> and <span className='text-danger'>&lt;li&gt;</span> elements respectively. This because it's possible (and common) to leave off the <span className='text-danger'>&lt;Nav.Item&gt;</span>'s and render a <span className='text-danger'>&lt;Nav.Link&gt;</span> directly, which would create invalid markup by default (ul {'<'} a).
                        <br/><br/>
                        When a <span className='text-danger'>&lt;ul&gt;</span> is appropriate you can render one via the as prop; be sure to also set your items to <span className='text-danger'>&lt;li&gt;</span> as well!
                    </h6>
                </div>
                <div className='Section' id='api'>
                    <h2>API</h2>
                    <h6><span className='text-danger'>import</span> <span className='text-success'>Modal </span> <span className='text-danger'>from</span> <span className='text-success'>'react-bootstrap/Modal'</span></h6>
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
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>Marks the NavItem with a matching <span className='text-danger'>eventKey</span> (or href <span className='text-danger'>if</span> present) as active.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>as</th>
                                <th className='font-weight-light'>elementType</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'>You can use a custom element type for this component.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>cardHeaderBsPrefix</th>
                                <th className='font-weight-light'>string</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'></th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>defaultActiveKey</th>
                                <th className='font-weight-light'>unknow</th>
                                <th className='font-weight-light text-danger'></th>
                                <th className='font-weight-light'></th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>fill</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>falseq</th>
                                <th className='font-weight-light'>Have all <span className='text-danger'>NavItems</span> proportionately fill all available width.</th>
                            </tr>
                            <tr>
                                <th className='font-weight-light'>justify</th>
                                <th className='font-weight-light'>boolean</th>
                                <th className='font-weight-light text-danger'>false</th>
                                <th className='font-weight-light'>Have all <span className='text-danger'>NavItems</span> evenly fill all available width.</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}