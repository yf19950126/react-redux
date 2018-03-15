import React, { Component } from 'react';
import './App.css';

//导入connect方法
import {connect} from "react-redux"

//导入action构建函数
import {setFilter,addTodo,completeTodo} from "./store/actions"
//导入常量
import {ADD_TODO,COMPLETE_TODO,SET_FILTER,VisibilityFilters} from "./store/actionTypes"
const {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETE} = VisibilityFilters

class App extends Component {
    constructor(props){
        super(props)
        //数据
        this.state={
            // todoList:[],
            // filter:"all"
        }
    }
  render() {
    return (
      <div className="App">
          <h1>待办事项</h1>
          <ul className="todo-list">
              {
                  this.props.todoList.map((ele,index)=>{
                      return <li key={index} className={
                          ele.completed ? "active" : ""
                      } onClick={
                          ()=>{
                              if(!ele.completed){
                                  this.props.dispatch(completeTodo(ele.id))
                              }
                          }
                      }><span>{ele.date}</span>{ele.id}.{ele.text}</li>
                  })
              }
          </ul>
          <div>
              <input type="text" ref="text"/><button onClick={
              ()=>{
                  var text = this.refs.text.value;
                  if(text.trim().length > 0){
                      this.props.dispatch(addTodo(text))
                      this.refs.text.value = ""
                  }
              }
          }>提交</button>
          </div>
          <div className="filter-buttons">
              <button className={this.props.visibilityFilter === SHOW_ALL ? "active" : ""} onClick={
                  ()=>{
                      this.props.dispatch(setFilter(SHOW_ALL))
                  }
              }>全部</button>
              <button className={this.props.visibilityFilter === SHOW_COMPLETE ? "active" : ""} onClick={
                  ()=>{
                      this.props.dispatch(setFilter(SHOW_COMPLETE))
                  }
              }>已完成</button>
              <button className={this.props.visibilityFilter === SHOW_ACTIVE ? "active" : ""} onClick={
                  ()=>{
                      this.props.dispatch(setFilter(SHOW_ACTIVE))
                  }
              }>未完成</button>
          </div>
      </div>
    );
  }
  //组件挂载完成
    componentDidMount(){
        console.log(this.props)
        console.log(this.props.visibilityFilter)

        //添加数据
        this.props.dispatch(addTodo("默认添加的事项"))
    }
}

function select(state) {
    console.log(state)
    return{
        todoList:state.todoList.filter((ele)=>{
            var status = state.visibilityFilter
            if(status === SHOW_ALL){
                return ele;
            }else if(status === SHOW_COMPLETE){
                return ele.completed === true;
            }else{
                return ele.completed === false
            }
        }),
        visibilityFilter:state.visibilityFilter
    }
}
export default connect(select)(App);
