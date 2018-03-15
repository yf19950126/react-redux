//3.reducer是干什么的？
// Reducers 指定了应用状态的变化如何响应 actions并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

//reduce实质上是一个函数(最好是纯函数)
//1.reduce 定义一个状态(状态名就是函数名（count）)
//2.params:state是旧的状态(注意:旧的状态只允许使用，不允许改变)   可以使用es6  给state赋初始值
//3.action就是要传入的action对象

//导入action对象类型
import {ADD,MINUS} from "./actionTypes"
//combineReducers  是一个方法
//作用:可以吧多个reducer个合并成一个reducer
import {combineReducers} from "redux"
function count(state = 0,action) {
    //改变状态
    switch (action.type){
        case ADD:
            return state + action.number
            break;
        case MINUS:
            return state - action.number
            break;
        default:
            return state;
    }
}

//导出合并后的reducer
export default  combineReducers({count})

//4.什么是纯函数
// (1)  当传的参数不变时，得到的结果也不变
// (2)  不能改变外部的东西，也不依赖外部的东西

// function add(a,b) {
//     return a + b
// }