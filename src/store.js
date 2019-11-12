import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { middleware, enhancer } from "./constants/routes";

import rootReducer from "./reducers";


export default function configureStore(initialState = {}) {
    const middlewares = applyMiddleware(middleware)
    const enhancers = composeWithDevTools(middlewares, enhancer)

    const store = createStore(rootReducer, {}, enhancers)

    return store
}
