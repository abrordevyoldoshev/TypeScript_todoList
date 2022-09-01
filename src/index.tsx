import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import '../src/assets/sass/basic/basic.scss'
import 'antd/dist/antd.css';
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
    <App/>
    </Provider>
);
