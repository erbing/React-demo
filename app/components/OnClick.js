/**
 * 组件: 点击事件
 * 功能: 测试组件 的 事件方法 方式
 * 结果: 测试成功
 */

import React from 'react'

export default class OnClick extends React.Component{
    constructor(props) {
        super(props)
        // this.state.time = props.time
        this.curIndex = 1
        this.activeIndex = this.activeIndex.bind(this)
    }

    activeIndex = (index, e)=>{
        console.log(e.target, 456)
        console.log('this is index:', index)
    }

    render() {
        return (
            <div className="test">
                <button onClick={this.activeIndex.bind(this, this.curIndex)}>TEST</button>
            </div>
        )
    }
}