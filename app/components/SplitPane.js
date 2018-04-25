/**
 * 组件: 组件的 组合 vs 继承
 * 功能: 组件是 组合比较好 还是直接继承 比较OK
 * 结果: 测试 ing
 */

import React from 'react'

const LeftComp = () => {
    return (
        <h3> this is left components </h3>
    )
}

const RightComp = () => {
    return (
        <h3> this is right components </h3>
    )
}

const AllComp = (props) => {
    return (
        <div className="all">
            <div className="left">{props.left}</div>
            <div className="left">{props.right}</div>
        </div>
    )
}

export default class SplitPane extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AllComp left={<LeftComp />} right={<RightComp />}/>
        )
    }
}
