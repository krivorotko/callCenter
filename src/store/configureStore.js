import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const configureStore = () => {
    const appReducer = combineReducers({
        ...rootReducer
    });
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;