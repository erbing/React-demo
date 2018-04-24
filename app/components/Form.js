/**
 * 组件: 表单应用
 * 功能: 测试 React 表单应用问题
 * 结果: 测试成功
 */
import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            testV: ''
        }
        this.handle = this.handle.bind(this)
    }

    handle(e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value,
            testV: e.target.value
        })
    }

    render() {
        let {testV,value} = this.state
        return (
            <form>
                <br /> 
                <label>Output:</label>
                <h3>{testV}</h3>
                <label>Input:</label>
                <input type="text" value={value} onChange={this.handle} />    
            </form>
        )
    }
}