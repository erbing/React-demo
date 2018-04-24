/**
 * 组件: 三目条件渲染
 * 功能: 测试 React 的三目条件渲染问题
 * 结果: 测试成功
 */

import React from "react"

export default class SanMu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLogin: false}
    }

    render() {
        const isLogin = this.state.isLogin
        return (
            <div>
                <h3>
                    this is test SanMu {isLogin ? 'TRUE' : 'FALSE'}
                </h3>
                {isLogin ? (
                    <div> this is div </div>
                ) : (
                    <span> this is span </span>
                )}
            </div>
        )
    }
}