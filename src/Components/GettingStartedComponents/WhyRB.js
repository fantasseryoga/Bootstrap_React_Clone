import React from 'react'
import {Card, Button, Jumbotron} from 'react-bootstrap'

export default class WhyRB extends React.Component{
    render(){
        return(
            <>
                <div className='InfoMain'>
                    <div className='Section' id='whyreact-bootstrap'>
                        <h2>Why React-Bootstrap?</h2>
                        <h6>
                            React-Bootstrap is a complete re-implementation of the Bootstrap components using React.
                            It has<b> no dependency on either</b> <span className='text-danger'>bootstrap.js</span><b> or jQuery.</b>
                            If you have React setup and React-Bootstrap installed, you have everything you need.
                            <br/><br/>
                            Methods and events using jQuery is done imperatively by directly manipulating the DOM.
                            In contrast, React uses updates to the state to update the virtual DOM.
                            In this way, React-Bootstrap provides a more reliable solution by incorporating Bootstrap
                            functionality into React's virtual DOM.
                            Below are a few examples of how React-Bootstrap components differ from Bootstrap.
                        </h6>
                    </div>
                    <div className='Section' id='asimplereactcomponent'>
                        <h2>A Simple React Component</h2>
                        <h6>
                        The CSS and details of Bootstrap components are rather opinionated and lengthy.
                        React-Bootstrap simplifies this by condensing the original Bootstrap into React-styled components.
                    </h6>
                    </div>
                    <div className='Section' id='bootstrap'>
                        <h2>Bootstrap</h2>
                        <div className='Campil'>
                            <span className='purple'>import</span> React <span className='purple'>from</span> <span className='green'>'react'</span><span className='blue'>;</span>
                            <br/><br/>
                            <span className='purple'>function</span> <span className='blue '>Example()  {'{'}<br/></span>
                            <span className='purple'>   return </span><span className='blue'>(<br/></span>
                                <span className='blue'>     &lt;</span><span className='red'>div</span> <span className='purple'>class</span><span className='blue'>="</span><span className='green'>alert alert-danger alert-dismissible fade show</span><span className='blue'>"</span> <span className='purple'>role</span><span className='blue'>="</span><span className='green'>alert</span><span className='blue'>"&gt;</span><br/>
                                <span className='blue'>         &lt;</span><span className='red'>strong</span><span className='blue'>&gt;</span>Oh snap! You got an error!<span className='blue'>&lt;</span><span className='red'>/strong</span><span className='blue'>&gt;</span><br/>
                                <span className='blue'>         &lt;</span><span className='red'>p</span><span className='blue'>&gt;</span><br/>
                                <span>              </span>Change this and that and try again.<br/>
                                <span className='blue'>         &lt;</span><span className='red'>/p</span><span className='blue'>&gt;</span><br/>
                                <span className='blue'>         &lt;</span><span className='red'>button</span> <span className='purple'>type</span><span className='blue'>="</span><span className='green'>button</span><span className='blue'>"</span> <span className='purple'>class</span><span className='blue'>="</span><span className='green'>close</span><span className='blue'>" <span className='purple'>data-dismiss</span><span className='blue'>="</span><span className='green'>alert</span><span className='blue'>"</span><span className='purple'> aria-label</span><span className='blue'>="</span><span className='green'>Close</span><span className='blue'>"</span>&gt;</span><br/>                     
                                <span className='blue'>             &lt;</span><span className='red'>span</span> <span className='purple'>aria-hiden</span><span className='blue'>="</span><span className='green'>true</span><span className='blue'>"&gt;</span>times;<span className='blue'>&lt;/</span><span className='red'>span</span><span className='blue'>&gt;</span><br/>
                                <span className='blue'>         &lt;</span><span className='red'>/button</span><span className='blue'>&gt;</span><br/>
                                <span className='blue'>     &lt;</span><span className='red'>/div</span><span className='blue'>&gt;</span><br/>
                                <span className='blue'>    )</span><br/>
                            <span className='blue'>{'}'}</span>
                        </div>
                    </div>
                    <div className='Section' id='bootstrapwithstate'>
                        <h2>Bootstrap with state</h2>
                        <h66>
                        Since React-Bootstrap is built with React Javascript, state can be passed within React-Bootstrap components as a prop.
                         It also makes it easier to manage the state as updates are made using React’s
                          state instead of directly manipulating the state of the DOM.
                         This also gives a lot of flexibility when creating more complex components.
                        </h66>
                    </div>
                    <div className='Section' id='react-bootstrap'>
                        <h2>React-bootstrap</h2>
                        <Jumbotron>
                            <Card border='success'>
                                <Card.Header>
                                    <Card.Title className='text-success'>How's it going?!</Card.Title>
                                    <Card.Text className='text-success'>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                                        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum
                                    </Card.Text>
                                </Card.Header>
                                <Card.Footer>
                                    <Button variant='outline-success' className='ml-auto'>Close me y'all!</Button>
                                </Card.Footer>
                            </Card>
                        </Jumbotron>
                        <div className='Campil'>
                            <span className='blue'>&lt;</span><span className='red'>script</span> <span className='purple'>src</span>
                            <span className='blue'>="</span>
                            <span className='green'>https://unpkg.com/react/umd/react.production.min.js</span><span className='blue'>"</span> 
                            <span className='purple'>crossorigin</span>
                            <span className='blue'>&gt;&lt;/</span><span className='red'>script</span><span className='blue'>&gt;</span>
                            <br/><br/>
                            <span className='blue'>&lt;</span><span className='red'>script<br/></span> <span className='purple'>   src</span>
                            <span className='blue'>="</span>
                            <span className='green'>https://unpkg.com/react/umd/react.production.min.js</span><span className='blue'>"<br/></span> 
                            <span className='purple'>    crossorigin</span>
                            <span className='blue'>&gt;&lt;/</span><span className='red'>script</span><span className='blue'>&gt;</span><br/>
                            <span className='blue'>&lt;</span><span className='red'>link</span><br/>
                            <span className='purple'>   rel</span><span className='blue'>="</span><span className='green'>stylesheet</span><span className='blue'>"</span><br/>
                            <span className='purple'>   href</span><span className='blue'>="</span><span className='green'>https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css</span><span className='blue'>"</span><br/>
                            <span className='purple'>   integrity</span><span className='blue'>="</span><span className='green'>sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk</span><span className='blue'>"</span><br/>
                            <span className='purple'>   crossorigin</span><span className='blue'>="</span><span className='green'>anonymous</span>
                            <span className='blue'>"<br/>/&gt;</span>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}