import React, { Component } from 'react';
// eslint-disable-next-line 
import {CardImg,CardImgOverlay,Card,CardTitle,CardBody,CardText} from 'reactstrap';

export default class DishdetailComponent extends Component {

    render() {
        return (
            <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>
                            {this.props.dish.name}
                        </CardTitle>
                        <CardText>
                            {this.props.dish.description}
                        </CardText>
                    </CardBody>
            </Card>
            );
    }
}