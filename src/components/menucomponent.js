import React, { Component } from 'react';
// eslint-disable-next-line 
import {CardImg,CardImgOverlay,Card,CardTitle,CardBody,CardText} from 'reactstrap';
import DishdetailComponent from './DishdetailComponent'; 

export default class Menu extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            selectedDish: null
        };
        this.onDishSelect = this.onDishSelect.bind(this);
    }
    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        });
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
             // eslint-disable-next-line
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
        //<h4 className="display-4">Comments</h4>
        //                 <ul className="list-unstyled">
        //                     {dish.comments.map((p) => {
        //                         return(<li>{p.comment}</li>);
        //                     })}
        //                 </ul>
    }
    renderDish(dish){
        
        if( dish != null )
        {
            return(
                        <div className="col-xs-12 col-md-5 m-1">
                            <DishdetailComponent dish={dish} />
                        </div>
                );
        }
        else
        {
            return(<div></div>);
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => {this.onDishSelect(dish)}}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}  
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {this.renderComments(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
