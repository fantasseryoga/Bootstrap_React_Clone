import React from 'react'

export default class Support extends React.Component{
    render(){
        return(
            <>
                <div className='InfoMain'>
                    <div className='Section' id='gettinghelp'>
                        <h2>Getting help</h2>
                        <h3>
                            Stay up to date on the development of React-Bootstrap<br/>
                             and reach out to the community with these helpful resources.
                        </h3>
                    </div>
                    <div className='Section' id='stackoverflow'>
                        <h2>Stack Overflow</h2>
                        <h6>
                            <span className='text-primary'><a href='http://stackoverflow.com/questions/ask'>Ask questions </a></span>
                            about specific problems you have faced,<br/>including details about what exactly you are trying to do.<br/>
                            Make sure you tag your question with <span className='text-danger'>react-bootstrap.</span> <br/>You can also read through<br/>
                            <span className='text-primary'><a href='http://stackoverflow.com/questions/tagged/react-bootstrap'> existing React-Bootstrap questions.</a></span> 
                        </h6>
                    </div>
                    <div className='Section' id='chatrooms'>
                        <h2>Chat rooms</h2>
                        <h6>
                            Discuss questions in the <span className='text-danger'>#react-bootstrap </span>
                            channel on the <span className='text-primary'><a href='http://www.reactiflux.com/'>Reactiflux Discord.</a></span>
                        </h6>
                    </div>
                    <div className='Section' id='githubissues'>
                        <h2>GitHub issues</h2>
                        <h6>
                        The issue tracker is the preferred channel for bug reports,<br/> features requests and submitting pull requests.
                        See more about how we use issues in the<br/><span className='text-primary'><a href='https://github.com/react-bootstrap/react-bootstrap/blob/master/CONTRIBUTING.md#issues'>contribution guidelines.</a></span>
                        </h6>
                    </div>
                </div>
            </>
        )
    }
}