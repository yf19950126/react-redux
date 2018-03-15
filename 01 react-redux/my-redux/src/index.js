import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//导入服务
import {Provider} from "react-redux"

//定义存储

//1.导入reducers
import reducers from "./store/reducers"

//2.导入创建存储的方法
import {createStore} from "redux"

//3.创建存储对象
let store = createStore(reducers)

//4.使用存储对象
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


