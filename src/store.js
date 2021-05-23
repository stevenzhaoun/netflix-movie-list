import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer'

const rootReducer = combineReducers({
  list: reducer
});
const enhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancers);

export default store;