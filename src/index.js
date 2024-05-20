import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider, connect } from "react-redux";
import reducer from "./reducer";
import App from "./App";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

const rootElement = document.getElementById("root");

sagaMiddleware.run(rootSaga);

const ConnectedApp = connect((state) => {
  return state;
})(App);

render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  rootElement
);
