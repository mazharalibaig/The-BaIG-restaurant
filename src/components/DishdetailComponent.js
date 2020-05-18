import React from "react";
import { Modal,ModalBody,Card,CardImg,Col,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem, Button, ModalHeader, Row, Label} from "reactstrap";
import { Link } from "react-router-dom";
import { Component } from 'react'
import { LocalForm, Control, Errors } from 'react-redux-form';
import { LoadingComponent} from './LoadingComponent';
const required = (val) => val&&val.length;
const maxlength = (len) => (val) => !(val) || (val.length<=len);
const minlength = (len) => (val) =>  val && (val.length>=len);


class CommentForm extends Component {

  constructor(props)
  {
    super(props);

    this.state={
      isOpen: false,
      isModalOpen: false
    }

    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  toggleOpen(){
    this.setState({
      isOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values)
    {
        console.log("Current state"+ JSON.stringify(values));
        this.toggleModal();
        this.props.addComment(this.props.dishID, values.rating,values.author,values.comment);
    }

  render() {
    return (
      <div>
        <Button className="fa fa-pencil bg-primary" ariaHidden="true" onClick={this.toggleModal}> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} closeButton="true">
          <ModalHeader>Make A Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => {this.handleSubmit(values)}}>
              <Row className="form-group">
                <Label forHtml="rating" md={3}>Rating :</Label>
                <Col md={12}>
                  <Control.select model=".rating" name="rating" className="form-control" validators={{required}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".rating"
                    show="touched"
                    messages={{required: ' Please select a rating between 1 - 5 '}}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label forHtml="author" md={3}>Your Name : </Label>
                <Col md={12}>
                  <Control.text model=".author" name="author" className="form-control" validators={{required,maxlength:maxlength(15),minlength:minlength(3)}} />
                  <Errors 
                    model=".author"
                    show="touched"
                    className="text-danger"
                    messages={{required: "Please enter your name",maxlength: "Name must not be lesser than 15 characters",minlength: "Name must be longer than 3 characters"}}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label forHtml="comment" md={3}>Comment : </Label>
                <Col md={12}>
                  <Control.textarea model=".comment" rows="10" name="comment" className="form-control" validators={{required,maxlength:maxlength(200),minlength: minlength(3)}} />
                  <Errors 
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{required: "Type your comment here",maxlength: "Comment must not be lesser than 200 characters",minlength: "Comment must be longer than 3 characters"}}
                  />
                </Col>
              </Row>
              <br />
              <Row className="form-group">
                <Col>
                  <Button type="submit" className="bg-primary"> Submit Comment </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}


function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody> 
      </Card>
    </div>
  );
}

function RenderComments({ comments,addComment,dishID }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map(comment => (
          <ul key={comment.id} className="list-unstyled">
            <li className="mb-2">{comment.comment}</li>
            <li>
              -- {comment.author}{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        ))}
        <CommentForm 
          addComment={addComment}
          dishID={dishID}
        />
      </div>
    );
  } else return <div />;
}

const DishDetailComponent = (props) => {

  if(props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );
  }
  else if(props.errMess)
  {
      return(

        <div className="container">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>

      );
  }
  else if(props.dish != null)
  {
        return(<div className="container">
          <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments 
              comments={props.comments}
              addComment = {props.addComment}
              dishID = {props.dish.id}
            />
          </div>
        </div>);
  } 
  else
  {
    return(
      <div><p>Failing</p></div>
    );
  }
};

export default DishDetailComponent;
