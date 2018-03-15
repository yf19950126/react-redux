import React, { Component } from 'react';

//1.导入连接函数
//作用:把状态写入组件属性中
import {connect} from "react-redux"

//2.导入actions创建函数
import {add,minus} from "../store/actions"
class MyHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:"header"
        }
    }
    render() {
        return (
            <div className="MyHeader">
                {this.state.msg}
                <div>获取全局状态count:{this.props.c}</div>
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
        );
    }
}
function select(state) {
    return{
        c:state.count
    }
}
export default connect(select)(MyHeader);
