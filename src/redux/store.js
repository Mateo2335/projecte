import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import handleText from './reducers/handleText';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const reducer = combineReducers({
    handleText,
    form: formReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;