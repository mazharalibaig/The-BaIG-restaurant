import { combineReducers, createStore, applyMiddleware } from 'redux';
import {Dishes} from './dishes.js';
import {Comments} from './comments.js';
import {Leaders} from './leaders.js';
import {Promotions} from './promotions.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => 
{
    const store = createStore(
        
        combineReducers(
            {

                dishes: Dishes,
                comments: Comments,
                promotions: Promotions,
                leaders: Leaders
        
            }),applyMiddleware(thunk,logger) 

    );

    return store;
}


