import React,{Component} from 'react';
// eslint-disable-next-line
import Menu from './menucomponent';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

    const mapStateToProps = (state) => {

        return{

            dishes: state.dishes,
            leaders: state.leaders,
            comments: state.comments,
            promotions: state.promotions

        }

    }



 class Main extends Component {

  // eslint-disable-next-line
  constructor(props){

    super(props);

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
                          <DishdetailComponent dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />
                      </div>
              );
      }
      else
      {
          return(<div></div>);
      }
  }


  render() {

    const HomePage = () => {
      return(

        <div>
          {/* {console.log(props.promotions.filter((promo) => promo.featured)[0])} */}
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((l) => l.featured)[0]}
          />
        </div>

      );
    }

    // const DishWithId = ({ match }) => {
    //   return (
    //     <DishDetail
    //       dish={
    //         this.props.dishes.filter(
    //           dish => dish.id === parseInt(match.params.dishId, 10)
    //         )[0]
    //       }
    //       comments={this.props.comments.filter(
    //         comment => comment.dishId === parseInt(match.params.dishId, 10)
    //       )}
    //     />
    //   );
    // };

    const DishWithID = ({match}) => {

        return(
          <DishdetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishID,10))[0]}
                               comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishID,10))}
          />
        );

    }

    return (
      <div className="App">
            <Header />
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                <Route path="/menu/:dishID" component={DishWithID}/>
                <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/home" />
              </Switch>
            <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
