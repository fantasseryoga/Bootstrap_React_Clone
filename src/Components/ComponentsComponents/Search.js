import React from 'react'
import {Nav, Form} from 'react-bootstrap'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }
    handleSearchChange(e){
        this.props.onSearchChange(e.target.value)
    }
    render(){
        return(
            <form>
                <Form.Control
                    className='formFilter' 
                    type='text' 
                    onChange={this.handleSearchChange} 
                    value={this.props.textFilter}
                    placeholder='Search...'
                />
            </form>
        )
    }
}

class ComponentSingle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Nav.Link className='text-dark font-weight-light' href={this.props.name.toLowerCase()}>{this.props.name}</Nav.Link>
        )
    }
}

class Components extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let filteredComponents = []
        this.props.components.forEach(component => {                
            if(component.toLowerCase().indexOf(this.props.textFilter.toLowerCase().replace(/\s+/g, ' ').trim()) === -1){
                return
            }
            else{
                filteredComponents.push(<ComponentSingle name={component} />)
            }
        })
        return(
            <Nav className='flex-column'>
                {filteredComponents}
                <h5>{filteredComponents.length === 0 ? 'Nothing Here' : ''}</h5>
            </Nav>
        )
    }
}

export default class Search extends React.Component{
    constructor(props){
        super(props)
        const components = this.props.components
        this.state = {filter : ''}
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }
    handleSearchChange(filterText){
        this.setState({
            filter: filterText
        })
    }
    render(){
        return(
            <>
                <SearchBar
                    onSearchChange={this.handleSearchChange}
                    textFilter={this.filter}
                />
                <h5>Components</h5>
                <Components 
                    components={this.props.components}
                    textFilter={this.state.filter}
                />
            </>
        )
    }
}