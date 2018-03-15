import React, { Component } from 'react';
//导入action创建函数
import {add,minus} from "../store/actions"
//导入Header组件
import MyHeader from "./Header"
class Car extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:"car"
        }
    }
    render() {
        return (
            <div className="Car">
                <div>
                    全局状态count值:{this.props.count}
                </div>
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
                <br/>
                {this.state.msg}
                <MyHeader></MyHeader>
            </div>
        );
    }
}
export default Car;
