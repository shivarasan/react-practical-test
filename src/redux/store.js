import { createBrowserHistory } from "history";
import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./rootReducer";
import rootSaga from "./rootSaga";

import { logger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const middlewares =
  process.env.NODE_ENV === "production"
    ? [sagaMiddleware]
    : [sagaMiddleware, logger];

const store = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
)(createStore)(reducers);

store.runSaga = sagaMiddleware.run;
store.asyncReducers = {};

sagaMiddleware.run(rootSaga);

export default store;
