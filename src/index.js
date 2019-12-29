import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import MainRoute from "./components/pages/index.js";
import App from './components/containers/App'
import { Provider } from 'react-redux'
import store from './store'
const target = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <MainRoute />
            </App>
        </BrowserRouter>
    </Provider>, target);