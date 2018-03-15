import React, { Component } from 'react';

//1.导入连接函数
//作用:把状态写入组件属性中
import {connect} from "react-redux"

//2.导入actions创建函数
import {add,minus} from "./store/actions"

//1和2 可以得到action对象

import './App.css';
import Car from "./components/Car"

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <div>全局状态count:{this.props.count}</div>
        <div>
          <button onClick={
              ()=>{
                let ran = Math.floor(Math.random()*10)
                this.props.dispatch(add(ran))
              }
          }>count+</button>
          <button onClick={
              ()=>{
                let ran = Math.floor(Math.random()*10)
                this.props.dispatch(minus(ran))
              }
          }>count-</button>
        </div>
        <Car count={this.props.count} dispatch={this.props.dispatch}></Car>
      </div>
    );
  }
  componentWillMount(){
    console.log(this.props);
    //获取状态
      console.log(this.props.count)
    //改变全局状态
    //   this.props.dispatch(add(5))
  }
}
//3.select函数
//把select函数中的返回的对象的属性，注入到对应组件的props属性中
function select(state) {
    //全局状态
    console.log(state)
    return{
      count:state.count,
      name:'张三'
    }
}
export default connect(select)(App);
