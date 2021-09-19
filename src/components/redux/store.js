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
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk'

const middlewares = [logger, thunk];  // store expects a middlewares array.

const store = createStore(rootReducer, applyMiddleware(...middlewares));
//region **** const store = createStore(rootReducer, applyMiddleware(...middlewares)); ****
/*
***rootReducer***
* is where all the reducers are located such as store.
***applyMiddleware(...middlewares)***
* applyMiddleware --> helps with creating middleware. returns an array with middle ware.
* ...middlewares --> middleware is passed caused there could more than one argument.
 */
//endregion
export const persistor = persistStore(store); // persistaed version of the store. crate new prodiver that wrapping the application, created presisted version of the store.

export default store;


