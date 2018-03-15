//1.action创建函数

//todoList:
//添加
//完成

//fliter
//设置过滤条件

//导入常量
import {ADD_TODO,COMPLETE_TODO,SET_FILTER,VisibilityFilter} from "./actionTypes"

//添加事项的创建函数
function addTodo(text) {
    return{
        type:ADD_TODO,
        text
    }
}

//完成事项的创建函数
function completeTodo(id) {
    return{
        type:COMPLETE_TODO,
        id
    }
}

//设置过滤条件的创建函数
function setFilter(filter) {
    return{
        type:SET_FILTER,
        filter
    }
}

export {addTodo,completeTodo,setFilter}