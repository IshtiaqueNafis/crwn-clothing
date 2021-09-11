import {applyMiddleware, createStore} from 'redux';
//region ****applyMiddleware****
/*
***applyMiddleware**
* helps catch middleware
***MiddleWare***
* catches action and passes them to reducer
 */
//endregion
import {logger} from 'redux-logger'; // logs the action.
import rootReducer from './root-reducer';

const middlewares = [logger];  // store expects a middlewares array.

const store = createStore(rootReducer, applyMiddleware(...middlewares));
//region **** const store = createStore(rootReducer, applyMiddleware(...middlewares)); ****
/*
***rootReducer***
* is where all the reducers are located such as store.
***applyMiddleware(...middlewares)***
* applyMiddleware --> helps with creating middleware.
* ...middlewares --> middleware is passed caused there could more than one argument.
 */
//endregion
console.log(store)

export default store;


