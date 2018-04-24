/**
 * 组件: 不同 条件下 组件的渲染 以及 隐藏
 * 功能: 测试 React 的 组件的渲染 以及 隐藏 问题
 * 结果: 测试成功
 */

import React from "react"

export default class StopRenderCpt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isError : true
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.setState({
            isError: !this.state.isError
        })
    }

    render() {
        return (
            <div>
                <WarningBanner isWarning={this.state.isError}/>
                <div className="btn">
                    <button onClick={this.changeState}>
                        {this.state.isError ? 'hide' : 'show'}
                    </button>
                </div>
            </div>
        )
    }
}

const WarningBanner = (props) => {
    if (!props.isWarning) {
        return null
    }

    return (
        <div className="warning">
            This is Warning!!!
        </div>
    )
}