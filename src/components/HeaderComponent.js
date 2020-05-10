import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav,NavbarToggler,Collapse,NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            isOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);

    }   

    toggleNav(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <>
                <Navbar dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" alt="BaIG Restaurant" > 
                            {/* eslint-disable-next-line */}
                            <img src='assets/images/logo.png' width="70" height="50" />
                        </NavbarBrand>
                    </div>
                    <Nav navbar>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                                </NavLink>
                            </NavItem>
                        </Collapse>
                    </Nav>
                </Navbar>
                <Jumbotron className="rang">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>BaIG RESTAURANT</h1>
                                <p>We make lip-smacking Hyderabadi food that will leave you licking your fingers</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
