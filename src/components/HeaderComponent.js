import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav,NavbarToggler,Form,FormGroup,Collapse,NavItem, Jumbotron,Modal, ModalBody, ModalHeader, Button, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            isOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }   

    toggleNav(){

        this.setState({
            isOpen: !this.state.isModalOpen
        });

    }

    toggleModal(){

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleLogin(event){

        this.toggleModal();
        alert(` Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked} `);
        event.preventDefault();

    }

    render() {
        return (
            <>
                <Navbar dark expand="md" >
                    <Nav className="ml-5">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" alt="BaIG Restaurant" > 
                            
                            <img src='assets/images/logo.png' width="70" height="50" alt="Your Logo Here" />
                        </NavbarBrand>
                    </Nav>
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
                    <Nav className="ml-auto navbar">
                        <NavItem>
                            <Button className="btn btn-primary" onClick={this.toggleModal}> <span className="fa fa-sign-in fa-lg"></span>Login</Button>
                        </NavItem>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" placeholder="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" placeholder="password" innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />
                                    Remember Me?
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
