/**
 * 组件: 时钟
 * 功能: 测试组件数据流向， 组件中数据的单一性
 * 结果: 测试成功
 */

import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date().toLocaleTimeString()}
        this.state.time = props.time
    }

    tick() {}

    componentDidMount() {
        console.log('cpm mounted +++')
        setTimeout( ()=>{
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, this.state.time)
    }

    componentWillUnmount() {    // 离开当前页面的时候 执行
        console.log('when leave current page')
    }

    render() {
        return (
            <div>
                <h2>this is clock components</h2>
                <h3> It's {this.state.date} </h3>
            </div>
        )
    }
}

export default Clock
