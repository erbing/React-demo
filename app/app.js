import React from 'react'
import ReactDom from 'react-dom'

import Hello from './components/Hello'
import CompProp from './components/Prop'
import Clock from './components/Clock'


const Element = ()=>{
    return (
        <div>
            <h1>Hello, world </h1>
            <Hello />
            <CompProp name="hahahha" age="123123"/>
            <Clock />
        </div>
    )
}

ReactDom.render(
    <Element />,
    document.getElementById('apps')
)