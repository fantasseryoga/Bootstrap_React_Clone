import React from 'react'
import {Jumbotron, Button, Card} from 'react-bootstrap'

export default class Terming extends React.Component{
    render(){
        return(
            <>
                <div className='InfoMain'>
                    <div className='Section' id='themingandcustomizingstyles'>
                        <h2>Theming and customizing styles</h2>
                        <h3>
                            Generally, if you stick to the Bootstrap defined classes and variants, there isn't anything you need to do to use a custom theme with React-Bootstrap.
                            It just works. But we also make coloring outside the lines easy to do.
                        </h3>
                    </div>
                    <div className='Section' id='newvariantsandsizes'>
                        <h2>New variants and sizes</h2>
                        <h3>
                            Custom variants and sizes should follow the pattern of the default bootstrap variants, and define css classes matching:
                            <span className='text-danger'> component-*</span>. React bootstrap builds the component <span className='text-danger'>classNames</span> in a consistent way that you can rely on.
                            For instance this custom Button.
                        </h3>
                        <Jumbotron fluid>
                            <Button varian='primary' className='ml-5 mb-5' size='lg'>Flat Button</Button>
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
                        </Jumbotron>
                    </div>
                    <div className='Section' id='prefixingcomponents'>
                        <h2>Prefixing components</h2>
                        <h6>
                            In some cases you may need to change the base class "prefix" of one or more Components.
                            You can control how a Component prefixes its classes locally by changing the <span className='text-danger'>bsPrefix</span> prop.
                            Or globally via the <span className='text-danger'>ThemeProvider</span> Component.
                        </h6>
                        <Card border='warning' className='mt-5'>
                            <Card.Header>
                                <Card.Title>Changing prefixes is an escape hatch and generally shouldn't be used.</Card.Title>
                            </Card.Header>
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}