import { createStore, combineReducers, applyMiddleware } from 'redux';
import { countReducer } from './countReducer';


const rootReducer = combineReducers({
   count: countReducer,
})


export const store = createStore(rootReducer)