/**
 * 组件: 组件的 组合 children
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

const CompChildren = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <h5>{props.name}</h5>
            {props.children}
        </div>
    )
}

const AllComp = (props) => {
    return (
        <div className="all">
            <div className="left">{props.left}</div>
            <div className="left">{props.right}</div>
            <CompChildren title="this is title" name="this is name"> 
                <button>这就是为了children的啊</button>
            </CompChildren>
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
