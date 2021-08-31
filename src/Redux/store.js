import { createStore, combineReducers, applyMiddleware } from "redux";
import details from './DetailsStore'

// import {
//     getAllPublicVideos
// } from './middleware/crud';

const state = {
    detail:{
        details:details.details
    }

}

const reducer = combineReducers({ details});
const store = createStore(reducer
    ,
    //  composeWithDevTools(
    // applyMiddleware(
//פונקציות ממידלוואר
     
// ))
);
window.store = store;
export default store;

// store.dispatch({ type: 'FIREBASE_INIT' });//קורה כל פעם שנטען מחדש