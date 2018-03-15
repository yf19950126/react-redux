/**
 * Created by Administrator on 2018/3/13.
 */
//1.什么是action
//Action 本质上是 JavaScript 普通对象
//我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作
//多数情况下，我们会把type定义成一个字符串长量

//    项目开发时
// 应用规模越来越大时，建议使用单独的模块或文件来存放 action

// const ADD_TODO = "ADD_TODO"
//
// var a = {
// 	type: ADD_TODO,
// 	text: 'Build my first Redux app'
// }



//导入action类型相关的常量文件
import {ADD,MINUS} from "./actionTypes"

//2.action创建函数 = 生成action的方法
function add(num) {
    return{
        type:ADD,
        number:num
    }
}
// add(1)

// add(1) == {
//     type:ADD,
//     number:1
// }

function minus(num) {
    return{
        type:MINUS,
        number:num
    }
}
// minus(1)


export {add,minus}