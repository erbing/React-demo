/**
 * 组件: 状态提升
 * 功能: 当几个组件需要 共用数据的情况,解决方案就是 将这部分共享状态提升至他们最近的父组件中进行管理
 * 结果: 测试 ing
 */

import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

const ChargeTmp = (props) => {
    if (props.tmp > 100) {
        return (
            <span>水烧开了！！！</span>
        )
    }
    return (
        <span>水没烧开...</span>
    )
}

const TwoInput = (props) => {
    const scale = props.scale
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <h4>Enter temperature in {scaleNames[scale]}:</h4>
            <input value={props.tmp} onChange={handleChange} />
        </div>
    )
}

export default class Tisheng extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <TwoInput />
                <ChargeTmp tmp="100" />
            </div>
        )
    }
}