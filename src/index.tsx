import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider  } from "react-query";
import App from "./App";
import { RecoilRoot } from "recoil";
import ReduxThunk from 'redux-thunk';
import Reducer from './routes/_reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const queryClient = new QueryClient()
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer,composeEnhancers())


ReactDOM.render(
  <React.StrictMode>
     <Provider
        store={createStoreWithMiddleware(Reducer)}
    >
      <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
