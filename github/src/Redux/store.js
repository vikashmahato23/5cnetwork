
import {legacy_createStore as createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from 'redux-thunk';
import { FollowerReducer } from "./Followers/reducer";
import { FrndReducer } from "./frndRepo/reducer";
import { DataReducer } from "./Repo/reducer";
const Reducer=combineReducers({
    Data:DataReducer,
    Followers:FollowerReducer,
     Repo:FrndReducer
});

export const store=createStore(Reducer,applyMiddleware(thunk))


