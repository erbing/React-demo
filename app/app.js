import React from 'react'
import ReactDom from 'react-dom'

import Hello from './components/Hello'
import CompProp from './components/Prop'
import Clock from './components/Clock'
import OnClick from './components/OnClick'
import IfRender from './components/IfRender'
import SanMu from './components/SanMu'
import StopRenderCpt from './components/StopRenderCpt'
import List from './components/List'

const Element = ()=>{
    return (
        <div>
            <h1>Hello, world </h1>
            <Hello />
            <CompProp name="hahahha" age="123123"/>
            <Clock time="2000"/>
            <Clock time="4000"/>
            <Clock time="6000"/>
            <OnClick />
            <IfRender />
            <SanMu />
            <StopRenderCpt />
            <List />
        </div>
    )
}

ReactDom.render(
    <Element />,
    document.getElementById('apps')
)