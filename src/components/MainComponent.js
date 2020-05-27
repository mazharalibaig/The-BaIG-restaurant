import React,{Component} from 'react';
import Menu from './menucomponent';
import DishDetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchDishes,fetchPromos,fetchComments, postComment,fetchLeaders,postFeedback } from '../redux/ActionCreators';
import {actions} from "react-redux-form";
import {TransitionGroup,CSSTransition} from 'react-transition-group';

    const mapStateToProps = (state) => {
        return{

            dishes: state.dishes,
            leaders: state.leaders,
            comments: state.comments,
            promotions: state.promotions

        }
    }
    const mapDispatchToProps = (dispatch) => 
    (
      {
          postFeedback: (firstname,lastname,telnum,email,agree,contactType,messagedate) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,messagedate)),
          postComment: (dishID,rating,author,comment) => dispatch(postComment(dishID,rating,author,comment)),
          fetchDishes: () => {dispatch(fetchDishes())},
          resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
          fetchComments: () => {dispatch(fetchComments())},
          fetchPromos: () => {dispatch(fetchPromos())},
          fetchLeaders: () => {dispatch(fetchLeaders())}
      }
    );
 class Main extends Component {

    // eslint-disable-next-line
    constructor(props)
    {
        super(props);
    }

    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
    }

    renderComments(dishsel){

        if( dishsel != null )
        {
            const items = dishsel.comments.map((p,index) => {
            return(
                    <li key={index}>
                        <p>{p.comment}</p>
                        <p>-- {p.author} , {p.date}</p>
                    </li>);
            }
            );
            return(
                <div className="col-xs-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {items}
                    </ul>
                </div>
            );
        }
        else
        {
            return(<div></div>);
        }

    }
  renderDish(dish){

      if( dish != null )
      {
          return(
                      <div className="col-xs-12 col-md-5 m-1">
                          <DishDetailComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />
                      </div>
              );
      }
      else
      {
          return(<div></div>);
      }
  }


  render(){
    const HomePage = () => {
      return(
        <div>
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}
          />
        </div>  
      );
    }

    const DishWithID = ({match}) => {
            
      return(
          <DishDetailComponent 
              dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishID,10))[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishID,10))}
              commentsErrMess={this.props.comments.errMess}
              postComment={this.props.postComment}
          />
        );
    }

    return(
      <div className="App">
            <Header />
              <TransitionGroup>
                <CSSTransition key = {this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                      <Route path="/home" component={HomePage} />
                      <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                      <Route path="/menu/:dishID" component={DishWithID}/>
                      <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
                      <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={ this.props.resetFeedbackForm } postFeedback={this.props.postFeedback}/>} />
                      <Redirect to="/home" />
                    </Switch>
                </CSSTransition>
              </TransitionGroup>
            <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
