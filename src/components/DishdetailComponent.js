import React from 'react';
import {CardImg,Card,CardTitle,CardBody,CardText} from 'reactstrap';
// import {Link} from 'react-router-dom';
// import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';

    const DishdetailComponent = (props) => {
        if(props.dish!=null){
            return (
                <Card>
                    <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>
                                {props.dish.name}
                            </CardTitle>
                            <CardText>
                                {props.dish.description}
                            </CardText>
                        </CardBody>
                </Card>
                );
        }
        else
        return <div></div>;    
    }

export default DishdetailComponent;