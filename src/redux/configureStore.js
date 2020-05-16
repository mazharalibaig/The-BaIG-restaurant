import { combineReducers, createStore } from 'redux';
import {Dishes} from './dishes.js';
import {Comments} from './comments.js';
import {Leaders} from './leaders.js';
import {Promotions} from './promotions.js';


export const ConfigureStore = () => 
{
    const store = createStore(combineReducers({

        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders
        
    }))

    return store;
}


