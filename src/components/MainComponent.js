import React,{Component} from 'react';
// eslint-disable-next-line
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './menucomponent';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent'; 


export default class Main extends Component {
  constructor(props){
    
    super(props);
    
    this.state={
      dishes: DISHES,
      selectedDish: null
    }

  }
    onDishSelect(dishID){
    this.setState({
        selectedDish: dishID
    })};

    renderComments(dishsel){
        
        if( dishsel != null )
        {
            console.log("Comments");
            console.log(dishsel);
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
                          <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                      </div>
              );
      }
      else
      {
          return(<div></div>);
      }
  }



  render() {
    return (
      <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">BaIG RESTAURANT</NavbarBrand>
            </div>
          </Navbar>
            <Menu dishes={this.state.dishes} onClick = {(dishID) => {this.onDishSelect(dishID)}}/>
          <div className="container">
              <div className="row">
                {this.renderDish(this.state.selectedDish)}
                {this.renderComments(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])}
              </div>
          </div>
      </div>
    );
  }
}
