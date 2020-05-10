import React, { Component } from 'react';
import {Breadcrumb,BreadcrumbItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FormGroup, Label, Input, Button ,FormFeedback} from 'reactstrap';
import {Form,Col} from 'react-bootstrap';

class Contact extends Component{
    
    constructor(props)
    {
        super(props);

        this.state = 
        {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }

    handleBlur = (field) => (evt) =>
    {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(firstname,lastname,telnum,email)
    {
        const errors = {

            firstname: '',
            lastname: '',
            telnum: '',
            email: ''

        }

        if(this.state.touched.firstname && firstname.length<3)
            errors.firstname = "First name should be longer than three characters and not X Æ A-12"; 
        else if( firstname.length>10 )
            errors.firstname = "First name should be lesser than 10 characters";

        if(this.state.touched.lastname && lastname.length<3)
            errors.lastname = "First name should be longer than three characters"; 
        else if( lastname.length>10 )
            errors.lastname = "First name should be lesser than 10 characters";

        const reg = /^\d+$/;

        if(this.state.telnum && !reg.test(telnum))
            errors.telnum = "Telephone number must contain only numbers";
        if(this.state.email && email.split('').filter( x => x === '@').length !== 1)
            errors.email = "Email must contain @";

        return errors;

    }

    handleInputChange(event)
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]:value})
    }

    handleSubmit(event)
    {
        console.log("Current state"+ JSON.stringify(this.state));
        alert("Current state"+ JSON.stringify(this.state));
        event.preventDefault();
        
    }
    render()
    {

       const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            {/* eslint-disable-next-line */}
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            {/* eslint-disable-next-line */}
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            {/* eslint-disable-next-line */}
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input 
                                    type="text" 
                                    onBlur={this.handleBlur('firstname')} 
                                    onChange={this.handleInputChange} 
                                    valid={errors.firstname === ''} 
                                    invalid={errors.firstname !== ''} 
                                    id="firstname" name="firstname" 
                                    placeholder="First Name" 
                                    value={this.state.firstname} 
                                    />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input 
                                    type="text" 
                                    onBlur={this.handleBlur('lastname')} 
                                    onChange={this.handleInputChange} 
                                    invalid={errors.lastname !== ''} 
                                    valid={errors.lastname === ''} 
                                    id="lastname" 
                                    name="lastname" 
                                    placeholder="Last Name" 
                                    value={this.state.lastname}
                                     />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Tel Number</Label>
                                <Col md={10}>
                                    <Input 
                                    type="tel" 
                                    id="telnum"
                                    onBlur={this.handleBlur('telnum')} 
                                    onChange={this.handleInputChange} 
                                    invalid={errors.telnum !== ''} 
                                    valid={errors.telnum === ''} 
                                    name="telnum" 
                                    placeholder="Tel. number" 
                                    value={this.state.telnum} 
                                    />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input 
                                    type="email" 
                                    id="email" 
                                    onBlur={this.handleBlur('email')} 
                                    onChange={this.handleInputChange} 
                                    invalid={errors.email !== ''} 
                                    valid={errors.email === ''} 
                                    name="email" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input 
                                            type="checkbox" 
                                            name="agree" 
                                            onChange={this.handleInputChange}  
                                            checked={this.state.agree} 
                                            />
                                            {' '}
                                            <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input 
                                    type="select" 
                                    name="contactType" 
                                    onChange={this.handleInputChange} 
                                    value={this.state.contactType}
                                    >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input 
                                    type="textarea" 
                                    id="message" 
                                    onChange={this.handleInputChange} 
                                    name="message" 
                                    rows="12" 
                                    placeholder="Your Feedback Here" 
                                    value={this.state.message} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;