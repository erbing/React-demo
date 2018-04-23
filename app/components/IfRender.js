/**
 * 组件: 条件渲染
 * 功能: 测试 React 的条件渲染问题
 * 结果: 测试成功
 */

import React from "react";

export default class IfRender extends React.Component {
    constructor(props) {
        super(props)
        // this.Greeting = this.Greeting.bind(this)
    }

    render() {
        return (
            <div className="ssss">
                <p>   </p>
                test this if render :
                <Greeting  isLoggedin={true}/>
            </div>
        )
    }
}

const UserGreeting = (props) => {
    return (
        <div>
            <h4>Welcome back!</h4>
        </div>
    )
}

const GuestGreeting = (props) => {
    return (
        <div>
            <h4>Please sign up</h4>
        </div>
    )
}

const Greeting = (props) => {
    const isLogin = props.isLoggedin
    if (isLogin) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}