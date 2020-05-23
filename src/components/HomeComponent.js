import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import {LoadingComponent} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function Home (props){

    function RenderCard({item, isLoading , errMess}){

        // console.log("item");
        // console.log(item);
        // console.log("isLoading");
        // console.log(isLoading);
        // console.log("errMess");
        // console.log(errMess);
        
        
        
        if(isLoading)
        {
            return(

                <div className="container">
                    <div className="row">
                        <LoadingComponent />
                    </div>
                </div>

            );
        }
        else if(errMess)
        {
            return (

                <div className="container">
                    <div className="row">
                        <p>{errMess}</p>
                    </div>
                </div>

            );
        }
        else
        {
            return(
                <Card>
                    <CardImg src={ baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        }

    }
        return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard 
                            item={props.dish}
                            isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess} 
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard 
                        item={props.promotion}
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess}
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard 
                        item={props.leader}
                        />
                    </div>
                </div>
            </div>
    
        );
    }

export default Home;