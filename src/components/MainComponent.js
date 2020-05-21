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
import {addComment,fetchDishes,fetchPromos,fetchComments} from '../redux/ActionCreators';
import {actions} from "react-redux-form";

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
          addComment: (dishID,rating,author,comment) => dispatch(addComment(dishID,rating,author,comment)),
          fetchDishes: () => {dispatch(fetchDishes())},
          resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
          fetchComments: () => {dispatch(fetchComments())},
          fetchPromos: () => {dispatch(fetchPromos())}

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
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
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
              addComment={this.props.addComment}
          />
        );
    }

    return(
      <div className="App">
            <Header />
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                <Route path="/menu/:dishID" component={DishWithID}/>
                <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
                <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={ this.props.resetFeedbackForm } />} />
                <Redirect to="/home" />
              </Switch>
            <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
