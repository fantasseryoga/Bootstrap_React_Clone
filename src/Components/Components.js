import React from 'react'
import Search from './ComponentsComponents/Search'
import { BrowserRouter,Route,Switch, Router } from 'react-router-dom'
import { Col, Row, Container} from 'react-bootstrap'
import Alerts from './ComponentsComponents/Alerts'
import Acordion from './ComponentsComponents/Acordion'
import Buttons from './ComponentsComponents/Buttons'
import Forms from './ComponentsComponents/Forms'
import Jumbotrons from './ComponentsComponents/Jumbotrons'
import Modals from './ComponentsComponents/Modals'
import Navs from './ComponentsComponents/Navs'
import Tabs from './ComponentsComponents/Tabses'
import Right from './ComponentsComponents/Right'

const components = [
    'Alerts',
    'Acordion',
    'Buttons',
    'Forms',
    'Jumbotrons',
    'Modal',
    'Navs',
    'Tabs',
]

const alertsHeaders = [
    'Alerts',
    'Examples'
]

const acordionHeaders = [
    'Accordion',
    'Examples',
    'Basic Example',
    'API'

]

const buttonsHeaders = [
    'Buttons',
    'Examples',
    'Outline Buttons',
    'Sizes',
    'API'
]

const formsHeaders = [
    'Forms',
    'API'
]

const jumbotronsHeaders = [
    'Jumbotron',
    'API'
]

const modalsHeaders = [
    'Modals',
    'Overview',
    'Example',
    'Static Markup',
    'Live demo',
    'API'
]

const navsHeaders = [
    'Base Nav',
    'API'
]

const tabsHeaders = [
    'Tabbed components',
    'Examples',
    'Dropdowns?',
    'API'
]

export default class Components extends React.Component{
    render(){
        return(
            <>  
                <Container fluid>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <BrowserRouter>
                                <Switch>
                                    <Route path='/components/alerts' component={Alerts}/>
                                    <Route path='/components/acordion' component={Acordion}/>
                                    <Route path='/components/buttons' component={Buttons}/>
                                    <Route path='/components/forms' component={Forms}/>
                                    <Route path='/components/jumbotrons' component={Jumbotrons}/>
                                    <Route path='/components/modal' component={Modals}/>
                                    <Route path='/components/navs' component={Navs}/>
                                    <Route path='/components/tabs' component={Tabs}/>
                                </Switch>
                            </BrowserRouter>
                        </Col>
                        <Col sm={2}>
                            <BrowserRouter>
                                <Switch>
                                    <Route path='/components/alerts'>
                                        <Right headers={alertsHeaders}/>
                                    </Route>
                                    <Route path='/components/acordion'>
                                        <Right headers={acordionHeaders}/>
                                    </Route>
                                    <Route path='/components/buttons'>
                                        <Right headers = {buttonsHeaders}/>
                                    </Route>
                                    <Route path='/components/forms'>
                                        <Right headers = {formsHeaders}/>
                                    </Route>
                                    <Route path='/components/jumbotrons'>
                                        <Right headers = {jumbotronsHeaders}/>
                                    </Route>
                                    <Route path='/components/modal'>
                                        <Right headers = {modalsHeaders}/>
                                    </Route>
                                    <Route path='/components/navs'>
                                        <Right headers = {navsHeaders}/>
                                    </Route>
                                    <Route path='/components/tabs'>
                                        <Right headers = {tabsHeaders}/>
                                    </Route>
                                </Switch>
                            </BrowserRouter>
                        </Col>
                    </Row>
                </Container>
                <div className='fixed_div_2'>
                    <div className='GettingStarted_fixed_div fixed-bottom'>
                        <Search components={components}/>
                    </div>
                </div>
            </>
        )
    }
}