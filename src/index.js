import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import store from './redux store/store'

reactDom.render(<Provider store={store}>
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
</Provider>, document.getElementById('root'))