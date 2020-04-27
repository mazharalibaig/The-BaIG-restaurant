import React, { Component } from 'react';
//import { Media } from 'reactstrap';
// eslint-disable-next-line 
import {CardImg,CardImgOverlay,Card,CardTitle,CardBody,CardText} from 'reactstrap';

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
        console.log("Selected");
        this.setState({
            selectedDish: dish
        });
    }
    renderDish(dish){
        
        if( dish != null )
        {
            return(
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                );
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
                </div>
            </div>
        );
    }
}
