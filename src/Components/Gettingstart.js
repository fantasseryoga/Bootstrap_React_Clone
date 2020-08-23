import React from 'react'
import {Nav, Row, Col,Container} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Introduction from './GettingStartedComponents/Introduction'
import WhyRB from './GettingStartedComponents/WhyRB'
import Terming from './GettingStartedComponents/Terming'
import Support from './GettingStartedComponents/Support'
import Right from './ComponentsComponents/Right'

const introductionHeaders = [
    'Introduction',
    'Importing Components',
    'Browser globals',
    'Stylesheets',
    'CSS',
    'SASS',
    'Customize Bootstrap',
    'Themes',
    'Browser support'
]

const whyRBHeaders = [
    'Why React-Bootstrap?',
    'A Simple React Component',
    'Bootstrap',
    'Bootstrap with state',
    'React-bootstrap',
]

const termingHeaders = [
    'Theming and customizing styles',
    'New variants and sizes',
    'Prefixing components'
]

const supportHeaders = [
    'Getting help',
    'Stack Overflow',
    'Chat rooms',
    'GitHub issues',
]

export default class Gettingstart extends React.Component{
    render(){
        return(
            <>  
                <div className='fixed_div_1'>
                    <div className='GettingStarted_fixed_div fixed-bottom'>
                        <h5>Getting Started</h5>
                        <Nav className='flex-column justify_spacebetween'>
                            <div className='GettingStart_column_1'>
                            <Nav.Link className='font-weight-light text-dark' href='/start/introduction'>Introduction</Nav.Link>
                            <Nav.Link className='font-weight-light text-dark' href='/start/whyRB'>Why React-Bootstrap</Nav.Link>
                            </div>
                            <div className='GettingStart_column_2'>
                            <Nav.Link className='font-weight-light text-dark' href='/start/terming'>Terming</Nav.Link>
                            <Nav.Link className='font-weight-light text-dark' href='/start/support'>Support</Nav.Link>
                            </div>
                        </Nav>
                    </div>
                </div>
                <Container fluid>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <BrowserRouter>
                                <Switch>
                                    <Route path = '/start/introduction' component = {Introduction}/>
                                    <Route path = '/start/whyRB' component = {WhyRB}/>
                                    <Route path = '/start/terming' component = {Terming}/>
                                    <Route path = '/start/support' component = {Support}/>
                                </Switch>
                            </BrowserRouter>
                        </Col>
                        <Col sm={2}>
                            <BrowserRouter>
                                    <Switch>
                                        <Route path = '/start/introduction'>
                                            <Right headers={introductionHeaders}/>
                                        </Route>
                                        <Route path = '/start/whyRB'>
                                            <Right headers={whyRBHeaders}/>
                                        </Route>
                                        <Route path = '/start/terming'>
                                            <Right headers={termingHeaders}/>
                                        </Route>
                                         
                                        <Route path = '/start/support'>
                                            <Right headers = {supportHeaders}/>
                                        </Route>
                                    </Switch>
                            </BrowserRouter>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}