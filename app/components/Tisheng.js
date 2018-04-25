/**
 * 组件: 状态提升
 * 功能: 当几个组件需要 共用数据的情况,解决方案就是 将这部分共享状态提升至他们最近的父组件中进行管理
 * 结果: 测试 ing
 */

import React from 'react'

const scaleNames = {
    c: '摄氏度',
    f: '华氏温度'
}

const handleM = (v) => v ? + v : ''

const toC = (f) => {
    // if (Number.isNaN(f)) return ''
    return (handleM(f) - 32) * 5 / 9
}

const toF = (c) => {
    console.log(c, 'xxx')
    if (c == '') return ''
    return (handleM(c) - 32) * 5 / 9
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

class TwoInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: props.scale,
            temp: props.temp
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTempChange(e.target.value)
    }

    render() {
        const scale = this.props.scale
        const temp = this.props.temp
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temp} onChange={this.handleChange} />
            </fieldset>
        )
    }
}



export default class Tisheng extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp : '',
            scale: 'c'
        }
        this.handleC = this.handleC.bind(this)
        this.handleF = this.handleF.bind(this)
    }

    handleC(c) {
        console.log('this is handleC', c)
        this.setState({
            scale: 'c',
            temp: c
        })
    }

    handleF(f) {
        console.log('this is handleF', f)
        this.setState({
            scale: 'f',
            temp: f
        })
    }

    render() {
        const scale = this.state.scale
        const temp = this.state.temp
        const tempC = scale === 'f' ? toC(temp) : temp
        const tempF = scale === 'c' ? toF(temp) : temp

        return (
            <div>
                <TwoInput scale='c' temp={tempC} onTempChange={this.handleC}/>
                <TwoInput scale='f' temp={tempF} onTempChange={this.handleF}/>
                <ChargeTmp tmp={temp} />
            </div>
        )
    }
}