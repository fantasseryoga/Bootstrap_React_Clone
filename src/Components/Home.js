import React from 'react'
import {Row,Col,Button, Container, CardDeck , Card} from 'react-bootstrap'

export default class Home extends React.Component{
    render(){
        return(
            <>
                <section className = 'Home_section_1'>
                    <Container>
                        <h1 className = 'text-white-50'>React Bootstrap</h1>
                        <h4 className = 'text-light'>The most popular front-end framework</h4>
                        <h4 className = 'text-light'><b>Rebuilt</b> for React</h4>
                        <Row>
                            <Col sm={4}>
                                <Button variant='outline-light' size='lg' className='btnCustom text-nowrap'>
                                    Get Started
                                </Button>
                            </Col>
                            <Col sm={8}>
                                <Button variant='outline-light' size='lg' className='btnCustom'>
                                    Components
                                </Button>                            
                            </Col>
                        </Row>
                        <p className='text-secondary'>Current version: 1.3.0</p>
                    </Container>
                </section>
                <section className='Home_section_2'>
                    <Container>
                            <CardDeck>
                                <Card>
                                    <Card.Title className='text-secondary'>Rebuilt with React</Card.Title>
                                    <Card.Text className='text-dark'>
                                        React-Bootstrap replaces the Bootstrap JavaScript. Each compone
                                        nt has been built from scratch a
                                        s a true React component, without unneeded dependencies like jQuery.
                                        <br/><br/>
                                        As one of the oldest React libraries
                                        , React-Bootstrap has evolved and grown alongside React, making it 
                                        an excellent choice as your UI foundation.
                                    </Card.Text>
                                </Card>
                                <Card>
                                <Card.Title className='text-secondary'>Bootstrap at its core</Card.Title>
                                    <Card.Text className='text-dark'>
                                        Built with compatibility in mind, we embrace our bootstrap core 
                                        and strive to be compatible with the world's largest UI ecosystem.
                                        <br/><br/>
                                        By relying entirely on the Bootstrap stylesheet, React-Bootstrap just 
                                        works with the thousands of Bootstrap themes you already love.
                                    </Card.Text>
                                </Card>
                                <Card>
                                <Card.Title className='text-secondary'>Accessible by default</Card.Title>
                                    <Card.Text className='text-dark'>
                                        The React component model gives us more control over form and
                                        function of each component.
                                        <br/><br/>
                                        Each component is implemented with accessibility in mind. 
                                        The result is a set of accessible-by-default components, over what is possible
                                         from plain Bootstrap.
                                    </Card.Text>
                                </Card>
                            </CardDeck>
                        </Container>
                </section>
            </>
        )
    }
}