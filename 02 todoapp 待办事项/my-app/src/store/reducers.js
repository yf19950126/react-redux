//合并reduce的方法
import {combineReducers} from "redux"

//导入常量
import {ADD_TODO,COMPLETE_TODO,SET_FILTER,VisibilityFilters} from "./actionTypes"

const {SHOW_ALL} = VisibilityFilters;

//reduce
//todoList是待办事项列表状态

//todoList数组里面的数据
// var i = {
//     id:1,
//     text:"111111",
//     date:"2018-03-10 12:12:12",
//     completed:true
// }

function todoList(state=[],action) {
    switch (action.type){
        case ADD_TODO:
            let id;
            if(state.length === 0){
                id=1
            }else{
               id=state[state.length-1].id + 1
            }
            return [...state,{
                id,
                text:action.text,
                date:new Date().toLocaleString(),
                completed:false
            }]
            break;
        case COMPLETE_TODO:
            return state.map((ele,ind)=>{
                if(ele.id === action.id){
                    ele.completed = true
                }
                return ele
            })
            break;
        default:
            return state
            break
    }
}

//显示状态
function visibilityFilter(state=SHOW_ALL,action) {
    switch (action.type){
        case SET_FILTER:
                return action.filter
            break;
        default:
            return state
            break;
    }
}

//导出合并后的reduce
export default combineReducers({todoList,visibilityFilter})