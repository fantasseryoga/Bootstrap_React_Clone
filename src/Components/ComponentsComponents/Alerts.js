import React from 'react'
import {Jumbotron, Card} from 'react-bootstrap'

export default class Alerts extends React.Component{
    render(){
        return(
            <div className='InfoMain'>
                <div className='Section' id='alerts'>
                    <h2>Alerts</h2>
                    <h3>
                        Provide contextual feedback messages for typical user
                         actions with the handful of available and flexible alert messages.
                    </h3>
                </div>
                <div className='Section' id='examples'>
                    <h2>Examples</h2>
                    <h6>
                        Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight
                        which will not be conveyed to users of assistive technologies – such as screen readers.
                        Ensure that information denoted by the color is either obvious from the content itself.
                        Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight
                        which will not be conveyed to users of assistive technologies – such as screen readers.    
                        <span className='text-danger'> variants</span>.
                    </h6>
                    <Jumbotron>
                        {   [
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'dark',
                            ].map(variant => (
                            <div className={'bg-' + variant + ' alertFake'} key={variant}>
                                {'This is ' + variant + ' alert, check it out!'}
                            </div>
                            ))
                        }
                        <div className='Campil mt-5'>
                            <span className='blue'>[</span><br/>
                            <span className='red'>'primary',<br/>
                                'secondary',<br/>
                                'success',<br/>
                                'danger',<br/>
                                'warning',<br/>
                                'info',<br/>
                                'light',<br/>
                                'dark',<br/>
                            </span>
                            <span className='blue'>].map((</span>variant, idx<span className='blue'>)</span> <span className='red'>=&gt;</span> <span className='blue'>(</span><br/>
                            <span className='purple'>   &lt;Alert <span className='green'>key=</span>{'{idx}'} <span className='green'>variant=</span>{'{variant}'}&gt;<br/></span>
                            <span>         This is a <span className='blue'>{'{'}</span>variant<span className='blue'>{'}'}</span> alert—check it out!<br/></span>
                            <span className='purple'>   &lt;/Alert&gt;<br/></span>
                            <span className='blue'>));</span>
                        </div>
                        <Card border='warning' className='mt-5'>
                            <Card.Header>
                                <Card.Title>Conveying meaning to assistive technologies</Card.Title>
                                <Card.Text>
                                    Using color to add meaning only provides a visual indication, 
                                    which will not be conveyed to users of assistive technologies – such as screen readers.
                                     Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text),
                                      or is included through alternative means, such as additional text hidden with the <span className='text-danger'>.sr-only</span> class.
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}