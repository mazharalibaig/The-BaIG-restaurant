import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import {LoadingComponent} from './LoadingComponent';

function Home (props){

    function RenderCard({item, isLoading , errMess}){

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
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        }

    }
    if(props.dish!=null)
    {
        
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
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard 
                        item={props.leader}
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} 
                        />
                    </div>
                </div>
            </div>
    
        );
    }
    else 
    return <div></div>;
}

export default Home;