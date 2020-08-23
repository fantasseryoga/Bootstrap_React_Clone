import React from 'react'
import {Nav, Navbar,NavDropdown } from 'react-bootstrap'
import logo from '../img/rb-logo.svg'
import github from '../img/github.png'
import discord from '../img/discord.png'

export default class Header extends React.Component{
    render(){
        return(
            <>
                <Navbar variant='dark' className='headerBG fixed-top' expand='md'>
                    <Navbar.Brand>
                        <img 
                            src={logo}
                            width={30}
                            height={30}
                            alt='logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='HeaderNav_1'>
                        <Nav.Link className='navCustom'href='/'>Home</Nav.Link>
                        <Nav.Link className='navCustom' href='/start/introduction'>Getting started</Nav.Link>
                        <Nav.Link className='navCustom' href='/components/alerts'>Components</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto HeaderNav_1'>
                        <NavDropdown className='navCustom' title='v1.3.0 (Bootstrap 4.5)'>
                            <NavDropdown.Item>v1.3.0 (Bootstrap 4.5)</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='navCustom' href="https://github.com/">
                            <img
                                className='invert'
                                src={github}
                                height={30}
                                width={30} 
                                alt='gitHub'
                            />
                        </Nav.Link>
                        <Nav.Link className='navCustom' href='https://diskord.net/news'>
                            <img 
                                alt='Discord'
                                className='invert'
                                src={discord}                         
                                width={30}
                                height={30}
                            />
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}