import { combineReducers } from 'redux';
import { quoteReducer as quotes} from './quoteReducer';




export default combineReducers({
    quotes,
}); 