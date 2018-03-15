import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//创建存储
import {Provider} from "react-redux"
import  reducers from "./store/reducers"
import {createStore} from "redux"

let store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
