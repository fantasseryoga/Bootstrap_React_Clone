import React from 'react'
import { Nav } from 'react-bootstrap'

export default class Right extends React.Component{
    constructor(props){
        super(props)    
    }
    render(){
        let column = []

        this.props.headers.forEach(header => (
            column.push(<Nav.Link href={'#' + header.toLowerCase().replace(/\s+/g, '')} className='text-dark'>{header}</Nav.Link>)
        ))
        return(
            <Nav className='flex-column RightNavigation fixed-top'>
                {column}
            </Nav>
        )
    }
}