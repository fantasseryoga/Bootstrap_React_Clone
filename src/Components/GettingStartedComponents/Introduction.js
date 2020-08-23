import React from 'react'
import {Card} from 'react-bootstrap'

export default class Introduction extends React.Component{
    render(){
        return(
            <>
                <div className='InfoMain'>
                    <div className='Section' id='introduction'>
                        <h2>Introduction</h2>
                        <h3>Learn how to include React Bootstrap in your project</h3>
                    </div>
                    <div className='Section' id='installation'>
                        <h2>Installation</h2>
                        <h6>The best way to consume React-Bootstrap is via the npm package which you can install with 
                            <span className='text-danger'> npm</span> (or <span className='text-danger'>yarn</span> if you prefer).
                            <br/><br/>
                            If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, 
                            it may be helpful to install <span className='text-primary'>vanilla Bootstrap</span> as well.
                        </h6>
                        <div className='Campil'>
                            npm install react-bootstrap bootstrap
                        </div>
                    </div>
                    <div className='Section' id='importingcomponents'>
                        <h2>Importing Components</h2>
                        <h6>
                            You should import individual components like: <span className='text-danger'>react-bootstrap/Button </span>
                            rather than the entire library. Doing so pulls in only the specific components that you use,
                            which can significantly reduce the amount of code you end up sending to the client.
                        </h6>
                        <div className='Campil'>
                            <span className='purple'>import</span> Button <span className='purple'>from </span> 
                            <span className='green'>'react-bootstrap/Button';</span><br/><br/>
                            <span className='grey'>// or less idealy<br/></span>
                            <span className='purple'>import</span> <span className='blue'>{'{ Button }'}</span> <span className='purple'>from</span> 
                            <span className='green'> 'react-bootstrap';</span>
                        </div>
                    </div>
                    <div className='Section' id='browserglobals'>
                        <h2>Browser globals</h2>
                        <h6>
                            We provide <span className='text-danger'>react-bootstrap.js </span>
                            and <span className='text-danger'>react-bootstrap.min.js</span> bundles with all components exported on the
                            <span className='text-danger'> window.ReactBootstrap</span> object. These bundles are available on 
                            <span className='text-primary'> unpkg</span>, as well as in the npm package.
                        </h6>
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
                            <span className='blue'>&gt;&lt;/</span><span className='red'>script</span><span className='blue'>&gt;</span>
                        </div>
                    </div>
                    <div className='Section' id='stylesheets'>
                        <h2>    </h2>
                        <h6>
                            Because React-Bootstrap doesn't depend on a very precise version of Bootstrap
                            , we don't ship with any included CSS. However, some stylesheet <b>is required</b> to use these components
                        </h6>
                    </div>
                    <div className='Section' id='css'>
                        <h2>CSS</h2>
                        <h6>
                            How and which Bootstrap styles you include is up to you
                            , but the simplest way is to include the latest styles from the CDN
                            . A little more information about the benefits of using a CDN can be found
                            <a href='https://www.w3schools.com/bootstrap/bootstrap_get_started.asp'> here</a>.
                        </h6>
                        <div className='Campil'>
                            <span className='blue'>&lt;</span><span className='red'>link</span><br/>
                            <span className='purple'>   rel</span><span className='blue'>="</span><span className='green'>stylesheet</span><span className='blue'>"</span><br/>
                            <span className='purple'>   href</span><span className='blue'>="</span><span className='green'>https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css</span><span className='blue'>"</span><br/>
                            <span className='purple'>   integrity</span><span className='blue'>="</span><span className='green'>sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk</span><span className='blue'>"</span><br/>
                            <span className='purple'>   crossorigin</span><span className='blue'>="</span><span className='green'>anonymous</span>
                            <span className='blue'>"<br/>/&gt;</span>
                        </div>
                    </div>
                    <div className='Section' id='sass'>
                        <h2>SASS</h2>
                        <h6>
                            In case you are using <b>Sass</b> the simplest way is to include the Bootstrap’s
                            source Sass files in your main Sass file and then require it on your <span className='text-danger'>src/index.js </span>
                            or <span className='text-danger'>App.js </span> file. This applies to a typical 
                            <span className='text-danger'> create-react-app</span> application in other 
                            use cases you might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.
                        </h6>
                    </div>
                    <div className='Section' id='customizebootstrap'>
                        <h2>Customize Bootstrap</h2>
                        <h6>
                            If you wish to customize the Bootstrap theme or any Bootstrap variables you can create a custom Sass file:<br/>
                            <div className='Campil'>
                                <span className='grey'>/* The following block can be included in a custom.scss */</span><br/><br/>
                                <span className='grey'>/* make the customizations */</span><br/>
                                $theme-colors: <span className='blue'>(</span><br/>
                                <span className='green'>    "info":</span> tomato,<br/>
                                <span className='green'>    "danger":</span> teal<br/>
                                <span className='blue'>)"</span><br/><br/>
                                <span className='grey'>/* import bootstrap to set changes */</span><br/>
                                @<span className='purple'>import </span><span className='green'>"~bootstrap/scss/bootstrap";</span>
                            </div>
                            ... And import it on the main Sass file
                        </h6>
                    </div>
                    <div className='Section' id='themes'>
                        <h2>Themes</h2>
                        <h6>
                            React-Bootstrap is compatible with existing Bootstrap themes.
                            Just follow the installation instructions for your theme of choice.
                        </h6>
                        <Card border='danger' text='danger'>
                            <Card.Header>Watch Out!</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Because React-Bootstrap completely reimplements Bootstrap's JavaScript,
                                    it's not automatically compatible with themes that extend the default JavaScript behaviors.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border='warning' text='warning' className='mt-3'>
                            <Card.Header>Create React App</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    If you would like to add a custom theme on your app using Create React App,
                                    they have additional documentation for Create React App and Bootstrap here
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='Section' id='browsersupport'>
                        <h2>Browser support</h2>
                        <h6>
                            We aim to support all browsers supported by both <a className='text-primary'>React</a> and <a className='text-primary'>Bootstrap</a>.
                        </h6>
                    </div>
                </div>
            </>
        )
    }
}