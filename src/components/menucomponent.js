import React from 'react';
// eslint-disable-next-line 
import {CardImg,CardImgOverlay,Card,CardTitle,CardBody,CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import DishdetailComponent from './DishdetailComponent';

 function RenderMenuItem({dish})
    {
        
        return(
            <Link to={`/menu/${dish.id}`}>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>                
                </Card>
            </Link>

        );
    }
    const Menu = (props) => {
        
        const menu = props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish = {dish} onClick={props.onClick}/>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}  
                </div>
            </div>
        );
    }
export default Menu;