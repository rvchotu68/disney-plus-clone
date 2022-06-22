import {combineReducers} from "redux";
import userReducer from "./user/user.slice";
import movieReducer from "./movies/movie.slice";

const rootReducer = combineReducers({
    user : userReducer,
    movie : movieReducer,
});


export default rootReducer;